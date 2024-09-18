const calculatorModel = require('../models/calculatorModel');

// Display the calculator form
exports.getIndex = (req, res) => {
    res.render('index', { result: null });
};

// Process the calculation and return the result
exports.postCalculate = (req, res) => {
    const { num1, num2, operation } = req.body;
    const result = calculatorModel.calculate(parseFloat(num1), parseFloat(num2), operation);
    res.render('index', { result: result });
};
