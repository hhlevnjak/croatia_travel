import { useContext, useState } from "react";
import { nanoid } from "nanoid";
import { AppContext } from "../../context/context";
import { useNavigate } from "react-router-dom";
import routes from "../../route/routes";
import axios from "axios";
import NewAverageRating from "../../logic/newAverageRating";

function WriteComment({
  setCommentsArray,
  commentsArrayPage,
  setPageNumberSelected,
  commentsArray,
}) {
  const [rating, setRating] = useState(``);
  const [title, setTitle] = useState(``);
  const [text, setText] = useState(``);
  const [error, setError] = useState(``);

  const { authInfo, destination, setDestination, notLogged, setDestinationsArray } = useContext(AppContext);

  const navigate = useNavigate();

  const handleSendComment = (e) => {
    e.preventDefault();

    if (title.length < 5)
      return setError(`Review title must be longer than 5 characters!`);
    else if (text.length < 5)
      return setError(`Review text must be longer than 5 characters!`);
    else if (!rating)
      return setError(`Review must have rating, please choose!`);

    const today = Date().split(" ");
    const date = `${today[2]} ${today[1]} ${today[3]}`;

    const messageObject = {
      id: nanoid(),
      user: { username: authInfo.displayName, id: authInfo.uid },
      title,
      message: text,
      rating,
      date,
    };

    const apiName = destination.name.split(" ").join("").toLowerCase();
    const average = NewAverageRating(rating, commentsArray);
    const elementName = destination.name;
    const changeRating = { average, elementName };

    axios
      .post(`https://croatia-travel.onrender.com/api/${apiName}`, {
        messageObject,
        changeRating,
      })
      .then((response) => {
        setDestination({ ...destination, averageRating: average });
        setCommentsArray(response.data.newCommentsArray);
        setDestinationsArray(response.data.newInfoArray);
        setPageNumberSelected(1);
        setTitle(``);
        setText(``);
        setRating(``);
        setError(``);

        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });
  };

  return (
    <div>
      {authInfo ? (
        <>
          <div className="writeReview">Write a review:</div>
          <div className="error">{error}</div>
          <form className="commentForm" onSubmit={handleSendComment}>
            <div className="commentRatings">
              Your rating:
              <input
                type="radio"
                id="1"
                name="rating"
                value="1"
                onClick={(e) => setRating(e.target.value)}
              />
              <label htmlFor="1">1</label>
              <input
                type="radio"
                id="2"
                name="rating"
                value="2"
                onClick={(e) => setRating(e.target.value)}
              />
              <label htmlFor="2">2</label>{" "}
              <input
                type="radio"
                id="3"
                name="rating"
                value="3"
                onClick={(e) => setRating(e.target.value)}
              />
              <label htmlFor="3">3</label>{" "}
              <input
                type="radio"
                id="4"
                name="rating"
                value="4"
                onClick={(e) => setRating(e.target.value)}
              />
              <label htmlFor="4">4</label>{" "}
              <input
                type="radio"
                id="5"
                name="rating"
                value="5"
                onClick={(e) => setRating(e.target.value)}
              />
              <label htmlFor="5">5</label>
            </div>
            <label>Title:</label>
            <input
              type="text"
              className="commentTextarea"
              value={title}
              maxLength={30}
              onChange={(e) => setTitle(e.target.value)}
              required
            ></input>
            <label>Review:</label>
            <textarea
              type="text"
              className="commentTextarea"
              value={text}
              rows="4"
              cols="40"
              maxLength={500}
              onChange={(e) => setText(e.target.value)}
              required
            ></textarea>
            <button className="commentFormButton" type="submit">
              Submit
            </button>
          </form>
        </>
      ) : notLogged && commentsArrayPage?.length > 0 ? (
        <div className="pleaseSignIn">
          Please{" "}
          <span
            style={{ color: `#00af87` }}
            onClick={() => navigate(routes.signIn)}
          >
            sign in
          </span>{" "}
          to comment destination
        </div>
      ) : null}
    </div>
  );
}

export default WriteComment;
