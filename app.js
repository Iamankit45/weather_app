const express = require('express');

const app = express();

app.get('/', (req, res) => {

    res.send("hello from te express side ");
})

app.get('/about', (req, res) => {

    res.send("hello from the about page ");
})

app.get('/profile', (req, res) => {

    res.send("hello from the profile page ");
})




app.listen(8000,()=>{
    console.log("listening on port 8000");
})
