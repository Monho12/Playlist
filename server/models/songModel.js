const { Schema, model, Types } = require("mongoose");

const songSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  url: {
    type: String,
  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  artist: [
    {
      type: Schema.Types.ObjectId,
      ref: "artist",
    },
  ],

  createdAt: {
    type: Date,
    default: Date.now(),
  },
  uri: String,
});

const Song = model("songs", songSchema);

module.exports.Song = Song;
