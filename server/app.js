// require("dotenv").config();
express = require("express");
let app = express();
const sequelize = require("./db");
app.use(express.json());

let user = require("");

app.listen(3000, function () {
  console.log("App is listening on port 3000 / WorkoutLog");
});
