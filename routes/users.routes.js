const { Router } = require('express');
const { userGet, userPost, userPut, userDel } = require('../controllers/users.controller');
const { celebrateValidator } = require('../middlewares/celebrateValidator');

const router = Router()

//CRUD 
router.post("/",celebrateValidator, userPost );//C
router.get("/", userGet );//R
router.put("/:id", userPut ); //U
router.delete("/:id", userDel );//D


module.exports = router