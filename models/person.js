// const { uniq } = require('lodash');
const mongoose = require('mongoose');

//define the person schema
const personSchema = mongoose.Schema(
  {
    name:{
      type:String,
      required:true,
    },
    age:{
      type:Number
    },
    work:{
      type:String,
      enum:['chef','waiter','manager'],
      required:true
    },
    mobile:{
      type:Number,
      required:true
    },

   email: {
       type:String,
       required:true,
       unique:true
    },
    address:
    {
      type:String
    },
   sallery:
   {
    type:Number,
    required:true
   }
  });

  const person = mongoose.model('person',personSchema);
 
module.exports = person;