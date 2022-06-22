// app.js

const express = require('express'); // web framework
// import express from 'express'
// const fetch = require('node-fetch'); // for making AJAX requests
// import fetch from 'node-fetch';
// const path = require('path');
// import path from 'path'
// const yelp = require('yelp-fusion')

require('dotenv').config(); 
const app = express();

// serve files / assets from the dist folder
app.use(express.static('dist')); 

// in response to `GET /` requests, send the file `dist/index.html`
app.get('/', (request, response) => {
  response.sendFile(`${__dirname}/dist/index.html`);
});

// Heroku sets process.env.PORT in production; use 8000 in dev
const PORT = process.env.PORT || 8000;
// start up a server listening at PORT; on success, log a message
app.listen(PORT, () => {
  console.log(`Listening at localhost:${PORT}`);
});

// `GET /cors` requests trigger this callback (like controller action)
// `request` object contains request's query string, wildcard params, etc
// `response` object has `send` method for sending our server response
app.get('/cors', (request, response) => {
    console.log(`Fetching: ${request.query.url}`);
     
    fetch(request.query.url) // AJAX request to URL provided in query string
      .then(apiResponse => apiResponse.json()) // parse response as JSON
      .then(data => response.send(data)) // send parsed data to frontend
      .catch(error => response.send(error));
  });
  
  
  app.get('/api', (request, response) => {
    const urlStart = 'https://api.yelp.com/v3';
    const apiKey = process.env.YELP_API_KEY; // from .env (dev) or Heroku
    const searchTerm = request.query.searchTerm; // from query string
    // const url = `${urlStart}/search.php?s=${searchTerm}`;
    console.log(searchTerm)
       const url = `${urlStart}/businesses/search?location=${searchTerm}`;
    
    console.log(`Fetching: ${url}`);
  
    fetch(url,{
        headers: new Headers({ 
                    'Access-Control-Allow-Origin':'*',
                    'Authorization': apiKey,
                    'Content-Type': 'application/json'
                }),
                method:'GET',
                credentials:"include",
    }) // AJAX request to API
      .then(apiResponse => apiResponse.json())
      .then(data => response.send(data))
      .catch(error => response.send(error));
  });


  console.log(process.env.YElP_API_KEY === "Suoh9_eJO4drWOSINZNWRsI_3QI1pVAbkj_MZeQ-cp3_6zLaQS7frgp7qaCjYrDpyd_VkSPHlERQXGerYE7JKbGAz-x_zRxlBB7W7owCEJiQcoQvZMLj06mn2YyxYnYx")