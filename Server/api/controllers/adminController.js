const userService = require('../services/user-service');
const adminService = require('../services/adminService')

const adminController = {
    send(request, response){
        userService.sendManageExams(request.body,response);
    },
    createExam(request, response){
        adminService.addExam(request.body,response);
    },
    updateExam(request, response){
        adminService.editExam(request.body,response);
    },
}

module.exports =  adminController;