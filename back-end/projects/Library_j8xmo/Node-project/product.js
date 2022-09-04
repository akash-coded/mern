const mongoose = require('mongoose');



var productSchema = new mongoose.Schema({
    name:String,
    price: String,
    description: String
  })
  
  
  var productModel = new mongoose.model("productInstance", productSchema)
  

  module.exports = productModel;