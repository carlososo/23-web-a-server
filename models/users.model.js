const { Schema, model } = require('mongoose');


const AddressSchema = Schema({
  street:{
    type:String,
  },
  number:{
    type:Number,
  },
  city:{
    type:String,
  }
})

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
  address:{
    type:AddressSchema,
  }
})

module.exports = model('User', UserSchema)
