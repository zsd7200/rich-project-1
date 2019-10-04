const users = {};
const Pokedex = require('pokedex-promise-v2');
const P = new Pokedex();

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

// getPokemon function
const getPokemon = (request, response, params) => {
    const responseJSON = {
        message: 'This request has the required parameters',
    };
    
    // check for valid param
    if (!params.valid || params.valid !== 'true') {
        responseJSON.message = 'Missing valid query parameter set to true';
        responseJSON.id = 'badRequest';

        return respondJSON(request, response, 400, responseJSON);
    }
    
    console.log(params);
};

const getPokemonMeta = (request, response) => respondJSONMeta(request, response, 200);

// function to add a pokemon to favorites from POST body
const addFavorite = (request, response, body) => {
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
  getPokemon,
  getPokemonMeta,
  addFavorite,
  notFound,
};
