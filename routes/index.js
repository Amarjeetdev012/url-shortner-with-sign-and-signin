const express = require("express");
const path = require("path");

const router = express.Router();

const Url = require("../models/urlModel");

router.get("/", (req, res) => {
  res.sendFile(path.resolve("index.html"));
});

router.get("/:code", async (req, res) => {
  let data = req.params.code;
  const url = await Url.findOne({ urlCode: req.params.code });
  console.log(data);
  if (url) {
    return res.redirect(url.longUrl);
  } else {
    return res.status(404).json("No short url found in database");
  }
});

module.exports = router;
