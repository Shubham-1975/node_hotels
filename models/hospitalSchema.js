const mongoose = require('mongoose');

const hospitalSchema= mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  age:{
    type:Number,

  },
  work:{
     type:String,
     required:true,
     enum:["nurse","compounder","doctor","patient",]
  }
})

const hospitaldata = mongoose.model('hospitaldata',hospitalSchema);

module.exports = hospitaldata;