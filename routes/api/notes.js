const express = require("express");
const router = express.Router();
const Notes = require("../../models/notes");
const auth = require("../../middleware/auth");
//route get (/api/notes)
// gets all Notes from the db
//@access Public
//sort its by the date in desc.
router.get("/", auth, (req, res) => {
  Notes.find({ user: req.user.id })
    .sort({ date: -1 })
    .then(notes => res.json(notes));
});

router.get("/:NoteId", auth, (req, res) => {
  const { NoteId } = req.params;
  Notes.findById(req.user.id);
  Notes.findById(NoteId)
    .sort({ date: -1 })
    .then(notes => res.json(notes));
});
//Update /api/notes/:NoteID
//update note = id
router.patch("/:NoteId", auth, async (req, res) => {
  const { content, title } = req.body;
  const { NoteId } = req.params;
  Notes.findById(req.user.id);
  const updateNote = await Notes.updateOne(
    { _id: NoteId },
    { $set: { title: title, content: content } }
  );
  res.json(updateNote);
});

//DELETE api/notes/:id
//Delete an Note
router.delete("/:id", auth, (req, res) => {
  const { id } = req.params;
  Notes.remove({ _id: id })
    .then(() => res.json({ success: true }))
    .catch(err => res.status(404).json({ msg: `Id does not exist` }));
});
//Post /api/notes
// sends data to the db auto save 5 sec
router.post("/", auth, (req, res) => {
  const { content, title } = req.body;
  const newContent = new Notes({
    title,
    content,
    user: req.user.id
  });
  newContent.save().then(notes => res.send(notes._id));
});

module.exports = router;
