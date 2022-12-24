const { Schema, model, Types } = require("mongoose");

const playlistSchema = new Schema({
  title: String,
  //   songs
  description: String,
  CreatorId: Types.ObjectId,
  createdAt: { type: Date, default: Date.now() },
  updatedAt: Date,
  isPrivate: Boolean,
});

const Playlist = model("playlist", playlistSchema);
exports.Playlist = Playlist;
