// Import necessary modules
const express = require('express');
const cors = require('cors'); // For handling Cross-Origin Resource Sharing
const app = express();
const port = 3002; // Using a different port to avoid conflicts with previous backend

// Middleware
app.use(cors()); // Enable CORS for all origins (for development)
app.use(express.json()); // Enable parsing of JSON request bodies

// Basic route for the root URL
app.get('/', (req, res) => {
  res.send('IdealTrade Institute Backend API is running!');
});

// API endpoint: Get courses list
app.get('/api/courses', (req, res) => {
  // In a real application, this data would typically come from a database
  const courses = [
    {
      id: 1,
      title: 'Introduction to Forex Trading',
      description: 'Learn the fundamentals of the foreign exchange market, currency pairs, and basic trading strategies.',
      modules: 10,
      level: 'Beginner',
      imageUrl: 'https://placehold.co/400x250/F0F0F0/333333?text=Forex+Trading'
    },
    {
      id: 2,
      title: 'Advanced Stock Market Strategies',
      description: 'Dive deep into technical analysis, fundamental analysis, and advanced equity trading techniques.',
      modules: 15,
      level: 'Intermediate',
      imageUrl: 'https://placehold.co/400x250/F0F0F0/333333?text=Stock+Market'
    },
    {
      id: 3,
      title: 'Cryptocurrency Trading Essentials',
      description: 'Understand the blockchain, crypto exchanges, and strategies for trading digital assets.',
      modules: 8,
      level: 'Beginner',
      imageUrl: 'https://placehold.co/400x250/F0F0F0/333333?text=Crypto+Trading'
    },
    {
      id: 4,
      title: 'Options Trading Masterclass',
      description: 'Explore complex options strategies for income generation and risk management.',
      modules: 12,
      level: 'Advanced',
      imageUrl: 'https://placehold.co/400x250/F0F0F0/333333?text=Options+Trading'
    }
  ];
  res.json(courses);
});

// API endpoint: Submit contact form
app.post('/api/contact', (req, res) => {
  const { name, email, subject, message } = req.body;

  // In a real application, you would save this data to a database,
  // send an email, or integrate with a CRM system.
  console.log('New Contact Form Submission:', { name, email, subject, message });

  if (name && email && subject && message) {
    res.status(200).json({ message: 'Contact request received successfully!', data: req.body });
  } else {
    res.status(400).json({ message: 'Missing required fields for contact form.' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`IdealTrade Institute backend server listening at http://localhost:${port}`);
});

/*
To run this Express backend:
1. Make sure you have Node.js installed.
2. Create a new directory for your backend (e.g., 'idealtrade-backend').
3. Navigate into that directory in your terminal.
4. Run `npm init -y` to create a package.json file.
5. Install necessary packages: `npm install express cors`
6. Save this code as `server.js` (or any other name) in the 'idealtrade-backend' directory.
7. Run the server using `node server.js`.

You can then access the API endpoints, for example:
- http://localhost:3002/
- http://localhost:3002/api/courses
*/
