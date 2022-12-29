const experss = require("express");
const { createSong, getSong } = require("../controller/song.controller");

const router = experss.Router();

router
  .get("/songs", getSong)
  .post("/songs", createSong)
  .put("/song/:id", () => {})
  .delete("/song/id", () => {});

module.exports.songRoutes = router;
