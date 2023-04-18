
const AdminExamModel = require('../models/adminexam-model');


const adminService = {
async addExam(examObj, response) {
    AdminExamModel.create(examObj, (err, data) => {
        console.log("examObj.. ", examObj);
        if (err) {
            console.log("err",err);
            response.json({ Status: "Failed" });
        } else {
            response.json({ Status: "Success", record: data });
        }
    })
},
async editExam(examObj, res) {
    const { id,type,title,date} = examObj;
    const result = await AdminExamModel.findOneAndUpdate({id }, {type,title,date},{ runValidators: true});
    if (!result) {
        res.status(404).json({ message: 'Exam ID not found' });
      } else {
        res.status(200).json({ message: 'Entry updated successfully' });
      }
}
}

module.exports = adminService;