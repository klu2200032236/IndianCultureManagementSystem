// const express = require('express');
// const cors = require('cors');
// const {MongoClient} = require('mongodb');

// const app = express();
// app.use(express.json());
// app.use(cors());

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, console.log(`Server running on the port number ${PORT}`));

// //Configuration (MONGODB)
// var curl = "mongodb://localhost:27017";
// var client = new MongoClient(curl); 

// //TESTING
// app.get('/klef/test', async function(req, res){
//     //res.send("Koneru Lakshmaiah Education Foundation");
//     res.json("Koneru Lakshmaiah Education Foundation");
// });

// app.post('/klef/cse', async function(req, res){
//     res.json(req.body);
//     //res.json("Computer Science and Engineering");
// });

// //REGISTRATION MODULE
// app.post('/registration/signup', async function(req, res){
//     try
//     {
//         conn = await client.connect();
//         db = conn.db('MSWD');
//         users = db.collection('users');
//         data = await users.insertOne(req.body);
//         conn.close();
//         res.json("Registered successfully...");
//     }catch(err)
//     {
//         res.json(err).status(404);
//     }
// });

// //LOGIN MODULE
// app.post('/login/signin', async function(req, res){
//     try
//     {
//         conn = await client.connect();
//         db = conn.db('MSWD');
//         users = db.collection('users');
//         data = await users.count(req.body);
//         conn.close();
//         res.json(data);
//     }catch(err)
//     {
//         res.json(err).status(404);
//     }
// });



// //HOME MODULE
// app.post('/home/uname', async function(req, res){
//     try
//     {
//         conn = await client.connect();
//         db = conn.db('MSWD');
//         users = db.collection('users');
//         data = await users.find(req.body).toArray();
//         conn.close();
//         res.json(data);
//     }catch(err)
//     {
//         res.json(err).status(404);
//     }
// });




