const express = require("express");
const router = express.Router();
const Notes = require("../../models/notes");

router.post("/", (req, res) => {
  const { content, title } = req.body;
  const newContent = new Notes({
    title: title,
    content: content
  });
  newContent.save().then(notes => res.json(notes));
});

module.exports = router;
