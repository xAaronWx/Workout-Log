let express = require("express");
let router = express.Router();
let validateSession = require("../middleware/validate-session");
const Journal = require("../db").import("../models/journal");

router.post("/log", validateSession, (req, res) => {
  const logEntry = {
    description: req.body.description,
    definition: req.body.definition,
    result: req.body.result,
    owner_id: req.user.id,
  };

  Log.create(logEntry)
    .then((log) => res.status(200).json(log))
    .catch((err) =>
      res.status(500).json({ error: err, message: "Log not created" })
    );
});

module.exports = router;
