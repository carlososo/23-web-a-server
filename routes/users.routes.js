const { Router } = require('express');

const { userGet, userPost, userPut, userDel } = require('../controllers/users.controller')

const router = Router()


router.get("/", userGet );
router.post("/", userPost );
router.put("/:id", userPut );
router.delete("/:id", userDel );


module.exports = router