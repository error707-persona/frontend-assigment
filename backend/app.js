const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config()

const app = express();

// connections
mongoose
  .connect(
    process.env.MONGO_URL,
    { autoCreate: true }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Couldn't connect to Atlas: ", err.message));

const con=mongoose.connection 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// app.use('cors');
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
  });

//   routes
const dataRouter = require('../backend/routes/Notes');
app.use('/Notes', dataRouter);

  app.listen(9000, ()=>{
    console.log('Server started');
  })