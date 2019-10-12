const fs = require('fs'); // pull in the file system module

// read client and css files
const index = fs.readFileSync(`${__dirname}/../hosted/client.html`);
const css = fs.readFileSync(`${__dirname}/../hosted/style.css`);
const bundle = fs.readFileSync(`${__dirname}/../hosted/bundle.js`);
const favicon = fs.readFileSync(`${__dirname}/../hosted/favicon.png`);

// get index/css/bundle
const getIndex = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(index);
  response.end();
};

const getCSS = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/css' });
  response.write(css);
  response.end();
};

const getBundle = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'application/javascript' });
  response.write(bundle);
  response.end();
};

const getFavicon = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/png' });
  response.write(favicon);
  response.end();
};

module.exports = {
  getIndex,
  getCSS,
  getBundle,
  getFavicon,
};
