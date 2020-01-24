const express = require("express");
const router = express.Router();
const Notes = require("../../models/notes");

//route get (/api/notes)
// gets all Notes from the db
//@access Public
//sort its by the date in desc.
router.get("/", (req, res) => {
  Notes.find()
    .sort({ date: -1 })
    .then(notes => res.json(notes));
});

//Post /api/notes
// sends data to the db auto save 5 sec
router.post("/", (req, res) => {
  const { content, title } = req.body;
  const newContent = new Notes({
    title: title,
    content: content
  });
  newContent.save().then(notes => res.json(notes));
});
//DELETE api/notes/:id
//Delete an Note
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  Notes.findById(id)
    .then(note => note.remove.then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ msg: `Id does not exist` }));
});

module.exports = router;
