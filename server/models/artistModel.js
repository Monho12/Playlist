const { Schema, model } = require("mongoose");

const artistSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: [
    {
      type: String,
      ref: "image",
    },
  ],

  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Artist = model("artist", artistSchema);

module.exports.Artist = Artist;
