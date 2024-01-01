
const express = require('express');

// creating an express application

const app = express();




app.get('/users', (req, res) => {
    const myDetails = {
        name: "This is the userRoutes"
    };

    // sending the details as a JSON response
    res.json(myDetails);
});

module.exports = app;