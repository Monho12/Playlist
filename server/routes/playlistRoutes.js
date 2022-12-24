const express = require("express");
const {
  createPlaylist,
  getPlaylist,
  deletePlaylist,
} = require("../controller/playlistController");

const router = express.Router();

router
  .get("/playlists", getPlaylist)
  .post("/playlists", createPlaylist)
  .put("/playlists/:id", () => {})
  .delete("/playlists/:id", deletePlaylist);

exports.playlistRoutes = router;
