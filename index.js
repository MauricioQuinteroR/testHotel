// Import the Express framework
const express = require('express');

// Create a new Express application
const app = express();

// Define a simple route
app.get('/', (req, res) => {
  // Return a message to the client
  res.send('Hello, world!');
});

// Start the Express server
app.listen(3000, () => {
  console.log('Server started at http://localhost:3000');
});
