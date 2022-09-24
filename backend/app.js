const express = require('express');
const NotesModel = require('./models/dataModel');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
// var cors = require('cors')
app.use(express.urlencoded({extended:true}));
app.use(express.json());
dotenv.config()


// connections
mongoose
  .connect(
    process.env.MONGO_URL,
    { autoCreate: true }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Couldn't connect to Atlas: ", err.message));

const con=mongoose.connection 

// routes
// const dataRouter = require('./routes/Notes');
// app.use('/Notes', dataRouter);

app.post('/Notes', async (req, res)=>{
  const {title, tagline, note} = req.body;

  try{
    const newNote = await NotesModel.create({title, tagline, note});
    res.json(newNote);
  } catch(err){
    res.status(500).send(err);
  }
})

app.get('/', async (req, res)=>{
  

  try{
    const newNote = await NotesModel.find();
    res.json(newNote);
  } catch(err){
    res.status(500).send(err);
  }
})
// cors headers
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
  });

app.listen(9001,()=>{
  console.log("listening to 9001");
})