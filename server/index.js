const express = require("express");
const cors = require("cors");
const { body, validationResult } = require("express-validator");
const app = express();

let data = [];
app.use(cors());

app.use(express.json());
app.post("/playlist", [body("playlist").isString()], cors(), (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  const body = req.body;
  console.log(body);
  res.send("amjilttai");
  data.push(req.body);
});

app.get("/playlist", (req, res) => {
  res.send(data);
});

app.listen(5000);
