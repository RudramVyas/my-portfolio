const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Serve static files in the public folder
app.use(express.static('public'));

// Parse incoming form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Store form submissions (in memory for now)
const submissions = [];

// Handle form submission (POST request)
app.post('/submit-form', (req, res) => {
    const { name, email, message } = req.body;
    submissions.push({ name, email, message, date: new Date().toISOString() });
    console.log('New submission:', { name, email, message });
    res.json({ success: true, message: 'Form submitted successfully!' });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
