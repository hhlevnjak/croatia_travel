const fs = require(`fs`);

const {
  getArrayUsernames,
  getArrayDubrovnik,
  getArrayBiograd,
  getArrayKrka,
  getArrayMakarska,
  getArrayPlitvice,
  getArrayCetina,
  getArraySalona,
  getArraySplit,
  getArrayUltra,
  getArrayZadar,
  getArrayZagreb,
} = require("./get");

const { changeInfoRatingPost } = require("./changeRatings/changeInfoRatingPost");

const postArrayUsernames = (req, res) => {
  let newArray = [req.body.username, ...getArrayUsernames];

  fs.writeFile(`./data/usernamesList.json`, JSON.stringify(newArray), (err) => {
    if (err) console.error(err);
  });

  res.status(200).json(newArray);
};

const postArrayDubrovnik = (req, res) => {
  const arraysToSend = changeInfoRatingPost(req.body, getArrayDubrovnik);
  res.status(200).json(arraysToSend);
};

const postArrayBiograd = (req, res) => {
  const arraysToSend = changeInfoRatingPost(req.body, getArrayBiograd);
  res.status(200).json(arraysToSend);
};

const postArrayKrka = (req, res) => {
  const arraysToSend = changeInfoRatingPost(req.body, getArrayKrka);
  res.status(200).json(arraysToSend);
};

const postArrayMakarska = (req, res) => {
  const arraysToSend = changeInfoRatingPost(req.body, getArrayMakarska);
  res.status(200).json(arraysToSend);
};

const postArrayPlitvice = (req, res) => {
  const arraysToSend = changeInfoRatingPost(req.body, getArrayPlitvice);
  res.status(200).json(arraysToSend);
};

const postArrayCetina = (req, res) => {
  const arraysToSend = changeInfoRatingPost(req.body, getArrayCetina);
  res.status(200).json(arraysToSend);
};

const postArraySalona = (req, res) => {
  const arraysToSend = changeInfoRatingPost(req.body, getArraySalona);
  res.status(200).json(arraysToSend);
};

const postArraySplit = (req, res) => {
  const arraysToSend = changeInfoRatingPost(req.body, getArraySplit);
  res.status(200).json(arraysToSend);
};

const postArrayUltra = (req, res) => {
  const arraysToSend = changeInfoRatingPost(req.body, getArrayUltra);
  res.status(200).json(arraysToSend);
};

const postArrayZadar = (req, res) => {
  const arraysToSend = changeInfoRatingPost(req.body, getArrayZadar);
  res.status(200).json(arraysToSend);
};

const postArrayZagreb = (req, res) => {
  const arraysToSend = changeInfoRatingPost(req.body, getArrayZagreb);
  res.status(200).json(arraysToSend);
};

module.exports = {
  postArrayUsernames,
  postArrayDubrovnik,
  postArrayBiograd,
  postArrayKrka,
  postArrayMakarska,
  postArrayPlitvice,
  postArrayCetina,
  postArraySalona,
  postArraySplit,
  postArrayUltra,
  postArrayZadar,
  postArrayZagreb,
};
