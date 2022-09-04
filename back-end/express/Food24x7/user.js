const moongose = require('mongoose');


var userSchema = new moongose.Schema({
    username: String,
    password: String,
    email: String,
    status: String,
    token: String
  })

  var userModel = new moongose.model("userInstance", userSchema);

  module.exports = userModel;