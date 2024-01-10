const fs = require('fs')
const sqlite3 = require('sqlite3').verbose();
const databasePath = './mydatabase.db';

function getAllitems(req, res) {
    const db = new sqlite3.Database(databasePath);
    db.all('SELECT * FROM items', (err, rows) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Internal Server Error');
        } else {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(rows));
        }
        db.close();
    })
}

function addItem(req, res) {
    let data = ''; 
    req.on('data', (chunk) => {
        data += chunk;
    });

    req.on('end',  () => {
        try {
            const newItem = JSON.parse(data);
            const db = new sqlite3.Database(databasePath);
            const insertQuery = db.prepare('INSERT INTO items (name, age) VALUES (?, ?)');

            insertQuery.run(newItem.name, newItem.age, err => {
                if (err) {
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Internal Server Error');
                } else {
                    res.writeHead(201, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ message: 'Item added successfully' }));
                }
                
                insertQuery.finalize()
                db.close()
            });
        } catch (parseError) {
            res.writeHead(400, { 'Content-Type': 'text/plain'});
            req.end('Bad Request: Invalid JSON format');
        }
    });
}

function updatedItem (req, res) {
    let data = '';
    req.on('data', (chunk) => {
        data += chunk;
    });

    req.on('end', () => {
        try {
            const updatedItem = JSON.parse(data);
            const db = new sqlite3.Database(databasePath);
            const updateQuery = db.prepare('UPDATE items SET name=?, age=? WHERE id=?');
            updateQuery.run(updatedItem.name, updatedItem.age, updatedItem.id, err => {
                if (err) {
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Internal Server Error');
                } else {
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({message: 'Item Updated Successfully'}));
                }

                updateQuery.finalize();
                db.close();
            })
        } catch (parseError) {
            res.writeHead(400, { 'Content-Type': 'text/plain' });
            res.end('Bad Request: Invalid JSON format');
        }
        
    })
}

function deleteItem(req, res) {
    let data = '';
    req.on('data', chunk => {
        data += chunk;
    });

    req.on('end', () => {
        try {
            const deleteItem = JSON.parse(data);
            const db = new sqlite3.Database(databasePath);

            const deleteQuery = db.prepare('DELETE FROM items WHERE id=?');
            
            deleteQuery.run(deleteItem.id, err => {
                if (err) {
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Internal Server Error');
                } else {
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({message: 'Item Deleted Successfully'}));
                }

                deleteQuery.finalize();
                db.close();
            })
        } catch (parseError) {
            res.writeHead(400, { 'Content/Type': 'text/plain' });
            res.end('Bad Request: Invalid JSON format');
        }
    })
}

module.exports = { getAllitems, addItem, updatedItem, deleteItem };