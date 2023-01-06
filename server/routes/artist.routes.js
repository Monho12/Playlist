const experss = require("express");
const { artistController } = require("../controller");

const router = experss.Router();

router
  .get("/artists", artistController.getArtists)
  .get("/artist/:id", artistController.getArtist)
  .post("/artists", artistController.createArtist)
  .put("/artist/:id", artistController.addToArtist)
  .delete("/artist/id", () => {});

module.exports.artistRoutes = router;
