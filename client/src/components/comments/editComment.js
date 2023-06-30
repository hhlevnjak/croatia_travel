import { useState, useContext } from "react";
import { AppContext } from "../../context/context";
import axios from "axios";

function EditComment({
  openEdit,
  commentsArray,
  setOpenEdit,
  setCommentsArray,
  comment,
}) {
  const [editText, setEditText] = useState(comment.message);
  const [editTitle, setEditTitle] = useState(comment.title);
  const [error, setError] = useState(``);

  const { destination } = useContext(AppContext);

  const handleEditSubmit = (e) => {
    e.preventDefault();

    if (editTitle.length < 5)
      return setError(`Review title must be longer than 5 characters!`);
    else if (editText.length < 5)
      return setError(`Review text must be longer than 5 characters!`);

    const apiName = destination.name.split(" ").join("").toLowerCase();
    let iterationNo = 0;
    commentsArray.forEach((el, i) => {
      if (el.id === openEdit) return (iterationNo = i);
    });
    axios
      .patch(`http://localhost:5000/api/${apiName}/${iterationNo}`, {
        message: editText,
      })
      .then((res) => {
        setOpenEdit(``);
        setEditText(``);
        setCommentsArray(res.data);
      });
  };

  return (
    <div>
      <form className="editForm" onSubmit={handleEditSubmit}>
        <div className="editFormTitle">Edit:</div>
        <div className="error">{error}</div>
        <label>Title:</label>
        <input
          type="text"
          className="commentTextarea"
          value={editTitle}
          maxLength={30}
          onChange={(e) => setEditTitle(e.target.value)}
          required
        ></input>
        <label>Review:</label>
        <textarea
          type="text"
          className="commentTextarea"
          value={editText}
          rows="4"
          cols="40"
          maxLength={500}
          onChange={(e) => setEditText(e.target.value)}
        ></textarea>
        <button className="commentFormButton" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default EditComment;
