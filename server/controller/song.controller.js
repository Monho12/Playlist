const { Song } = require("../models/songModel");

const createSong = async (req, res) => {
  const body = req.body;
  const result = await new Song(body).save();
  res.send(result);
};

const getSong = async (req, res) => {
  const playlistId = req.query.playlistId;

  if (playlistId) {
    const result = await Song.find({ playlistId });
    return res.send(result);
  }
  const result = await Song.find({});
  res.send(result);
};

module.exports = { createSong, getSong };
