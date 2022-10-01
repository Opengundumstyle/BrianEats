// app.js

const express = require('express'); // web framework
// import express from 'express'
const fetch = require('node-fetch'); // for making AJAX requests

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
  
// get api 

  app.get('/api', (request, response) => {
    const urlStart = 'https://api.yelp.com/v3';
    const apiKey = process.env.YELP_API_KEY; // from .env (dev) or Heroku
    const searchTerm = request.query.searchTerm; // from query string
    const url = `${urlStart}/businesses/search?categories=${searchTerm}&location=SF&limit=20`;
    
    console.log(`Fetching: ${url}`);
  
    fetch(url,{
        headers: { 
                    'Access-Control-Allow-Origin':'*',
                    'Authorization': "Bearer " + apiKey,
                    'Content-Type': 'application/json'
                },
                method:'GET',
                credentials:"include",
    }) // AJAX request to API
      .then(apiResponse => apiResponse.json())
      .then(data => response.send(data))
      .catch(error => response.send(error));
  });


  