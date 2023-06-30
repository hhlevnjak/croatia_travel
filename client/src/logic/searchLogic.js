function SearchLogic(search, array) {
  let newArray = [];
  array.forEach((el) => {
    const name = el.name.toLowerCase();
    const searchtext = search.toLowerCase();
    if (name.includes(searchtext)) newArray = [...newArray, el];
  });
  return newArray;
}

export default SearchLogic;
