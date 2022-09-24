const mongoose = require("mongoose");
const dataSchema = new mongoose.Schema({
  
    title:{
        type:String
    },
    tagline:{
        type:String
    },
    note:{
        type:String
    },
    
});

module.exports = mongoose.model('Notes', dataSchema);