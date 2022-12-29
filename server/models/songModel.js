const { Schema, model, Types } = require("mongoose");

const songSchema = new Schema({
  playlistId: Types.ObjectId,
  name: {
    type: String,
    required: true,
  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  artist: {
    type: Schema.Types.ObjectId,
    ref: "Artist",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  uri: String,
});

const Song = model("songs", songSchema);

module.exports.Song = Song;
