const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();  // Load environment variables

const app = express();

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.error('MongoDB connection error:', err));

// Body-parser middleware
app.use(express.json());

// Import the subscription routes
const subscriptionRoutes = require('./routes/subscription');

// Use the routes
app.use('/api', subscriptionRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
