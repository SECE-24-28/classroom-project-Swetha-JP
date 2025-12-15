const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Database connection
const connectDB = require('./config/database');
connectDB();

// Routes
app.get('/', (req, res) => {
  res.json({ 
    message: 'Mobile Recharge Backend API is running!',
    status: 'success',
    timestamp: new Date().toISOString()
  });
});

// Test route
app.get('/api/test', (req, res) => {
  res.json({ 
    message: 'Test route working!',
    database: mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected'
  });
});

// Import routes
const userRoutes = require('./routes/users');
app.use('/api/users', userRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📱 Mobile Recharge Backend API started successfully`);
});