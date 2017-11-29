const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const fs = require('fs');
const app = express();

// API file for interacting with MongoDB
const api = require('./server/routes/api');


// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

//Declaring JSON pathing and parsing it 

//Temporary have controller in server.js
let rawSpells = fs.readFileSync('./src/assets/dnd_spells/spells.json');
let spells = JSON.parse(rawSpells);

//If it grabbed the right amount of data.
console.log(spells.jsonSpellData.length);

// Testing for all the pulled names from the json data. 
//  for (var i = 0; i < spells.jsonSpellData.length; i++){
//     console.log(spells.jsonSpellData[i].name);
// }

// Angular DIST output folder
// app.use(express.static(path.join(__dirname, 'dist')));

// Future API location
// app.use('/api', api);

// Send all other requests to the Angular app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

//Set Port
const port = process.env.PORT || '8000';
app.set('port', port);



const server = http.createServer(app);

//Local listening for test server
server.listen(port, () => console.log(`Running on localhost:${port}`));