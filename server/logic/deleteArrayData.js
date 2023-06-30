const fs = require(`fs`);

const { changeInfoRatingDelete } = require(`./changeRatings/changeInfoRatingDelete`);

const {
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

const deleteArrayDubrovnik = (req, res) => {
  const objectToReturn = changeInfoRatingDelete(getArrayDubrovnik, req);

  res.status(200).json(objectToReturn);
};

const deleteArrayBiograd = (req, res) => {
  const objectToReturn = changeInfoRatingDelete(getArrayBiograd, req);

  res.status(200).json(objectToReturn);
};

const deleteArrayKrka = (req, res) => {
  const objectToReturn = changeInfoRatingDelete(getArrayKrka, req);

  res.status(200).json(objectToReturn);
};

const deleteArrayMakarska = (req, res) => {
  const objectToReturn = changeInfoRatingDelete(getArrayMakarska, req);

  res.status(200).json(objectToReturn);
};

const deleteArrayPlitvice = (req, res) => {
  const objectToReturn = changeInfoRatingDelete(getArrayPlitvice, req);

  res.status(200).json(objectToReturn);
};

const deleteArrayCetina = (req, res) => {
  const objectToReturn = changeInfoRatingDelete(getArrayCetina, req);

  res.status(200).json(objectToReturn);
};

const deleteArraySalona = (req, res) => {
  const objectToReturn = changeInfoRatingDelete(getArraySalona, req);

  res.status(200).json(objectToReturn);
};

const deleteArraySplit = (req, res) => {
  const objectToReturn = changeInfoRatingDelete(getArraySplit, req);

  res.status(200).json(objectToReturn);
};

const deleteArrayUltra = (req, res) => {
  const objectToReturn = changeInfoRatingDelete(getArrayUltra, req);

  res.status(200).json(objectToReturn);
};

const deleteArrayZadar = (req, res) => {
  const objectToReturn = changeInfoRatingDelete(getArrayZadar, req);

  res.status(200).json(objectToReturn);
};

const deleteArrayZagreb = (req, res) => {
  const objectToReturn = changeInfoRatingDelete(getArrayZagreb, req);

  res.status(200).json(objectToReturn);
};

module.exports = {
  deleteArrayDubrovnik,
  deleteArrayBiograd,
  deleteArrayKrka,
  deleteArrayMakarska,
  deleteArrayPlitvice,
  deleteArrayCetina,
  deleteArraySalona,
  deleteArraySplit,
  deleteArrayUltra,
  deleteArrayZadar,
  deleteArrayZagreb,
};
