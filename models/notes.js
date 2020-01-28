const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NoteSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String
  },

  date: {
    type: Date,
    default: Date.now
  },
  user: { type: Schema.Types.ObjectId, ref: "User", required: true }
});

module.exports = Notes = mongoose.model("notes", NoteSchema);
