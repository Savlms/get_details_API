
const express = require('express');

// creating an express application

const app = express();




app.get('/post', (req, res) => {
    const myDetails = {
        name: "This is the postRoutes"
    };

    // sending the details as a JSON response
    res.json(myDetails);
});

module.exports = app;