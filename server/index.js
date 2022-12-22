const express = require("express");
const app = express();
const cors = require("cors");
const connect = require("./helper/db");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

connect();

const Playlist = mongoose.model("playlist", { playlist: String });

app.get("/playlists", async (req, res) => {
  const data = await Playlist.find();
  res.send(data);
});

app.post("/playlists", async (req, res) => {
  const body = req.body;
  const name = new Playlist(body);
  await name.save();
  res.send("successfully created");
});

app.delete("/playlists/:id", async (req, res) => {
  const id = req.params.id;
  await Playlist.findByIdAndDelete(id);
  res.send("deleted");
});

app.listen(5000);
