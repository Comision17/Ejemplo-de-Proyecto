/* Realizar el crud de usuarios */

module.exports = {
    register: (req,res) => {
        return res.render('register')
    },
    processRegister:(req,res) => {
        return res.redirect('login')
    },
    login: (req,res) => {
        return res.render('login')
    },
    processLogin:(req,res) => {
        return res.redirect('profile')
    },
    profile :(req,res) => {
        return res.render('perfil')
    }, 
    logout :(req,res) => {
        return res.redirect('/')
    }, 
}