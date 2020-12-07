const express = require('express');
const app = express();
let bodyParser = require('body-parser');
const port = process.env.PORT || 3000;


app.get("/", (req, res) => res.json({message: "Welcome to my personal blog rest api!"}));

//parse application/json and look for raw text                                        
app.use(bodyParser.json());                                     
app.use(bodyParser.urlencoded({extended: true}));               
app.use(bodyParser.text());                                    
app.use(bodyParser.json({ type: 'application/json'})); 

//call routes
const hotelRoutes = require('./src/routes/hotel');

//routes that handles requests
app.use('/hotel', hotelRoutes);

//server port
app.listen(port);
console.log("Listening on port " + port);

module.exports = app; // for testing