const userModel = require('../models/user-model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const userService = {
    // function to resgister new user
    async AddUser(userObj, response) {
        const saltRounds = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(userObj.password, saltRounds);
        userObj.password = hashedPassword;
        userModel.create(userObj, (err, data) => {
            if (err) {
                console.log("err",err);
                response.json({ Status: "Failed" });
            } else {
                response.json({ Status: "Success", record: data });
            }
        })
    },

//     // function to login new user
//     async login(userObj, response) {
    
//         userModel.findOne(userObj, (err, data) => {
//             if (err) {
//                 console.log(err);
//                 console.log("Mayur");
//                 response.json({ Status: "Failed F", msg: err});
//             } else {
//                 // if the Login ID and Password doesn't match
//                 console.log("outside data");
//                 console.log(data);
//                 if (data) {
//                     console.log("inside data");
//                     bcrypt.compareSync(userObj.password.toString(), data.password.toString(), (err, result) => {
//                         if (result) {
//                             jwt.sign({ data }, 'secretkey', { expiresIn: '1h' }, (err, token) => {
//                             response.json({ Status: "Success", msg: "welcome " + data.username, token: token });
//                             });
//                 }else {
//                     console.log("err data");
//                     response.json({ Status: "Failed S", msg: "Invalid username or password" });
//                 }
//             });
//             }
//         }
//     })

// },

login(userObj, response) {
    
    userModel.findOne(userObj, (err, data) => {
        if (err) {
            response.json({ Status: "Failed", msg: err});
        } else {
             // if the Login ID and Password doesn't match
             if (data) {
                jwt.sign({ data }, 'secretkey', { expiresIn: '1h' }, (err, token) => {
                    response.json({ Status: "Success", msg: "welcome " + data.username, token: token });
                });
            }else {
                response.json({ Status: "Failed", msg: "Invalid username or password" });
            }
        }
    })
},
   
}

module.exports = userService;