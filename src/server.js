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
    '/favicon.png': htmlHandler.getFavicon,
    '/pokemon': jsonHandler.getPokemon,
    '/getFavorites': jsonHandler.getFavorites,
    notFound: htmlHandler.notFound,
  },
  HEAD: {
    '/pokemon': jsonHandler.getPokemonMeta,
    '/getFavorites': jsonHandler.getFavoritesMeta,
  },
};


// function to handle requests
const onRequest = (request, response) => {
  const parsedUrl = url.parse(request.url);
  const params = query.parse(parsedUrl.query); // needed for checking valid and loggedIn params

  if (parsedUrl.pathname === '/addFavorite') {
    // variable to hold passed in data
    const body = [];

    // error handler
    request.on('error', (err) => {
      response.statusCode = 400;
      console.log(err);
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
      jsonHandler.addFavorite(request, response, bodyParams);
    }); // otherwise run appropriate method
  } else if (urlStruct[request.method][parsedUrl.pathname]) {
    urlStruct[request.method][parsedUrl.pathname](request, response, params);
  } else {
    urlStruct[request.method].notFound(request, response);
  }
};

// start server
http.createServer(onRequest).listen(port);
