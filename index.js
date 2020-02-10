const express = require('express');

const Hubs = require('./data/hubs-model');

const server = express();

server.use(express.json());

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
            res.status(500).json({errorMessage: 'GET error'});
        })
})

server.post('/api/hubs', (req, res) => {
    const hubInfo = req.body;
    Hubs.add(hubInfo)
        .then(hub => {
            res.status(201).json(hub);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({errorMessage: 'POST error'});
        })
})

const port = 5000;
server.listen(port, () => console.log(`\n ** API listening on port ${port} **\n`));

// npm run server