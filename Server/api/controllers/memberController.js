const userService = require('../services/user-service');

const userController = {
    // login the user
    send(request, response){
        userService.send(request.body,response);
    },
}

module.exports =  userController;