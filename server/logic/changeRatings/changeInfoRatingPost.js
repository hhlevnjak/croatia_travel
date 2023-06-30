const fs = require(`fs`);

const { getDestinationsArray } = require("../get");

const changeInfoRatingPost = (body, getArrayDestination) => {
  let newCommentsArray = [body.messageObject, ...getArrayDestination];
  const elementNameCorrected = body.changeRating.elementName
    .split(" ")
    .join("")
    .toLowerCase();

  const newInfoArray = getDestinationsArray.map((el) => {
    if (el.name.toLowerCase() === elementNameCorrected) {
      return { ...el, averageRating: body.changeRating.newRating };
    } else return el;
  });

  newInfoArray.sort((a, b) => {
    if (a.averageRating > b.averageRating) return -1;
    else return 1;
  });

  fs.writeFile(
    `./data/comments/${elementNameCorrected}.json`,
    JSON.stringify(newCommentsArray),
    (err) => {
      if (err) console.error(err);
    }
  );

  fs.writeFile(
    `./data/destinationsInfo.json`,
    JSON.stringify(newInfoArray),
    (err) => {
      if (err) console.error(err);
    }
  );

  const objectToReturn = { newCommentsArray, newInfoArray };

  return objectToReturn;
};

module.exports = {
  changeInfoRatingPost
};
