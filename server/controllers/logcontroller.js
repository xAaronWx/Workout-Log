let express = require("express");
let router = express.Router();
let validateSession = require("../middleware/validate-session");
const Log = require("../db").import("../models/log");

router.post("/", validateSession, (req, res) => {
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

router.get("/", validateSession, (req, res) => {
  Log.findAll()
    .then((log) => res.status(200).json(log))
    .catch((err) =>
      res.status(500).json({ error: err, message: "There was a problem" })
    );
});

router.get("/:id", validateSession, (req, res) => {
  let id = req.params.id;

  Log.findAll({
    where: { id: id },
  })
    .then((logs) => res.status(200).json(logs))
    .catch((err) =>
      res.status(500).json({ error: err, message: "Couldn't find record" })
    );
});

router.put("/:id", validateSession, (req, res) => {
  const updateLogEntry = {
    description: req.body.description,
    definition: req.body.definition,
    result: req.body.result,
  };

  const query = { where: { id: req.params.id } };

  Log.update(updateLogEntry, query)
    .then((logs) =>
      res.status(200).json({ message: "Your log has been updated", logs })
    )
    .catch((err) =>
      res.status(500).json({ error: err, message: "Couldn't update record" })
    );
});

router.delete("/:id", validateSession, function (req, res) {
  const query = { where: { id: req.params.id } };

  Log.destroy(query)
    .then(() => res.status(200).json({ message: "Your log has been deleted" }))
    .catch((err) =>
      res.status(500).json({ error: err, message: "Houston we have a problem" })
    );
});

module.exports = router;
