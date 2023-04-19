// require('dotenv').config();
// const express = require('express');
// const userRoute = require('./api/routes/Index');
// const bodyParser = require('body-parser');
// const cors = require('cors')
// const app = express();

// app.use(bodyParser.urlencoded({extended:false}));
// app.use(bodyParser.json());
// // Only allow requests from our client
// const corsOptions ={
//   origin:'http://localhost:3000',
//   credentials:true,            //access-control-allow-credentials:true
//   optionSuccessStatus:200
// }
// app.use(cors(corsOptions));

// app.use(require('./api/utils/cors'));
// app.use("/",userRoute);

// // Catch all to handle all other requests that come into the app.
// app.use('*', (req, res) => {
//   res.status(404).json({ msg: 'Not Found' })
// })

// // To get rid of all Mongoose deprecation warnings.
// const options = {
//   useCreateIndex: true,
//   useNewUrlParser: true,
//   useFindAndModify: false
// }
// // the post listing on
// app.listen(9000|| 1234,(err)=>{
//     if(err){
//         console.log("Error in server Starting ",err);
//     }else{
//         console.log("Server started .....")
//     }
// })

var express = require("express");
var app = express();
var bodyParser = require("body-parser");
const cors = require('cors')
var methodOverride = require("method-override");
var mongoose = require("mongoose");
//configure ===========
//set port
var port = process.env.PORT || 8080;
//connect to our mongoDB database
try{
  mongoose.connect(
    "mongodb+srv://mandlikr:%40Rutuja11@cluster0.vgnobys.mongodb.net/exam_mastery",
    { useNewUrlParser: true }
  );
}
catch(error){
  console.log("ee:",error);
}


//get app data/stuff of the body(POST request) parameters
//parse application/json
app.use(bodyParser.json());
const corsOptions ={
  origin:'http://localhost:3000',
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200
}
app.use(cors(corsOptions));
//parse application/vnd+api as json
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
//parse
app.use(bodyParser.urlencoded({ extended: true }));
//override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride("X-HTTP-Method-Override"));
//set static files location /public/img will be /img for users
app.use(express.static(__dirname + "/public"));
//routes================
// app.use(require('./app/routes'));
// require("./app/routes")(app); //configure routes
//start app=============
//startup app at port
app.listen(port);

app.use((_req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});
//shoutout to the user
console.log("App started at port " + port);
//expose app

exports = module.exports = app;
app.use("/exam-mastery", require("./api/routes/user-routes"));
