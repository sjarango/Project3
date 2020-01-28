const express = require("express");
const router = express.Router();
const Notes = require("../../models/notes");
const auth = require("../../middleware/auth");
//route get (/api/notes)
// gets all Notes from the db
//@access Public
//sort its by the date in desc.
router.get("/", auth, (req, res) => {
  Notes.findById(req.user._id);
  Notes.find()
    .sort({ date: -1 })
    .then(notes => res.json(notes));
});

router.get("/:NoteId", auth, (req, res) => {
  const { NoteId } = req.params;
  Notes.findById(req.user._id);
  Notes.findById(NoteId)
    .sort({ date: -1 })
    .then(notes => res.json(notes));
});
//Update /api/notes/:NoteID
//update note = id
router.patch("/:NoteId", auth, async (req, res) => {
  const { content, title } = req.body;
  const { NoteId } = req.params;
  Notes.findById(req.user._id);
  const updateNote = await Notes.updateOne(
    { _id: NoteId },
    { $set: { title: title, content: content } }
  );
  res.json(updateNote);
});

//DELETE api/notes/:id
//Delete an Note
router.post("/delete", auth, (req, res) => {
  const { user } = req.body;
  Notes.findById(user._id);
  const { NoteId } = req.params;
  Notes.findById(NoteId)
    .then(note => note.remove.then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ msg: `Id does not exist` }));
});
//Post /api/notes
// sends data to the db auto save 5 sec
router.post("/", auth, (req, res) => {
  const { content, title, user } = req.body;
  Notes.findById(user._id);
  const newContent = new Notes({
    title,
    content,
    user
  });
  newContent.save().then(notes => res.send(notes._id));
});

module.exports = router;
