const userModel = require("../models/user-model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const StudentHistory = require("../models/studentHistory");

const userService = {
  // function to resgister new user
  async AddUser(userObj, response) {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(userObj.password, saltRounds);
    userObj.password = hashedPassword;
    userModel.create(userObj, (err, data) => {
      if (err) {
        console.log("err", err);
        response.json({ Status: "Failed" });
      } else {
        response.json({ Status: "Success", record: data });
        console.log("New User Created");
      }
    });

    const idStr = Math.random().toString(36).slice(2);

    const studentHistoryObj = {
      _id: idStr,
      name: userObj.firstName + " " + userObj.lastName,
      email: userObj.email,
      profileURL: userObj.email,
      testHistory: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    StudentHistory.create(studentHistoryObj);
  },

  //function to login new user
  async login(userObj, response) {
    userModel.findOne({ email: userObj.email }, (err, data) => {
      if (err) {
        response.json({ Status: "Failed", msg: err });
      } else {
        // if the Login ID and Password doesn't match
        if (data) {
          bcrypt.compare(userObj.password, data.password, (err, result) => {
            if (result) {
              jwt.sign(
                { data },
                "secretkey",
                { expiresIn: "1h" },
                (err, token) => {
                  response.json({
                    Status: "Success",
                    msg: "welcome " + data.email,
                    token: token,
                  });
                }
              );
            } else {
              response.json({
                Status: "Failed",
                msg: "Invalid username or password",
              });
            }
          });
        }
      }
    });
  },

  async send(userObj, response) {
    console.log("Hello");
    var MongoClient = require("mongodb").MongoClient;
    var url = "mongodb://0.0.0.0:27017";

    MongoClient.connect(url, function (err, db) {
      if (err) throw err;
      var dbo = db.db("quizitdb");
      dbo.collection("Team Members").findOne({}, function (err, result) {
        if (err) throw err;
        var jsonArray = result.teamAuthors;
        response.json(jsonArray);
        db.close();
      });
    });
  },

  // login(userObj, response) {
  //         console.log("uu:",userObj);
  //         userModel.findOne({email:userObj.email}, (err, data) => {
  //         console.log("data:",data);
  //         console.log("err:",err);
  //         if (err) {
  //             response.json({ Status: "Failed", msg: err});
  //         } else {
  //              // if the Login ID and Password doesn't match
  //              if (data) {
  //                 jwt.sign({ data }, 'secretkey', { expiresIn: '1h' }, (err, token) => {
  //                     response.json({ Status: "Success", msg: "welcome " + data.email, token: token });
  //                 });
  //             }else {
  //                 response.json({ Status: "Failed", msg: "Invalid username or password" });
  //             }
  //         }
  //     })
  // },
};

module.exports = userService;
