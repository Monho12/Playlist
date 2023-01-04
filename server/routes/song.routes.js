const experss = require("express");
const {
  createSong,
  getSongs,
  getSong,
  deleteSong
} = require("../controller/song.controller");

const router = experss.Router();

router
  .get("/songs", getSongs)
  .get("/song/:id", getSong)
  .post("/songs", createSong)
  .put("/song/:id", () => {})
  .delete("/song/id", deleteSong);

module.exports.songRoutes = router;
