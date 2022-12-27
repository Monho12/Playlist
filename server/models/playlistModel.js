const { Schema, model, Types } = require("mongoose");

const playlistSchema = new Schema({
  title: String,
  CreatorId: String,
  createdAt: { type: Date, default: Date.now() },
  updatedAt: Date,
  isPrivate: Boolean,
  songs: [{ type: Schema.Types.ObjectId, ref: "songs" }],
});

const Playlist = model("playlist", playlistSchema);
exports.Playlist = Playlist;
