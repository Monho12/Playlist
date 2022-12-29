const express = require("express");
const app = express();
const cors = require("cors");
const connect = require("./helper/db");
const mongoose = require("mongoose");
const { playlistRoutes } = require("./routes");
const { songRoutes } = require("./routes");
const { userRoutes } = require("./routes");
const { artistRoutes } = require("./routes");
require("dotenv").config();

app.use(cors());
app.use(express.json());

app.use(playlistRoutes);
app.use(songRoutes);
app.use(artistRoutes);
app.use(userRoutes);

connect();

app.get("/playlists", async (req, res) => {
  res.send("hi");
});

app.listen(5000);
