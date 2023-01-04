const { Song } = require("../models/songModel");

const createSong = async (req, res) => {
  const body = req.body;
  const result = await new Song(body).save();
  res.send(result);
};

const getSongs = async (req, res) => {
  const result = await Song.find({}).populate("artist");
  res.send(result);
};

const getSong = async (req, res) => {
  try {
    const result = await Song.findById(req.params.id).populate("artist");
    res.send(result);
  } catch (err) {
    res.status(500).send(err);
    res.send(err.message);
  }
};

const deleteSong = async (req, res) => {
  const id = req.params.id;
  const result = await Song.findByIdAndDelete(id);
  res.send(result);
};

module.exports = { createSong, getSongs, getSong, deleteSong };
