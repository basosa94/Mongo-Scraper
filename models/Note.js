var mongoose = require("mongoose");
// Create the schema class using mongoose's schema method
var Schema = mongoose.Schema;

// Create the noteSchema with the schema object
var noteSchema = new Schema({

  _headlineId: {
    type: Schema.Types.ObjectId,
    ref: "Headline"
  },
  // date is just a string
  date: String,
  // as is the noteText
  noteText: String
});

// Create the Note model using the noteSchema
var Note = mongoose.model("Note", noteSchema);

// Export the Note model
module.exports = Note;