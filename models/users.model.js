const { Schema, model } = require('mongoose');

const UserSchema = Schema({
  userName:{
    type:String,
    required: [true, " El userName es requerido"],
    unique: true
  },
  email:{
    type:String,
    required: [true, " El email es requerido"],
    unique: true
  },
  phoneNumber:{
    type:Number
  },
  password:{
    type: String,
    required: [true, "El Password es requerido"]
  },
  state:{
    type: Boolean,
    default: true
  },
  service:{
    type: Schema.Types.ObjectId,
    ref: 'Service',
    required: [true, "El servicio es requerido"]
  },
  // rentals:{
  //   type: Schema.Types.ObjectId,
  //   ref: 'Rental',
  //   required:true
  // }
})

module.exports = model('User', UserSchema)