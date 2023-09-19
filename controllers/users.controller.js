const { response, request} = require("express")

//Model - Schema
const User = require('../models/users.model')


//Read
const userGet = async(req = request, res = response) => {
  try {
    const queryParam = {state:true};
    const { limite = 10 } = req.query
    const NumeroEntradas = await User.countDocuments()
    const usuario = await User.find(queryParam).populate("service").limit(Number(limite));
    res.status(200).json({
      total: NumeroEntradas,
      usuario
    })
  } catch (error) {
    res.status(500).json({
      message:'Algo Ocurrio cuando buscabamos usuarios',
    })
  }
}


//Create
const userPost = async(req = request, res = response) => {

  try {
    const { userName, email, phoneNumber, password, state, service } = req.body
    const data ={userName, email, phoneNumber, password, state, service}

    const user = new User(data)
    await user.save()

    res.status(200).json({
      message:'Usuarios Route desde el controller -- POST',
      user
    })
    
  } catch (error) {
    res.status(500).json({
      message:'Error en el servidor',
      error
    })
  }
}

//Update
const userPut = async(req = request, res) => {

  try {
    const { id } = req.params;
    const { userName, email, phoneNumber, password, state, service } = req.body
    const data = {userName, email, phoneNumber, password, state, service}

    const user = await User.findByIdAndUpdate(id, data)
    res.status(200).json({
      message:'Usuarios Modificados con exito',
      ok:true
    })
    
  } catch (error) {
    res.status(500).json({
      message:"Algo salio mal cuando intentabamos actualizar el usuario"
    })
  }
}

//Delete
const userDel = async(req = request, res = response ) => {
  try {
    const {id} = req.params
    const falseState = {state: false}
    const user = await User.findByIdAndUpdate(id, falseState)
  
    res.status(200).json({
      message: ` El Usuario con el id: ${id} fue eliminado`,
      user
    })
    
    } catch (error) {
      res.status(500).json({
        message:"Algo salio mal cuando intentabamos eliminar el usuario"
    })
  }
}

module.exports = {
  userGet,
  userPost,
  userPut,
  userDel
}