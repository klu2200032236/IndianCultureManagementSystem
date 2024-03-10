const express = require('express')
const cors =require('cors')

const app = new express();
app.use(express.json());

app.use(cors());

app.get('/home',(req,res) =>{
    res.send("It is a Home Page-New Page-New 2 Page")
})

app.listen(8051);
console.log("Server Running");
