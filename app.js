const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Set EJS as the template engine
app.set('view engine', 'ejs');

// Serve static files
app.use(express.static('public'));

// Use body-parser to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Import routes
const calculatorRoutes = require('./routes/calculatorRoutes');
app.use('/', calculatorRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
