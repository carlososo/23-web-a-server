const { Router } = require('express');

const router = Router()


router.get("/", (req, res) => res.status(200).json({message:'Usuarios Route'}));

module.exports = router