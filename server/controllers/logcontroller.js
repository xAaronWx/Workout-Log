let express = require("express");
let router = express.Router();
let validateSession = require("../middleware/validate-session");
const Journal = require("../db").import("../models/journal");

module.exports = router;
