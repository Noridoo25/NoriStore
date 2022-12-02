const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect('mongodb://localhost:27017/Shop', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log("Mongoodb is connected: " + data.connection.host);
    });
};

module.exports = connectDatabase;
