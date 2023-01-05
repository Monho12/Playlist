const experss = require("express");
const {
  createSong,
  getSongs,
  getSong,
  deleteSong,
  addToSong,
} = require("../controller/song.controller");

const router = experss.Router();

router
  .get("/songs", getSongs)
  .get("/song/:id", getSong)
  .post("/songs", createSong)
  .put("/song/:id", addToSong)
  .delete("/song/id", deleteSong);

module.exports.songRoutes = router;
