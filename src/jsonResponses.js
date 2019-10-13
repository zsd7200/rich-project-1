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
  // default is 404 since it would have returned nothing even if it had a valid param
  let responseJSON = {
    message: "No data was found.\nDouble-check that the Pok&eacute;mon's name is spelled correctly, then try again.",
    id: 'badRequest',
  };

  // check for valid param
  if (!params['']) {
    responseJSON.message = 'Missing valid query parameter';
    responseJSON.id = 'badRequest';

    return respondJSON(request, response, 400, responseJSON);
  }

  // get pokemon data and set it equal to responseJSON
  P.getPokemonByName(params[''], (res, err) => {
    if (!err) {
      responseJSON = res;
    } else {
      console.log(err);
    }
  });

  // set a 1 second timer to let PokeAPI get data, otherwise it wouldn't
  // return data until a refresh occured
  setTimeout(() => {
    if (!responseJSON.message) {
      return respondJSON(request, response, 200, responseJSON);
    }
    return respondJSON(request, response, 400, responseJSON);
  }, 1250);

  return true;
};

const getPokemonMeta = (request, response) => respondJSONMeta(request, response, 200);

// function to add a pokemon to favorites from POST body
const addFavorite = (request, response, body) => {
  const responseJSON = {
    message: 'UUID and Pok&eacute name are required to favorite.',
  };

  // check for both required params, otherwise return a bad request
  if (!body.uuid || !body.pkmnName) {
    responseJSON.id = 'missingParams';
    return respondJSON(request, response, 400, responseJSON);
  }

  // default 201 code (created)
  let responseCode = 201;

  if (users[body.uuid]) {
    responseCode = 204; // 204 is for updated object, so set this if users already exists
  } else {
    users[body.uuid] = {}; // otherwise create an object with that name
    users[body.uuid].pokemon = []; // holds new pokemon names
  }

  // add or update fields for this user name
  users[body.uuid].uuid = body.uuid;
  users[body.uuid].pokemon.push(body.pkmnName);

  console.log(users);

  // respond with message if 201 code
  if (responseCode === 201) {
    responseJSON.message = 'Created Successfully';
    return respondJSON(request, response, responseCode, responseJSON);
  }
  // respond with meta if 204 code
  return respondJSONMeta(request, response, responseCode);
};

// getUsers function
const getFavorites = (request, response) => {
  // create responseJSON to send
  const responseJSON = {
    users,
  };

  // respond with 200
  return respondJSON(request, response, 200, responseJSON);
};

const getFavoritesMeta = (request, response) => respondJSONMeta(request, response, 200);

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
  getFavorites,
  getFavoritesMeta,
  notFound,
};
