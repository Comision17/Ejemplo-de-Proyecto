
module.exports = {
    list: (req,res) => {
        return res.render('admin/listaProductos')
    },
    create:(req,res) => {
        return res.render('admin/crearProducto')
    },
    processCreate:(req,res) => {
        return res.redirect('/admin/list')
    },
    edit:(req,res) => {
        /* id = +req.params.id
        let producto = productos.find((elemento) => {
            return elemento.id == id
        }) */
        /* return res.send(producto) Comprobar que esta llegando bien el elemento*/
        return res.render('admin/editarProducto')
    },
    processEdit:(req,res) => {
        /* id = +req.params.id
        let producto = productos.find((elemento) => {
            return elemento.id == id
        }) */
        /* return res.send(producto) Comprobar que esta llegando bien el elemento*/
        return res.redirect('/admin/list')
    },
    destroy: (req,res) => {
        return res.redirect('/admin/list')
    },
}