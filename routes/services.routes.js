const { Router } = require('express');

const { serviceGet, servicePost, servicePut, serviceDel } = require('../controllers/services.controller')

const router = Router()

//CRUD 
router.post("/", servicePost );//C
router.get("/", serviceGet );//R
router.put("/:id", servicePut ); //U
router.delete("/:id", serviceDel );//D

module.exports = router