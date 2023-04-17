require('dotenv').config();
const express = require('express');
const userRoute = require('./api/routes/Index');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
// Only allow requests from our client
const corsOptions ={
  origin:'http://localhost:3001', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200
}
app.use(cors(corsOptions));

app.use(require('./api/utils/cors'));
app.use("/",userRoute);

// Catch all to handle all other requests that come into the app. 
app.use('*', (req, res) => {
  res.status(404).json({ msg: 'Not Found' })
})

// To get rid of all Mongoose deprecation warnings.
const options = {
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: false
}
// the post listing on
app.listen(9000|| 1234,(err)=>{
    if(err){
        console.log("Error in server Starting ",err);
    }else{
        console.log("Server started .....")
    }
})