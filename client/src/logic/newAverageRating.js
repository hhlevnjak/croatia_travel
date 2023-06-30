function NewAverageRating(ratingIteration, commentsArray, operation) {
  if (operation === `delete`) {
    let allRatingsArray = [];
    commentsArray.forEach((el, i) => {
      if (i !== ratingIteration)
        allRatingsArray = [...allRatingsArray, Number(el.rating)];
    });

    return allRatingsArray.reduce((a, b) => a + b, 0) / allRatingsArray.length;
  } else {
    let allRatingsArray = [Number(ratingIteration)];
    commentsArray.forEach((el) => {
      allRatingsArray = [...allRatingsArray, Number(el.rating)];
    });

    return allRatingsArray.reduce((a, b) => a + b, 0) / allRatingsArray.length;
  }
}

export default NewAverageRating;
