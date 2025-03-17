/**
 * Express Web Service Example
 *
 * Features:
 *  - GET "/" route returning a welcome message.
 *  - GET "/user/:id" route returning a user object.
 *  - Middleware for handling unknown routes.
 *  - Error handling middleware.
 */
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// GET route for the root path: returns a welcome message
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to our API service!' });
});

// GET route to fetch a user by ID
app.get('/user/:id', (req, res) => {
  const { id } = req.params;
  const user = { id, name: 'User' };
  res.status(200).json(user);
});

// Middleware to catch undefined routes and respond with 404
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`API is running on http://localhost:${PORT}`);
});
