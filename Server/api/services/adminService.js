
const { getStudents } = require('../controllers/adminController');
const AdminExamModel = require('../models/adminexam-model');
const AdminTestModel = require('../models/exam');
const UserModel = require('../models/user-model');

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
},
async deleteExam(examObj, res) {
    const { id } = examObj.query;
    const result = await AdminExamModel.findOneAndDelete({id },{ runValidators: true});
    if (!result) {
        res.status(404).json({ message: 'Exam ID not found' });
      } else {
        res.status(200).json({ message: 'Entry deleted successfully' });
      }
},

async editStudents(examObj, res) {
  const { id,firstName,lastName,password,email} = examObj;
  const result = await UserModel.findOneAndUpdate({id }, {firstName,lastName,password,email},{ runValidators: true});
  if (!result) {
      res.status(404).json({ message: 'Student ID not found' });
    } else {
      res.status(200).json({ message: 'Entry updated successfully' });
    }
},
async deleteStudents(examObj, res) {
  const { id } = examObj.query;
  const result = await UserModel.findOneAndDelete({id },{ runValidators: true});
  if (!result) {
      res.status(404).json({ message: 'Student ID not found' });
    } else {
      res.status(200).json({ message: 'Entry deleted successfully' });
    }
},

async sendManageExams(examObj, response) {
    
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb+srv://mandlikr:%40Rutuja11@cluster0.vgnobys.mongodb.net";

    try{
        MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            var dbo = db.db("exam_mastery");
            console.log("dbo:",dbo);
            dbo.collection("manage_exams").find().toArray(function(err, result) {
              if (err) throw err;
              response.json(result);
              db.close();
            });
          });
    }
    catch(error){
        console.log("errr:",error)
    }
    

},

async addTest(examObj, response) {
    AdminTestModel.create(examObj, (err, data) => {
        //console.log("examObj.. ", examObj);
        if (err) {
            //console.log("err",err);
            response.json({ Status: "Failed" });
        } else {
            response.json({ Status: "Success", record: data });
        }
    })
},
async editTest(examObj, res) {
    const { id,type,title,date,updatedAt} = examObj;
    const result = await AdminTestModel.findOneAndUpdate({id }, {type,title,date, updatedAt},{ runValidators: true});
    if (!result) {
        res.status(404).json({ message: 'Exam ID not found' });
      } else {
        res.status(200).json({ message: 'Entry updated successfully' });
      }
},
async deleteTest(examObj, res) {
    const { id } = examObj.query;
    const result = await AdminTestModel.findOneAndDelete({id },{ runValidators: true});
    if (!result) {
        res.status(404).json({ message: 'Exam ID not found' });
      } else {
        res.status(200).json({ message: 'Entry deleted successfully' });
      }
},

async sendManageTests(examObj, response) {
    
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb+srv://mandlikr:%40Rutuja11@cluster0.vgnobys.mongodb.net";

    try{
        MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            var dbo = db.db("exam_mastery");
            dbo.collection("exams").find().toArray(function(err, result) {
              if (err) throw err;
              response.json(result);
              db.close();
            });
          });
    }
    catch(error){
        console.log("errr:",error)
    }
    

},

async getStudents(examObj, response) {
    
  var MongoClient = require('mongodb').MongoClient;
  var url = "mongodb+srv://mandlikr:%40Rutuja11@cluster0.vgnobys.mongodb.net";
  console.log("inside get students");
  try{
      MongoClient.connect(url, function(err, db) {
          if (err) throw err;
          var dbo = db.db("exam_mastery");
          dbo.collection("users").find().toArray(function(err, result) {
            if (err) throw err;
            response.json(result);
            db.close();
          });
        });
  }
  catch(error){
      console.log("errr:",error)
  }
  

},

}

module.exports = adminService;