// dependencies
const express = require('express');
const path = require('path');

// express server
const app = express();
const PORT = 3030;

const movies = [
];

// set up express to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// set up public folder for static pages
app.use(express.static('public'));

// sending index.html
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/public/index.html')));

// sending movies array to server
app.get('/api/movies', (req, res) => res.json(movies));

// Create New Movie - takes in JSON input
app.post('/api/movies', (req, res) => {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    const myMovie = req.body;
  
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    
    console.log(myMovie);
  
    movies.push(myMovie);
    res.json(myMovie);
  });


// listener
app.listen(PORT, ()=>{console.log(`app listening on ${PORT}`)}); 