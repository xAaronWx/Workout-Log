// require("dotenv").config();
express = require("express");
let app = express();
const sequelize = require("./db");

app.listen(3000, function () {
  console.log("App is listening on port 3000 / WorkoutLog");
});
