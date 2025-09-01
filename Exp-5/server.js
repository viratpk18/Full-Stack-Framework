const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

const DATA_FILE = path.join(__dirname, 'data.json');

app.use(bodyParser.json());
app.use(express.static('public'));

// GET: Read tasks
app.get('/api/todos', (req, res) => {
  fs.readFile(DATA_FILE, 'utf8', (err, data) => {
    if (err) return res.status(500).send('Error reading data');
    res.json(JSON.parse(data || '[]'));
  });
});

// POST: Save tasks
app.post('/api/todos', (req, res) => {
  fs.writeFile(DATA_FILE, JSON.stringify(req.body), err => {
    if (err) return res.status(500).send('Error saving data');
    res.sendStatus(200);
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
