const url = require('./utils/environment');
const mongoose = require('mongoose');
mongoose.connect(url.mongo);

// database connectivity
mongoose.connection.on('open',()=>{
    console.log("connected to database");
})

module.exports = mongoose;