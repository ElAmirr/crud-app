// HAndles the HTTP routes

const { getAllitems, addItem, updatedItem, deleteItem } = require('./handlers');

function handleRequest(req, res) {
    if (req.method === 'GET') {
        if (req.url === '/') {
            getAllitems(req, res);
        }
    } else if (req.method === 'POST') {
        if (req.url === '/') {
            addItem(req, res);
        }
    } else if (req.method === 'PUT') {
        if (req.url === '/') {
            updatedItem(req, res);
        }
    } else if (req.method === 'DELETE') {
        if (req.url === '/') {
            deleteItem(req, res);
        }
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' })
        res.end('Request Not Found')
    }
}
module.exports = handleRequest;