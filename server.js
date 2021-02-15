// dependencies
const express = require('express');
const path = require('path');

// express server
const app = express();
const PORT = 3030;

// set up express to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

// sending index.html
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/public/index.html')));





// listener
app.listen(PORT, ()=>{console.log(`app listening on ${PORT}`)}); 