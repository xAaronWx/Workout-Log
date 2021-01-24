require("dotenv").config();
express = require("express");
let app = express();
const sequelize = require("./db");
// let log = require("./controllers/logcontroller");
let user = require("./controllers/usercontroller");
const router = require("./controllers/usercontroller");

sequelize.sync();
app.use(require("./middleware/headers"));
app.use(express.json());

app.use("/user", user);
// app.use("/log", log);

app.listen(3000, function () {
  console.log("App is listening on port 3000 / WorkoutLog");
});

router.post("/login", function (req, res) {
  // User.findOne({where: {}})
});
