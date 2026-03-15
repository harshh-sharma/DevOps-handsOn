const express = require("express");
const mongoose = require("mongoose");
const app = express();

const PORT = 3000;

mongoose.connect('mongodb://mongo:27017/testdb')
        .then(() => console.log(`database successfully connected`))
        .catch((err) => console.log("error", err));

app.get('/',(req, res) => {
    res.send('Nodejs server is live');
})

app.get('/home',(req, res) => {
    res.send("home page !!!!")
})

app.listen(PORT,() => {
    console.log(`server is successfully running on ${PORT}`)
})