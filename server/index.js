const express = require("express");
const app = express();

const playList = [
  {
    artistName: "Joji",
    songName: "Glimpse of Us",
    songId: "1",
    songGenre: "R&B / Soul",
    songLink: "https://il.ilill.li/force/jyG2Y4qUBx/",
  },
  {
    artistName: "Joji",
    songName: "Feeling Like The End",
    songId: "2",
    songGenre: "R&B / Soul",
    songLink:
      "https://lillillliiililiil.ililllliliillilliliil.li/direct/bguLA9hRI/",
  },
  {
    artistName: "Joji",
    songName: "Die For You",
    songId: "3",
    songGenre: "R&B / Soul",
    songLink:
      "https://lillillliiililiil.ililllliliillilliliil.li/direct/5kq4to4gPF/",
  },
  {
    artistName: "Joji",
    songName: "Before The Day Is Over",
    songId: "4",
    songGenre: "R&B / Soul",
    songLink:
      "https://lillillliiililiil.ililllliliillilliliil.li/direct/LpUFWWIyI/",
  },
];

app.get("/", (req, res) => {
  res.send(playList);
});

app.listen(8000);
