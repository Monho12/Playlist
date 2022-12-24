const express = require("express");
const app = express();
const cors = require("cors");
const connect = require("./helper/db");
const mongoose = require("mongoose");
const { playlistRoutes } = require("./routes/playlistRoutes");
const { songRoutes } = require("./routes");
require("dotenv").config();

app.use(cors());
app.use(express.json());

app.use(playlistRoutes);
app.use(songRoutes);

connect();

app.get("/playlists", async (req, res) => {
  // const data = await Playlist.find();
  // res.send(data);
  res.send("hi");
});

app.listen(5000);
