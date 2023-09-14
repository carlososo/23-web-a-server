const { Schema, model } = require('mongoose');

const UserSchema = Schema({
  userName:{
    type:String,
    required: [true, " El userName es requerido"]
  },
  email:{
    type:String,
    required: [true, " El email es requerido"]
  },
  phoneNumber:{
    type:Number
  },
  password:{
    type: String,
    required: [true, " El Password es requerido"]
  }
})

module.exports = model('User', UserSchema)