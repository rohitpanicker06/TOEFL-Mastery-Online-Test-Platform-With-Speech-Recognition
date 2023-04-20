const adminService = require('../services/adminService')

const adminController = {
    send(request, response){
        adminService.sendManageExams(request.body,response);
    },
    sendTests(request, response){
        adminService.sendManageTests(request.body,response);
    },
    sendStudents(request, response){
        adminService.getStudents(request.body,response);
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
    updateStudents(request, response){
        adminService.editStudents(request.body,response);
    },
    deleteStudents(request, response){
        adminService.deleteStudents(request,response);
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