const userModel = require('../models/user-model');
const jwt = require('jsonwebtoken');

const userService = {
    // function to resgister new user
    AddUser(userObj, response) {
        userModel.create(userObj, (err, data) => {
            if (err) {
                response.json({ Status: "Failed" });
            } else {
                response.json({ Status: "Success", record: data });
            }
        })
    },

    // function to login new user
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