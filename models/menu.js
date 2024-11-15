const mongoose = require('mongoose');

const menuItemSchema = mongoose.Schema(
  {
    name:{
      type:String,
      required:true,
    },
    price:{
      type:Number,
      default:2
    },
    taste:
    {
      type:String,
      required:true
    },
    is_drink:{
      type:Boolean,
      default:false
    },
    ingredients:{
    type:['String'],
    enum:['chicken wings','spices','saure']
    },
     num_sales:{
      type:Number,
      required:true
    }
  }
)

const menuItem = mongoose.model('menuItem',menuItemSchema);

module.exports = menuItem;