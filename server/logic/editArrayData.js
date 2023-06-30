const fs = require(`fs`);

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

const editArrayDubrovnik = (req, res) => {
  let newArray = [];

  getArrayDubrovnik.forEach((comment, i) => {
    if (req.params.id != i) newArray = [...newArray, comment];
    else {
      const newComment = { ...comment, message: req.body.message };
      newArray = [...newArray, newComment];
    }
  });

  fs.writeFile(
    `./data/comments/dubrovnik.json`,
    JSON.stringify(newArray),
    (err) => {
      if (err) console.error(err);
    }
  );

  res.status(200).json(newArray);
};

const editArrayBiograd = (req, res) => {
  let newArray = [];

  getArrayBiograd.forEach((comment, i) => {
    if (req.params.id != i) newArray = [...newArray, comment];
    else {
      const newComment = { ...comment, message: req.body.message };
      newArray = [...newArray, newComment];
    }
  });

  fs.writeFile(
    `./data/comments/funparkmirnovecinbiograd.json`,
    JSON.stringify(newArray),
    (err) => {
      if (err) console.error(err);
    }
  );

  res.status(200).json(newArray);
};

const editArrayCetina = (req, res) => {
  let newArray = [];

  getArrayCetina.forEach((comment, i) => {
    if (req.params.id != i) newArray = [...newArray, comment];
    else {
      const newComment = { ...comment, message: req.body.message };
      newArray = [...newArray, newComment];
    }
  });

  fs.writeFile(
    `./data/comments/raftingonthecetinariver.json`,
    JSON.stringify(newArray),
    (err) => {
      if (err) console.error(err);
    }
  );

  res.status(200).json(newArray);
};

const editArrayKrka = (req, res) => {
  let newArray = [];

  getArrayKrka.forEach((comment, i) => {
    if (req.params.id != i) newArray = [...newArray, comment];
    else {
      const newComment = { ...comment, message: req.body.message };
      newArray = [...newArray, newComment];
    }
  });

  fs.writeFile(`./data/comments/krka.json`, JSON.stringify(newArray), (err) => {
    if (err) console.error(err);
  });

  res.status(200).json(newArray);
};
const editArrayMakarska = (req, res) => {
  let newArray = [];

  getArrayMakarska.forEach((comment, i) => {
    if (req.params.id != i) newArray = [...newArray, comment];
    else {
      const newComment = { ...comment, message: req.body.message };
      newArray = [...newArray, newComment];
    }
  });

  fs.writeFile(
    `./data/comments/makarska.json`,
    JSON.stringify(newArray),
    (err) => {
      if (err) console.error(err);
    }
  );

  res.status(200).json(newArray);
};

const editArrayPlitvice = (req, res) => {
  let newArray = [];

  getArrayPlitvice.forEach((comment, i) => {
    if (req.params.id != i) newArray = [...newArray, comment];
    else {
      const newComment = { ...comment, message: req.body.message };
      newArray = [...newArray, newComment];
    }
  });

  fs.writeFile(
    `./data/comments/plitvicelakes.json`,
    JSON.stringify(newArray),
    (err) => {
      if (err) console.error(err);
    }
  );

  res.status(200).json(newArray);
};

const editArraySalona = (req, res) => {
  let newArray = [];

  getArraySalona.forEach((comment, i) => {
    if (req.params.id != i) newArray = [...newArray, comment];
    else {
      const newComment = { ...comment, message: req.body.message };
      newArray = [...newArray, newComment];
    }
  });

  fs.writeFile(
    `./data/comments/salona.json`,
    JSON.stringify(newArray),
    (err) => {
      if (err) console.error(err);
    }
  );

  res.status(200).json(newArray);
};

const editArraySplit = (req, res) => {
  let newArray = [];

  getArraySplit.forEach((comment, i) => {
    if (req.params.id != i) newArray = [...newArray, comment];
    else {
      const newComment = { ...comment, message: req.body.message };
      newArray = [...newArray, newComment];
    }
  });

  fs.writeFile(
    `./data/comments/split.json`,
    JSON.stringify(newArray),
    (err) => {
      if (err) console.error(err);
    }
  );

  res.status(200).json(newArray);
};
const editArrayUltra = (req, res) => {
  let newArray = [];

  getArrayUltra.forEach((comment, i) => {
    if (req.params.id != i) newArray = [...newArray, comment];
    else {
      const newComment = { ...comment, message: req.body.message };
      newArray = [...newArray, newComment];
    }
  });

  fs.writeFile(
    `./data/comments/ultraeuropefestival.json`,
    JSON.stringify(newArray),
    (err) => {
      if (err) console.error(err);
    }
  );

  res.status(200).json(newArray);
};

const editArrayZadar = (req, res) => {
  let newArray = [];

  getArrayZadar.forEach((comment, i) => {
    if (req.params.id != i) newArray = [...newArray, comment];
    else {
      const newComment = { ...comment, message: req.body.message };
      newArray = [...newArray, newComment];
    }
  });

  fs.writeFile(
    `./data/comments/zadar.json`,
    JSON.stringify(newArray),
    (err) => {
      if (err) console.error(err);
    }
  );

  res.status(200).json(newArray);
};

const editArrayZagreb = (req, res) => {
  let newArray = [];

  getArrayZagreb.forEach((comment, i) => {
    if (req.params.id != i) newArray = [...newArray, comment];
    else {
      const newComment = { ...comment, message: req.body.message };
      newArray = [...newArray, newComment];
    }
  });

  fs.writeFile(
    `./data/comments/zagreb.json`,
    JSON.stringify(newArray),
    (err) => {
      if (err) console.error(err);
    }
  );

  res.status(200).json(newArray);
};

module.exports = {
  editArrayBiograd,
  editArrayCetina,
  editArrayDubrovnik,
  editArrayKrka,
  editArrayMakarska,
  editArrayPlitvice,
  editArraySalona,
  editArraySplit,
  editArrayUltra,
  editArrayZadar,
  editArrayZagreb,
};
