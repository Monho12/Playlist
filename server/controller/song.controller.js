const { Song } = require("../models/songModel");

const createSong = async (req, res) => {
  const body = req.body;
  try {
    const result = await new Song(body).save();
    res.send(result);
  } catch (error) {}
};

const getSongs = async (req, res) => {
  try {
    const result = await Song.find({}).populate("artist");
    res.send(result);
  } catch (error) {}
};

const getSong = async (req, res) => {
  try {
    const result = await Song.findById(req.params.id).populate("artist");
    res.send(result);
  } catch (err) {}
};

const deleteSong = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await Song.findByIdAndDelete(id);
    res.send(result);
  } catch (error) {}
};

const addUrlToSong = async (req, res) => {
  const songId = req.params.id;
  const urlId = req.body.url;
  try {
    const song = await Song.findById(songId);
    song.url.push(urlId);
    await song.save();
    res.send(song);
  } catch (error) {}
};

module.exports = { createSong, getSongs, getSong, deleteSong, addUrlToSong };
