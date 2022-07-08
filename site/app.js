const express = require('express')
const app = express()
const port = 3000
const path = require('path')

app.use(express.static(path.resolve(__dirname,'public')))

app.get('/',(req,res) => res.sendFile(path.resolve(__dirname,'views','home.html')))
app.get('/detalle',(req,res) => res.sendFile(path.resolve(__dirname,'views','detalle.html')))
app.get('/carrito',(req,res) => res.sendFile(path.resolve(__dirname,'views','carrito.html')))
app.get('/login',(req,res) => res.sendFile(path.resolve(__dirname,'views','login.html')))
app.get('/register',(req,res) => res.sendFile(path.resolve(__dirname,'views','register.html')))

app.listen(port,() => console.log(`Servidor corriendo en http://localhost:${port}`))