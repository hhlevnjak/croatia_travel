const fs = require(`fs`);

const { getDestinationsArray } = require("../get");

function changeInfoRatingDelete(getArrayDestination, req) {
  let newCommentsArray = [];
  const destionationNameToLowerCase = req.body.name
    .split(" ")
    .join("")
    .toLowerCase();

  if (!req.body.average) req.body.average = 0;

  getArrayDestination.forEach((comment, i) => {
    if (req.params.id != i) newCommentsArray = [...newCommentsArray, comment];
  });

  const newDestinationsArray = getDestinationsArray.map((el) => {
    if (el.name === req.body.name)
      return { ...el, averageRating: req.body.average };
    else return el;
  });

  newDestinationsArray.sort((a, b) => {
    if (a.averageRating > b.averageRating) return -1;
    else return 1;
  });

  fs.writeFile(
    `./data/comments/${destionationNameToLowerCase}.json`,
    JSON.stringify(newCommentsArray),
    (err) => {
      if (err) console.error(err);
    }
  );

  fs.writeFile(
    `./data/destinationsInfo.json`,
    JSON.stringify(newDestinationsArray),
    (err) => {
      if (err) console.error(err);
    }
  );

  const objectToReturn = { newCommentsArray, newDestinationsArray };

  return objectToReturn;
}

module.exports = {
  changeInfoRatingDelete,
};
