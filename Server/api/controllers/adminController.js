const adminService = require('../services/adminService')

const adminController = {
    send(request, response){
        adminService.sendManageExams(request.body,response);
    },
    sendTests(request, response){
        adminService.sendManageTests(request.body,response);
    },
    createExam(request, response){
        adminService.addExam(request.body,response);
    },
    updateExam(request, response){
        adminService.editExam(request.body,response);
    },
    deleteExam(request, response){
        adminService.deleteExam(request,response);
    },
    createTest(request, response){
        adminService.addTest(request.body,response);
    },
    updateTest(request, response){
        adminService.editTest(request.body,response);
    },
    deleteTest(request, response){
        adminService.deleteTest(request,response);
    }
}

module.exports =  adminController;