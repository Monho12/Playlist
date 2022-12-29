const { Artist } = require("../models/artistModel");

const createArtist = async (req, res) => {
  const body = req.body;
  const result = await new Artist(body).save();
  res.send(result);
};

const getArtists = async (req, res) => {
  const result = await Artist.find({});
  res.send(result);
};

const getArtist = async (req, res) => {
  const result = await Artist.findbyID(req.params.id);
  res.send(result);
};

module.exports = { createArtist, getArtists, getArtist };
