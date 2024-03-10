const express = require('express');
const cors = require('cors');
const {MongoClient} = require('mongodb');

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on the port number ${PORT}`));

//Configuration (MONGODB)
var curl = "mongodb://localhost:27017";
var client = new MongoClient(curl); 

//TESTING
app.get('/klef/test', async function(req, res){
    //res.send("Koneru Lakshmaiah Education Foundation");
    res.json("Koneru Lakshmaiah Education Foundation");
});

app.post('/klef/cse', async function(req, res){
    res.json(req.body);
    //res.json("Computer Science and Engineering");
});

//REGISTRATION MODULE
app.post('/registration/signup', async function(req, res){
    try
    {
        conn = await client.connect();
        db = conn.db('SDPproject');
        users = db.collection('usersdata');
        data = await users.insertOne(req.body);
        conn.close();
        res.json("Registered successfully...");
    }catch(err)
    {
        res.json(err).status(404);
    }
});

//LOGIN MODULE
app.post('/login/signin', async function(req, res){
    try
    {
        conn = await client.connect();
        db = conn.db('SDPproject');
        users = db.collection('usersdata');
        data = await users.count(req.body);
        conn.close();
        res.json(data);
    }catch(err)
    {
        res.json(err).status(404);
    }
});

//HOME MODULE
app.post('/home/uname', async function(req, res){
    try
    {
        conn = await client.connect();
        db = conn.db('SDPproject');
        users = db.collection('usersdata');
        data = await users.find(req.body, {projection:{firstname: true, lastname: true}}).toArray();
        conn.close();
        res.json(data);
    }catch(err)
    {
        res.json(err).status(404);
    }
});

app.post('/home/menu', async function(req, res){
    try
    {
        conn = await client.connect();
        db = conn.db('SDPproject');
        menu = db.collection('menu');
        data = await menu.find({}).sort({mid:1}).toArray();
        conn.close();
        res.json(data);
    }catch(err)
    {
        res.json(err).status(404);
    }
});

app.post('/home/menus', async function(req, res){
    try
    {
        conn = await client.connect();
        db = conn.db('SDPproject');
        menus = db.collection('menus');
        data = await menus.find(req.body).sort({smid:1}).toArray();
        conn.close();
        res.json(data);
    }catch(err)
    {
        res.json(err).status(404);
    }
});

//CHANGE PASSWORD
app.post('/cp/updatepwd', async function(req, res){
    try
    {
        conn = await client.connect();
        db = conn.db('SDPproject');
        users = db.collection('usersdata');
        data = await users.updateOne({emailid : req.body.emailid}, {$set : {pwd : req.body.pwd}});
        conn.close();
        res.json("Password has been updated");
    }catch(err)
    {
        res.json(err).status(404);
    }
});

// Modify your Express backend to include a route for fetching profile details
app.post('/home/profile', async function(req, res){
    try
    {
        conn = await client.connect();
        db = conn.db('SDPproject');
        users = db.collection('usersdata');
        // Assuming the email ID is stored in req.body.emailid
        data = await users.findOne({ emailid: req.body.emailid });
        conn.close();
        res.json(data); // Assuming user data is returned as JSON
    }catch(err)
    {
        res.json(err).status(404);
    }
});


// POST route to add a review
app.post('/reviews', async (req, res) => {
    try {
        const db = client.db('SDPproject');
        const reviews = db.collection('reviews');
        const { review } = req.body;
        await reviews.insertOne({ review });
        res.status(201).json({ message: 'Review added successfully' });
    } catch (error) {
        console.error('Error adding review:', error);
        res.status(500).json({ error: 'Failed to add review' });
    }
});

// GET route to fetch all reviews
app.get('/reviews', async (req, res) => {
    try {
        const db = client.db('SDPproject');
        const reviews = db.collection('reviews');
        const allReviews = await reviews.find({}).toArray();
        const reviewTexts = allReviews.map((review) => review.review);
        res.status(200).json(reviewTexts);
    } catch (error) {
        console.error('Error fetching reviews:', error);
        res.status(500).json({ error: 'Failed to fetch reviews' });
    }
});



// POST route to add a review with rating
app.post('/reviews/add', async (req, res) => {
    try {
        const conn = await client.connect();
        const db = conn.db('SDPproject');
        const reviews = db.collection('reviews');
        const { rating } = req.body;
        await reviews.insertOne({ rating });
        conn.close();
        res.status(201).json({ message: 'Rating added successfully' });
    } catch (error) {
        console.error('Error adding rating:', error);
        res.status(500).json({ error: 'Failed to add rating' });
    }
});


// GET route to fetch overall rating
app.get('/reviews/overall', async (req, res) => {
    try {
        const db = client.db('SDPproject');
        const reviews = db.collection('reviews');
        const allRatings = await reviews.find({}).toArray();
        const totalRatings = allRatings.length;
        const sumRatings = allRatings.reduce((acc, curr) => acc + curr.rating, 0);
        const overallRating = sumRatings / totalRatings;
        res.status(200).json(overallRating);
    } catch (error) {
        console.error('Error fetching overall rating:', error);
        res.status(500).json({ error: 'Failed to fetch overall rating' });
    }
});
