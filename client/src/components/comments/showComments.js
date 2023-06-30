import { useContext, useState } from "react";
import { AppContext } from "../../context/context";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import EditComment from "./editComment";
import NewAverageRating from "../../logic/newAverageRating";
import axios from "axios";

function ShowComments({ commentsArrayPage, commentsArray, setCommentsArray }) {
  const [openEdit, setOpenEdit] = useState(``);

  const { authInfo, destination, setDestination, setDestinationsArray } = useContext(AppContext);

  const handleEdit = (id) => {
    !openEdit ? setOpenEdit(id) : setOpenEdit(``);
  };

  const handleDelete = (id) => {
    const apiName = destination.name.split(" ").join("").toLowerCase();
    let iterationNo = 0;
    commentsArray.forEach((el, i) => {
      if (el.id === id) return (iterationNo = i);
    });

    const average = NewAverageRating(iterationNo, commentsArray, `delete`);

    axios
      .delete(`https://croatia-travel.onrender.com/api/${apiName}/${iterationNo}`, {
        data: { average, name: destination.name },
      })
      .then((res) => {
        setCommentsArray(res.data.newCommentsArray);
        setDestinationsArray(res.data.newDestinationsArray);
        res.data.newDestinationsArray.forEach((element) => {
          if (element.name === destination.name) setDestination(element);
        });
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      })
      .catch((err) => console.log(err));
  };

  const handleRating = (rating) => {
    if (rating == 1)
      return (
        <div className="starRow">
          <AiFillStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
        </div>
      );
    if (rating == 2)
      return (
        <div className="starRow">
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
        </div>
      );
    if (rating == 3)
      return (
        <div className="starRow">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
          <AiOutlineStar />
        </div>
      );
    if (rating == 4)
      return (
        <div className="starRow">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
        </div>
      );
    else
      return (
        <div className="starRow">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
      );
  };

  return commentsArrayPage.map((comment, i) => (
    <div className="comment" key={i}>
      <div className="commentBox">
        <div>
          <div className="commentTitle">{comment.user.username}</div>
          <div>{handleRating(comment.rating)}</div>
          <div className="commentTitle">{comment.title}</div>
          <div>{destination.date}</div>
        </div>
        {comment.user.id === authInfo?.uid ? (
          <div className="commentButtons">
            <button
              className="editButton"
              onClick={() => handleEdit(comment.id)}
            >
              Edit
            </button>
            <button
              className="deleteButton"
              onClick={() => handleDelete(comment.id)}
            >
              Delete
            </button>
          </div>
        ) : null}
      </div>
      <div>{comment.message}</div>
      {openEdit === comment.id ? (
        <EditComment
          openEdit={openEdit}
          commentsArray={commentsArray}
          setOpenEdit={setOpenEdit}
          setCommentsArray={setCommentsArray}
          comment={comment}
        />
      ) : null}
    </div>
  ));
}

export default ShowComments;
