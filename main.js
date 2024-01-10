const http = require('http');
const handleRequest = require('./routes');
const { setupDatabase } = require('./dbSetup');

const port = 3000;

setupDatabase();

const server = http.createServer((req, res) => {
    handleRequest(req, res);
});

server.listen(port, (err) => {
    if (err) {
        console.log('Somethin went wrong', err);
    } else {
        console.log(`server is runing at port ${port}`)
    }
});