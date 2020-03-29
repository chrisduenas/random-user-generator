const express = require('express');
const app = express();
const axios = require('axios');
// const cors = require('cors'); //removing cors to avoid running two separate commands
const path = require('path');

//middleware
// app.use(cors());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/', (req,res) => {
    res.send("<h1> Home Page </h1>");
});

app.get('/users', (req,res) => {
    axios.get('https://randomuser.me/api/?page=1&results=10')
         .then(response => {
             res.send(response.data);
         });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});