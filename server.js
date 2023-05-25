const express = require('express');
const app = express();

app.get("/pun", (req, res)=>{

    res.send("hello");
})

app.get("/", (req, res)=>{

    res.send("welcome to my backend API");

})

app.listen(3000, ()=> {

    console.log('listening');
})