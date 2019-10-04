// all necessary requires
const http = require('http');
const url = require('url');
const query = require('querystring');
const htmlHandler = require('./htmlResponses.js');
const jsonHandler = require('./jsonResponses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

// urlStruct to handle page requests
const urlStruct = {
  GET: {
    '/': htmlHandler.getIndex,
    '/style.css': htmlHandler.getCSS,
    '/bundle.js': htmlHandler.getBundle,
    '/getUsers': jsonHandler.getUsers,
    '/notReal': jsonHandler.getNotReal,
    notFound: jsonHandler.notFound,
  },
  HEAD: {
    '/getUsers': jsonHandler.getUsersMeta,
    '/notReal': jsonHandler.getNotRealMeta,
  },
  POST: {
    '/addUser': jsonHandler.addUser,
  },
};


// function to handle requests
const onRequest = (request, response) => {
  const parsedUrl = url.parse(request.url);

  if (parsedUrl.pathname === '/addUser') {
    // variable to hold passed in data
    const body = [];

    // error handler
    request.on('error', (err) => {
      console.dir(err);
      response.statusCode = 400;
      response.end();
    });

    // add data to byte array
    request.on('data', (chunk) => {
      body.push(chunk);
    });

    // on end of stream
    request.on('end', () => {
      // combine byte array and convert to string
      const bodyString = Buffer.concat(body).toString();

      // parse string into object
      const bodyParams = query.parse(bodyString);

      // run addUser
      jsonHandler.addUser(request, response, bodyParams);
    }); // otherwise run appropriate method
  } else if (urlStruct[request.method][parsedUrl.pathname]) {
    urlStruct[request.method][parsedUrl.pathname](request, response);
  } else {
    urlStruct[request.method].notFound(request, response);
  }
};

// start server
http.createServer(onRequest).listen(port);

console.log(`Listening on 127.0.0.1: ${port}`);
