const userService = require('../services/user-service');

const adminController = {
    send(request, response){
        userService.sendManageExams(request.body,response);
    },
}

module.exports =  adminController;