// Import the Express framework
const express = require('express');

// Create a new Express application
const app = express();

// Define a simple route
app.get('/', (req, res) => {
  // Return a message to the client
  res.send('Hello, world!');
});

const port = process.env.PORT || 3000;

// Start the Express server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});