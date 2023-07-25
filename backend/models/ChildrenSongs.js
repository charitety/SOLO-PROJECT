const mongoose = require("mongoose");

const ChildrenSongsSchema = new mongoose.Schema({
  Country: {
    type: String,
    required: true,
  },
  Song: {
    type: String,
    required:true
  },
},{timestamps:true});

module.exports = mongoose.model("SongModel", ChildrenSongsSchema);