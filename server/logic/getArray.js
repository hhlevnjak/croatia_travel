const {
  getDestinationsArray,
  getUsernamesArray,
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

const getDestinationsList = (req, res) => {
  res.status(200).json(getDestinationsArray);
};

const getUsernamesList = (req, res) => {
  res.status(200).json(getUsernamesArray);
};

const getDubrovnikComments = (req, res) => {
  res.status(200).json(getArrayDubrovnik);
};

const getBiogradComments = (req, res) => {
  res.status(200).json(getArrayBiograd);
};

const getKrkaComments = (req, res) => {
  res.status(200).json(getArrayKrka);
};

const getMakarskaComments = (req, res) => {
  res.status(200).json(getArrayMakarska);
};

const getPlitviceComments = (req, res) => {
  res.status(200).json(getArrayPlitvice);
};

const getCetinaComments = (req, res) => {
  res.status(200).json(getArrayCetina);
};

const getSalonaComments = (req, res) => {
  res.status(200).json(getArraySalona);
};

const getSplitComments = (req, res) => {
  res.status(200).json(getArraySplit);
};

const getUltraComments = (req, res) => {
  res.status(200).json(getArrayUltra);
};
const getZadarComments = (req, res) => {
  res.status(200).json(getArrayZadar);
};

const getZagrebComments = (req, res) => {
  res.status(200).json(getArrayZagreb);
};

module.exports = {
  getDestinationsList,
  getUsernamesList,
  getDubrovnikComments,
  getBiogradComments,
  getKrkaComments,
  getMakarskaComments,
  getPlitviceComments,
  getCetinaComments,
  getSalonaComments,
  getSplitComments,
  getUltraComments,
  getZadarComments,
  getZagrebComments,
};
