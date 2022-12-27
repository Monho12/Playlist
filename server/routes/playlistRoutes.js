const express = require("express");
const {
  createPlaylist,
  getPlaylists,
  getPlaylist,
  deletePlaylist,
  addToPlaylist,
} = require("../controller/playlistController");

const router = express.Router();

router
  .get("/playlists", getPlaylists)
  .get("/playlists/:id", getPlaylist)
  .post("/playlists", createPlaylist)
  .put("/playlists/:id", addToPlaylist)
  .delete("/playlists/:id", deletePlaylist);
exports.playlistRoutes = router;
