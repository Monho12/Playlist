const experss = require("express");
const { createSong, getSong } = require("../controller/songController");

const router = experss.Router();

router
  .get("/songs", getSong)
  .post("/songs", createSong)
  .put("/song/:id", () => {})
  .delete("/song/id", () => {});

exports.songroutes = router;
