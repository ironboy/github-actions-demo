// Import express
const express = require('express');

// Create a new web server
const app = express();

// Tell the web server to serve everything in the www folder
app.use(express.static('www'));

// Start the web server on port 3000
app.listen(3000, () => console.log('Listening on http://localhost:3000'));