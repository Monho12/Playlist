const { Artist } = require("../models/artistModel");

const createArtist = async (req, res) => {
  const body = req.body;
  try {
    const result = await new Artist(body).save();
    res.send(result);
  } catch (error) {}
};

const getArtists = async (req, res) => {
  try {
    const result = await Artist.find({});
    res.send(result);
  } catch (error) {}
};

const getArtist = async (req, res) => {
  try {
    const result = await Artist.findById(req.params.id);
    res.send(result);
  } catch (error) {}
};

const addToArtist = async (req, res) => {
  const artistId = req.params.id;
  const urlId = req.body.image;
  try {
    const artist = await Artist.findById(artistId);
    artist.image.push(urlId);
    await artist.save();
    res.send(artist);
  } catch (error) {}
};

module.exports = { createArtist, getArtists, getArtist ,addToArtist };
