const express = require('express')
const router = express.Router()

let {login,register, processRegister, processLogin,logout} = require('../controllers/usersController')
 /* Traer los middlewares para el inicio de sesion */

router.get('/register',/* login validator */ register)
router.post('/register', /* multer */processRegister)

router.get('/login',/* login validator */ login)
router.post('/login', processLogin)

router.delete('/logout', logout)

module.exports = router