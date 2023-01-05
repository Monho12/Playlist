const { Playlist } = require("../models/playlistModel");

const createPlaylist = async (req, res) => {
  const body = req.body;
  try {
    const result = await new Playlist(body).save();
    res.send(result);
  } catch (error) {}
};

const getPlaylists = async (req, res) => {
  try {
    const result = await Playlist.find({});
    res.send(result);
  } catch (error) {}
};

const getPlaylist = async (req, res) => {
  try {
    const result = await Playlist.findById(req.params.id).populate({
      path: "songs",
      populate: { path: "artist" },
    });
    res.send(result);
  } catch (error) {}
};

const deletePlaylist = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await Playlist.findByIdAndDelete(id);
    res.send(result);
  } catch (error) {}
};

const addToPlaylist = async (req, res) => {
  const playlistId = req.params.id;
  const songId = req.body.id;
  try {
    const playlist = await Playlist.findById(playlistId);
    playlist.songs.push(songId);
    await playlist.save();
    res.send(playlist);
  } catch (error) {}
};

module.exports = {
  createPlaylist,
  getPlaylists,
  getPlaylist,
  addToPlaylist,
  deletePlaylist,
};
