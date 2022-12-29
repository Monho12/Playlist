const experss = require("express");
const { artistController } = require("../controller");

const router = experss.Router();

router
  .get("/artists", artistController.getArtists)
  .get("/artists", artistController.getArtist)
  .post("/artists", artistController.createArtist)
  .put("/artist/:id", () => {})
  .delete("/artist/id", () => {});

module.exports.artistRoutes = router;
