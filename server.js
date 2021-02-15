// dependencies
const express = require('express');
const path = require('path');

// express server
const app = express();
const PORT = 3030;

const movies = [
    {title: "Jaws",
     director: "Stephen Spielberg",
     cast: ["Richard Dreyfuss", "Roy Schneider"],
     plot: "Shark terrorizes small town",
     rating: 3,
     review: "Yer gonna need a bigger boat."}
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

// listener
app.listen(PORT, ()=>{console.log(`app listening on ${PORT}`)}); 