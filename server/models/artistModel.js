const { Schema, model } = require("mongoose");

const artistSchema = new Schema({
  artist: {
    String,
  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Artist = model("Artist", artistSchema);

module.exports.Artist = Artist;
