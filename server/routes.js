const express = require(`express`);

const router = express.Router();

const {
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
} = require("./logic/getArray");

const {
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
} = require("./logic/postArrayData");

const {
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
} = require("./logic/deleteArrayData");

const {
  editArrayDubrovnik,
  editArrayBiograd,
  editArrayKrka,
  editArrayMakarska,
  editArrayPlitvice,
  editArrayCetina,
  editArraySalona,
  editArraySplit,
  editArrayUltra,
  editArrayZadar,
  editArrayZagreb,
} = require("./logic/editArrayData");

router.route(`/api`).get(getDestinationsList);
router.route(`/api/usernames`).get(getUsernamesList);
router.route(`/api/destination/:id`).get(getDestinationComments);
router.route(`/api/dubrovnik`).get(getDubrovnikComments);
router.route(`/api/funparkmirnovecinbiograd`).get(getBiogradComments);
router.route(`/api/krka`).get(getKrkaComments);
router.route(`/api/makarska`).get(getMakarskaComments);
router.route(`/api/plitvicelakes`).get(getPlitviceComments);
router.route(`/api/raftingonthecetinariver`).get(getCetinaComments);
router.route(`/api/salona`).get(getSalonaComments);
router.route(`/api/split`).get(getSplitComments);
router.route(`/api/ultraeuropefestival`).get(getUltraComments);
router.route(`/api/zadar`).get(getZadarComments);
router.route(`/api/zagreb`).get(getZagrebComments);

router.route(`/api/usernames`).post(postArrayUsernames);
router.route(`/api/dubrovnik`).post(postArrayDubrovnik);
router.route(`/api/funparkmirnovecinbiograd`).post(postArrayBiograd);
router.route(`/api/krka`).post(postArrayKrka);
router.route(`/api/makarska`).post(postArrayMakarska);
router.route(`/api/plitvicelakes`).post(postArrayPlitvice);
router.route(`/api/raftingonthecetinariver`).post(postArrayCetina);
router.route(`/api/salona`).post(postArraySalona);
router.route(`/api/split`).post(postArraySplit);
router.route(`/api/ultraeuropefestival`).post(postArrayUltra);
router.route(`/api/zadar`).post(postArrayZadar);
router.route(`/api/zagreb`).post(postArrayZagreb);

router.route(`/api/dubrovnik/:id`).delete(deleteArrayDubrovnik);
router.route(`/api/funparkmirnovecinbiograd/:id`).delete(deleteArrayBiograd);
router.route(`/api/krka/:id`).delete(deleteArrayKrka);
router.route(`/api/makarska/:id`).delete(deleteArrayMakarska);
router.route(`/api/plitvicelakes/:id`).delete(deleteArrayPlitvice);
router.route(`/api/raftingonthecetinariver/:id`).delete(deleteArrayCetina);
router.route(`/api/salona/:id`).delete(deleteArraySalona);
router.route(`/api/split/:id`).delete(deleteArraySplit);
router.route(`/api/ultraeuropefestival/:id`).delete(deleteArrayUltra);
router.route(`/api/zadar/:id`).delete(deleteArrayZadar);
router.route(`/api/zagreb/:id`).delete(deleteArrayZagreb);

router.route(`/api/dubrovnik/:id`).patch(editArrayDubrovnik);
router.route(`/api/funparkmirnovecinbiograd/:id`).patch(editArrayBiograd);
router.route(`/api/krka/:id`).patch(editArrayKrka);
router.route(`/api/makarska/:id`).patch(editArrayMakarska);
router.route(`/api/plitvicelakes/:id`).patch(editArrayPlitvice);
router.route(`/api/raftingonthecetinariver/:id`).patch(editArrayCetina);
router.route(`/api/salona/:id`).patch(editArraySalona);
router.route(`/api/split/:id`).patch(editArraySplit);
router.route(`/api/ultraeuropefestival/:id`).patch(editArrayUltra);
router.route(`/api/zadar/:id`).patch(editArrayZadar);
router.route(`/api/zagreb/:id`).patch(editArrayZagreb);

module.exports = router;
