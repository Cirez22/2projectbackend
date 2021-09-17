const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');

const app = express();

// environment variables
require('dotenv').config();

// database connections
mongoose.connect(process.env.MONGODB_URL)
  .then(() => console.log("Connected to DB"))
  .catch(() => console.log("Error connecting to MONGO"));

// set up middlewares 
app.use(cors()); // CROSS ORIGIN RESOURCE SHARING
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: '/tmp/',
  createParentPath: true
}));

// routes
// app.use('/api/products', require('./routes/product.js'));
// app.use('/api/categories', require('./routes/categroy.js'));
app.use('/api/newworks', require('./routes/newworkRoute.js'));

// listen to server in a port
const port = 5000
app.listen(port, () => {
  console.log("Server running...", port)
})