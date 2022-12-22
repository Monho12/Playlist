// const express = require("express");
// const cors = require("cors");
// const { body, validationResult } = require("express-validator");
// const app = express();

// let data = [];
// app.use(cors());

// app.use(express.json());
// app.post("/playlist", [body("playlist").isString()], cors(), (req, res) => {
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(422).json({ errors: errors.array() });
//   }

//   const body = req.body;
//   console.log(body);
//   res.send("amjilttai");
//   data.push(req.body);
// });

// app.get("/playlist", (req, res) => {
//   res.send(data);
// });

// app.listen(5000);

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
