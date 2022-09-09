const express = require('express')
const router = express.Router()

let {create,edit,list, processCreate, processEdit, destroy} = require('../controllers/adminController')

router.get('/listar',/* admin check */ list)

router.get('/crear',/* multer */ /* admin check */create)
router.post('/crear',/* multer */ /* admin check */processCreate)

router.get('/editar',/* multer */ /* admin check */edit)
router.put('/editar',/* multer */ /* admin check */processEdit)

router.delete('/destroy',/* multer */ /* admin check */destroy)

module.exports = router