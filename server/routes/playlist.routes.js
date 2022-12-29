const express = require("express");
const { playlistController } = require("../controller");

const router = express.Router();

router
  .get("/playlists", playlistController.getPlaylists)
  .get("/playlists/:id", playlistController.getPlaylist)
  .post("/playlists", playlistController.createPlaylist)
  .put("/playlists/:id", playlistController.addToPlaylist)
  .delete("/playlists/:id", playlistController.deletePlaylist);

module.exports.playlistRoutes = router;
