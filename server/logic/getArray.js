const {
  getDestinationsArray,
  getUsernamesArray,
  getComments,
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

const getDestinationComments = (req, res) => {
  try {
    const destination = req.params.id;
    if (destination) {
      const comments = getComments(destination.toLowerCase());
  
      return res.status(200).json(comments);

    }
    return res.status(400).json({ message: "Destination not provided." })
  } catch (err) {
    return res.status(400).json({ message: "Getting destination comments failed." });
  }
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
  getDestinationComments,
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
