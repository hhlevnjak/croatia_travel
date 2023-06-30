import routes from "../../route/routes";
import { AppContext } from "../../context/context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function CommentsInfo({ commentsArrayPage }) {
  const { authInfo, notLogged } = useContext(AppContext);

  const navigate = useNavigate();

  return commentsArrayPage?.length < 1 ? (
    authInfo ? (
      <div className="noReviews">
        There are no reviews for this destination. Be first to write review!
      </div>
    ) : !notLogged ? (
      <div className="noReviews">Checking...</div>
    ) : (
      <div className="noReviews">
        There are no reviews for this destination.{" "}
        <span onClick={() => navigate(routes.signIn)} className="signIn">
          Sign in
        </span>{" "}
        and write review!!
      </div>
    )
  ) : null;
}

export default CommentsInfo;
