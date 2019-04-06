const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const fs = require("fs");
const DATA_FILE_PATH = "./data.json";
const images = readFromJsonSync();

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "static")));

app.get("/api/images", (req, res) => {
  res.send(images);
});

app.put("/api/image/:imageId/rate", (req, res) => {
  const requestedImageId = +req.params.imageId;
  const { rate } = req.body;
  const image = images.find(image => image.id === requestedImageId);
  if (!image) {
    res.status(404).send("Image not found");
    return;
  }
  if (rate) {
    image.rate = +rate;
    writeToJson().then(
      () => {
        res.sendStatus(200);
      },
      err => {
        console.log("File writing error!", err);
        res.sendStatus(500);
      }
    );
  } else {
    res.status(400).send("Wrong image rate");
  }
});

app.listen(port, err => {
  if (err) {
    return console.log("something bad happened", err);
  }
  console.log(`server is listening on ${port}`);
});

function readFromJsonSync() {
  return JSON.parse(fs.readFileSync(DATA_FILE_PATH));
}

function writeToJson() {
  return new Promise((resolve, reject) => {
    fs.writeFile(DATA_FILE_PATH, JSON.stringify(images), err => {
      if (err) reject(err);
      else resolve();
    });
  });
}
