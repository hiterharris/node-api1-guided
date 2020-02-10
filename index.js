const express = require('express'); // Common JS

const server = express();

server.get('/', (req, res) => {
    res.json({hello: 'Web 26'});
});

const port = 5000;
server.listen(port, () => console.log(`\n ** API listening on port ${port} **\n`));