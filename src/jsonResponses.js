const users = {};

// function to respond with JSON
const respondJSON = (request, response, status, object) => {
  response.writeHead(status, { 'Content-Type': 'application/json' });
  response.write(JSON.stringify(object));
  response.end();
};

// function to respond without json body
const respondJSONMeta = (request, response, status) => {
  response.writeHead(status, { 'Content-Type': 'application/json' });
  response.end();
};

// getUsers function
const getUsers = (request, response) => {
  // create responseJSON to send
  const responseJSON = {
    users,
  };

  // respond with 200
  return respondJSON(request, response, 200, responseJSON);
};

const getUsersMeta = (request, response) => respondJSONMeta(request, response, 200);

// notReal function
const getNotReal = (request, response) => {
  // create responseJSON to send
  const responseJSON = {
    message: '404, Page Not Real',
    id: 'notReal',
  };

  // respond with 404
  return respondJSON(request, response, 404, responseJSON);
};

const getNotRealMeta = (request, response) => respondJSONMeta(request, response, 404);

// function to add a user from a POST body
const addUser = (request, response, body) => {
  const responseJSON = {
    message: 'Name and age are both required.',
  };

  // check for both required params, otherwise return a bad request
  if (!body.name || !body.age) {
    responseJSON.id = 'missingParams';
    return respondJSON(request, response, 400, responseJSON);
  }

  // default 201 code (created)
  let responseCode = 201;

  if (users[body.name]) {
    responseCode = 204; // 204 is for updated object, so set this if users already exists
  } else {
    users[body.name] = {}; // otherwise create an object with that name
  }

  // add or update fields for this user name
  users[body.name].name = body.name;
  users[body.name].age = body.age;

  // respond with message if 201 code
  if (responseCode === 201) {
    responseJSON.message = 'Created Successfully';
    return respondJSON(request, response, responseCode, responseJSON);
  }
  // respond with meta if 204 code
  return respondJSONMeta(request, response, responseCode);
};

// not found message
const notFound = (request, response) => {
  const responseJSON = {
    message: 'The page you are looking for was not found.',
    id: 'notFound',
  };

  return respondJSON(request, response, 404, responseJSON);
};

// export methods
module.exports = {
  getUsers,
  getUsersMeta,
  getNotReal,
  getNotRealMeta,
  addUser,
  notFound,
};
