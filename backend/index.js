const express = require('express')
const app = express()
const port = 5000
// const mongoDB = require("./db")
// const mongoDB = () => {
const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017/foodexpress';
    mongoose.connect(mongoURI)
        .then(() => {
            console.log('Connected to MongoDB');
        })
        .catch((error) => {
            console.error('Error connecting to MongoDB:', error);
        });
// };

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})