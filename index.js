// importing the required

const express = require('express');

// creating an express application

const app = express();
const port = 3000;

// creating an endpoint that returns your details
app.get('/my-details', (req, res) => {
    const myDetails = {
        name: 'Marachukwu Nweke /n',
        address: 'No 1 Abba Crescent Achara Layout, Enugu /n',
        phone: '08101650031 /n',
        email: 'valmarnas@gmail.com /n',
        height: '5 ft 7 /n',
        complexion: 'fair /n',
        personality: 'Advocate INJT /n',
        temperament: 'Melanchony'
    };

    // sending the details as a JSON response
    res.json(myDetails);
});

// starting the server
app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}/my-details`);
});