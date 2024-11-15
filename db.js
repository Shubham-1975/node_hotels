const mongoose = require('mongoose');

//Define the mongoDB connection URL
const mongoURL = 'mongodb://localhost:27017/hotel' //Replacxe 'mydatabase with your database name'


// Set up mongoDB connection
mongoose.connect(mongoURL);

//Get the default connection
//Mongoose maintain a default connection object representing the MongoDB connection. 

const db = mongoose.connection;

//Define event listeners for database connection

db.on('connected',()=>{
  console.log('connected to mongoDB server');
});

db.on('error',(err)=>
{
  console.log('mongoDB connection error',err);
});

db.on('disconnected',()=>
{
  console.log('MongoDB Disconnected');
});

//Export the datyabase Connection

module.exports=db;