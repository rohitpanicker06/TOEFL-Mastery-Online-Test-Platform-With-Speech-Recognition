const userModel = require('../models/user-model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

var testResults = null;
const examService = {

    async send(userObj, response) {
       
        var MongoClient = require('mongodb').MongoClient;
        var url = "mongodb://0.0.0.0:27017/";
        
        MongoClient.connect(url, function(err, db) {
          if (err) throw err;
          var dbo = db.db("quizitdb");
          dbo.collection("Exams").find({}).toArray(async function(err, result) {
            if (err) throw err;
             var allExams = result;
           
            var finalResult = await generateExams(allExams);
             console.log(finalResult);
            
            response.json(finalResult);
            db.close();
          });
        });

    
    }
}

async function generateExams(allExams)
{
   
  var allTests = await getTestAllTests();
  
  const allTestsjsonString = JSON.stringify(allTests);
  const allTestsjsonObj = JSON.parse(allTestsjsonString);

  var allQuestionSets = await getAllQuestionTests();
  const allQuestionSetsJsonString = JSON.stringify(allQuestionSets);
  const allQuestionSetsJsonObj = JSON.parse(allQuestionSetsJsonString);

  var finalResultContainer = [];
 
 for (let i = 0; i < allExams.length; i++) {
    var exam = allExams[i];
    var jsonObject = {
        exam_date : exam.exam_date,
    exam_id : exam.exam_id,
    exam_title : exam.exam_title, 
    test_id: exam.test_id,
      };


      // GET THE TEST ID FROM ALL TEST.json 
      var allsectionForOneExam = allTestsjsonObj[exam.test_id];

      allsectionForOneExam.forEach((item) => {
        var allSectionArray = []
        item.test_section.forEach((section) => {

        var sectionContainer = {};

       
       
         var questionSet = allQuestionSetsJsonObj[section.question_set];
         sectionContainer["section_id"]= section.question_set;
         sectionContainer["question_set"]= questionSet;
         allSectionArray.push(sectionContainer);
        });

        jsonObject["test_section"] = allSectionArray;

      });

      finalResultContainer.push(jsonObject);
  }
  return finalResultContainer;
}

async function getTestAllTests()
{

    console.log('inside test');
    const MongoClient = require('mongodb').MongoClient;
    const url = "mongodb://0.0.0.0:27017/";
    let returnResult = undefined;
    
    
    function findOne() {
        return new Promise((resolve, reject) => {
          MongoClient.connect(url, function(err, db) {
            if (err) reject(err);
            const dbo = db.db("quizitdb");
            dbo.collection("Tests").findOne({}, function(err, result) {
              if (err) reject(err);
              returnResult = result;
              db.close();
              resolve(returnResult);
            });
          });
        });
      }
    
      async function test() {
        const result = await findOne();
        return result;
      }

      return test();


}

async function getAllQuestionTests()
{

   
    const MongoClient = require('mongodb').MongoClient;
    const url = "mongodb://0.0.0.0:27017/";
    let returnResult = undefined;
    
    
    function findOne() {
        return new Promise((resolve, reject) => {
          MongoClient.connect(url, function(err, db) {
            if (err) reject(err);
            const dbo = db.db("quizitdb");
            dbo.collection("QuestionSet").findOne({}, function(err, result) {
              if (err) reject(err);
              returnResult = result;
              db.close();
              resolve(returnResult);
            });
          });
        });
      }
    
      async function test() {
        const result = await findOne();
        return result;
      }

      return test();


}


module.exports = examService;





/*console.log('inside test');
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";
    var returnResult = undefined;
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("quizitdb");
        dbo.collection("Tests").findOne({}, function(err, result) {
          if (err) throw err;

          returnResult = result;
       db.close;
          
        });
      });
      console.log("Return result");
     console.log(returnResult);*/