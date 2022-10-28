const express = require('express')
const router = express.Router()

let {usuarios,usuarioEspecifico, productos, productoEspecifico, agregar, editar, eliminar} = require('../../controllers/api/apiController')

/* Usuarios */
router.get('/usuarios', usuarios)
router.get('/usuarios/:id', usuarioEspecifico)

/* Productos */
router.get('/productos', productos)
router.get('/productos/:id', productoEspecifico)

/* Crud */
router.post('/productos/agregar', agregar)
router.put('/productos/editar/:id', editar)
router.delete('/productos/eliminar/:id', eliminar)

module.exports = router