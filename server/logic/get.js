const fs = require(`fs`);

const getDestinationsArray = JSON.parse(
  fs.readFileSync(`${__dirname}/../data/destinationsInfo.json`, `utf-8`)
);

const getArrayUsernames = JSON.parse(
  fs.readFileSync(`${__dirname}/../data/usernamesList.json`, `utf-8`)
);
const getArrayDubrovnik = JSON.parse(
  fs.readFileSync(`${__dirname}/../data/comments/dubrovnik.json`, `utf-8`)
);
const getArrayBiograd = JSON.parse(
  fs.readFileSync(
    `${__dirname}/../data/comments/funparkmirnovecinbiograd.json`,
    `utf-8`
  )
);
const getArrayKrka = JSON.parse(
  fs.readFileSync(`${__dirname}/../data/comments/krka.json`, `utf-8`)
);
const getArrayMakarska = JSON.parse(
  fs.readFileSync(`${__dirname}/../data/comments/makarska.json`, `utf-8`)
);
const getArrayPlitvice = JSON.parse(
  fs.readFileSync(`${__dirname}/../data/comments/plitvicelakes.json`, `utf-8`)
);
const getArrayCetina = JSON.parse(
  fs.readFileSync(
    `${__dirname}/../data/comments/raftingonthecetinariver.json`,
    `utf-8`
  )
);
const getArraySalona = JSON.parse(
  fs.readFileSync(`${__dirname}/../data/comments/salona.json`, `utf-8`)
);
const getArraySplit = JSON.parse(
  fs.readFileSync(`${__dirname}/../data/comments/split.json`, `utf-8`)
);
const getArrayUltra = JSON.parse(
  fs.readFileSync(
    `${__dirname}/../data/comments/ultraeuropefestival.json`,
    `utf-8`
  )
);
const getArrayZadar = JSON.parse(
  fs.readFileSync(`${__dirname}/../data/comments/zadar.json`, `utf-8`)
);

const getArrayZagreb = JSON.parse(
  fs.readFileSync(`${__dirname}/../data/comments/zagreb.json`, `utf-8`)
);

module.exports = {
  getDestinationsArray,
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
};
