
module.exports = {
    usuarios: (req,res) => {
        let response = {
            status : 200,
            meta : {
                length : "Usuarios.length",
                url:"www.rutagenerica.com"
            },
            data : "Usuarios"
        }
        return res.status(200).json(response)
    },
    usuarioEspecifico:(req,res) => {
        let response = {
            status : 200,
            meta : {
                length : "Usuario.length",
                url:"www.rutagenerica.com"
            },
            data : "Usuario"
        }
        return res.status(200).json(response)
    },
    productos:(req,res) => {
        let response = {
            status : 200,
            meta : {
                length : "Productos.length",
                url:"www.rutagenerica.com"
            },
            data : "Productos"
        }
        return res.status(200).json(response)
    },
    productoEspecifico:(req,res) => {
        let response = {
            status : 200,
            meta : {
                length : "Producto.length",
                url:"www.rutagenerica.com"
            },
            data : "Producto"
        }
        return res.status(200).json(response)
    },
    agregar:(req,res) => {
        let response = {
            status : 200,
            meta : {
                length : "ProductoAgregado.length",
                url:"www.rutagenerica.com"
            },
            data : "ProductoAgregado"
        }
        return res.status(200).json(response)
    },
    editar:(req,res) => {
        let response = {
            status : 200,
            meta : {
                length : "ProductoEditado.length",
                url:"www.rutagenerica.com"
            },
            data : "ProductoEditado"
        }
        return res.status(200).json(response)
    },
    eliminar:(req,res) => {
        let response = {
            status : 200,
            meta : {
                length : "ProductoEliminado.length",
                url:"www.rutagenerica.com"
            },
            data : "ProductoEliminado"
        }
        return res.status(200).json(response)
    },
}