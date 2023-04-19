const url = require("./utils/environment");
const mongoose = require("mongoose");
mongoose.connect(url.mongo);

// database connectivity
mongoose.connection.on("open", () => {
  console.log("Connected to MongoDB Database");
});

module.exports = mongoose;
