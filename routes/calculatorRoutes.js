const express = require('express');
const router = express.Router();
const calculatorController = require('../controllers/calculatorController');

// Display the calculator form
router.get('/', calculatorController.getIndex);

// Handle form submission and display result
router.post('/calculate', calculatorController.postCalculate);

module.exports = router;
