const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');

// load environment variables
dotenv.config();

const dbPort = process.env.DATABASE_PORT || 27017;
const mongoURL = process.env.DATABASE_URL || "mongodb://localhost";
const serverPort = process.env.SERVER_PORT || 8080;

// Middleware
app.use(express.json());
app.use(cors());

// DB
mongoose.connect(`${mongoURL}:${dbPort}/groceries`, 
    { 
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    })
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

// Model
const Grocery = mongoose.model('Grocery', new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        min: 1
    }
}));
  
// RESTful Api

// Add
app.post('/api/groceries', async (req, res) => {
    let grocery = new Grocery({
        name: req.body.name,
        quantity: req.body.quantity
    });
    grocery = await grocery.save();
    res.send(grocery);
});
  
// Read
app.get('/api/groceries', async (req, res) => {
    const groceries = await Grocery.find();
    res.send(groceries);
});
  
// Update
app.put('/api/groceries/:id', async (req, res) => {
    const grocery = await Grocery.findByIdAndUpdate(req.params.id, 
    { 
        name: req.body.name,
        quantity: req.body.quantity
    }, { new: false });
  
    res.send(grocery);
});
  
// Delete
app.delete('/api/groceries/:id', async (req, res) => {
    const grocery = await Grocery.findByIdAndDelete(req.params.id);
    res.send(grocery);
});
  

// Server
app.listen(serverPort, () => {
    console.log(`Server is running on port ${serverPort}`);
});
