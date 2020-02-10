const express = require('express');

const Hubs = require('./data/hubs-model');

const server = express();

server.get('/', (req, res) => {
    res.json({hello: 'Web 26'});
})

server.get('/api/hubs', (req, res) => {
    Hubs.find()
        .then(hubs => {
            res.status(200).json(hubs);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({errorMessage: 'oops'});
        })
})

const port = 5000;
server.listen(port, () => console.log(`\n ** API listening on port ${port} **\n`));

// npm run server