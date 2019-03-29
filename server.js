const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config/keys');

//Import router
const itemsRoutes = require('./routes/api/items');

//Config
const APP = express();
const PORT = process.env.PORT || 5000;

//Bodyparser Middleware (It help to parse request bodies to req.body slocation)
APP.use(bodyParser.json());
APP.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

//Connect to MongoDB
mongoose.connect(config.mongoURI, { useNewUrlParser: true })
  .then(() => console.log('Connect Database successfully'))
  .catch(err => {console.log(err)});

//Use router
APP.use('/api/items', itemsRoutes);

//Start server
APP.listen(PORT, () => console.log(`Server started at port ${PORT}`));
