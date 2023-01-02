const experss = require("express");
const { userController } = require("../controller");

const router = experss.Router();

router
  .post("/login", userController.loginUser)
  .get("/users", userController.getUsers)
  .get("/users/:id", userController.getUser)
  .post("/signup", userController.createUser)
  .put("/user/:id", () => {})
  .delete("/user/id", () => {});

module.exports.userRoutes = router;
