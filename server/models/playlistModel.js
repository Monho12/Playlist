const { Schema, model } = require("mongoose");

const playlistSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "",
  },
  isPrivate: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  songId: {
    type: String,
  },

  Creator: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  songs: [
    {
      type: Schema.Types.ObjectId,
      ref: "songs",
    },
  ],
});

const Playlist = model("playlist", playlistSchema);

module.exports.Playlist = Playlist;
