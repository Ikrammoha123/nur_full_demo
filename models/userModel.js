const mongoose = require("mongoose");

const userModel = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  pnumber: {
    type: Number,
    required: true
  }
})

const UserModel = mongoose.model('User',userModel)

module.exports = UserModel;