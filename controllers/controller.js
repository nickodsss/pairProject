const {Category,Post,Profile,User} = require ('../models/index')
const {Op} = require ('sequelize')

class Controller {
    static home (request,response){
        response.render('home')
    }
}

module.exports = Controller