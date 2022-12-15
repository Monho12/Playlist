const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const playList = [
  {
    artistName: "Joji",
    songName: "Glimpse of Us",
    songId: "1",
    songGenre: "R&B / Soul",
    songLink: "",
  },
  {
    artistName: "Joji",
    songName: "Feeling Like The End",
    songId: "2",
    songGenre: "R&B / Soul",
    songLink: "",
  },
  {
    artistName: "Joji",
    songName: "Die For You",
    songId: "3",
    songGenre: "R&B / Soul",
    songLink:
      "https://beta.linkjuicepro.com/dl?hash=8XEX4ixR0S0VNzHL9rY1ri9cAuWE1CPOv4ZkW%2BqonKkg7vCY1QSyxNB5kcm1rKzELsrBHWIEJ01aGv2lTFtIuxxEf8b%2BY4mp4ew84PEfuLQPr79%2FNYUDCMqrIAD000aJ1a13iOyhj3zJ1pepTv5EVFKRMtDS8druGPhYvJN0qJEPEyQDY3ib7zj%2FmJnUySwkUNS6pRC8wXlHPC5XuWh2MA%3D%3D",
  },
  {
    artistName: "Joji",
    songName: "Before The Day Is Over",
    songId: "4",
    songGenre: "R&B / Soul",
    songLink: "",
  },
];

app.get("/playlist", (req, res) => {
  res.send(playList);
});

app.listen(8000);
