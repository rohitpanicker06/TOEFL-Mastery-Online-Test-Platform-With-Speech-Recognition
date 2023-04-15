const examService = require('../services/examService');

const examController = {
    
    send(request, response){
        examService.send(request.body,response);
    },
}

module.exports =  examController;