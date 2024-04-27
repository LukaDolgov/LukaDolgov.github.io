const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://lukadolgovbusiness:Pttp2006!!!@cluster0.yqqnplv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log('Connected to MongoDB');
  }).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
  
  module.exports = mongoose.connection;
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  business: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;