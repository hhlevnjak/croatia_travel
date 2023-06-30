import { useState, useEffect } from "react";
import WriteComment from "./writeComment";
import Pagination from "./pagination";
import ShowComments from "./showComments";
import CommentsInfo from "./commentsInfo";

function Comments({ commentsArray, setCommentsArray }) {
  const [numberOfpages, setNumberOfPages] = useState(null);
  const [pageNumberSelected, setPageNumberSelected] = useState(1);
  const [commentsArrayPage, setCommentsArrayPage] = useState(null);
  const [threeDots, setThreeDots] = useState(null);

  useEffect(() => {
    if (commentsArray) {
      const pagesLoopIterations = Math.ceil(commentsArray.length / 5);
      let pages = [];
      for (let i = 1; i <= pagesLoopIterations; i++) {
        pages = [...pages, i];
      }

      const arrayStart = (pageNumberSelected - 1) * 5;
      const arrayFinish = arrayStart + 4;
      let newArrayReviews = [];
      for (let i = arrayStart; i <= arrayFinish; i++) {
        if (commentsArray[i])
          newArrayReviews = [...newArrayReviews, commentsArray[i]];
      }

      if (newArrayReviews.length < 1 && commentsArray?.length > 5)
        setPageNumberSelected(pageNumberSelected - 1);
      if (pages.length === 1) setPageNumberSelected(1);
      if (pages.length > 4) {
        let dots = [];
        for (let i = 2; i <= pagesLoopIterations - 2; i++) {
          dots = [...dots, pages[i]];
        }
        setThreeDots(dots);
      }

      setNumberOfPages(pages);
      setCommentsArrayPage(newArrayReviews);
    }
  }, [commentsArray, pageNumberSelected]);

  return (
    <>
      {commentsArrayPage ? (
        <div>
          <ShowComments
            commentsArrayPage={commentsArrayPage}
            commentsArray={commentsArray}
            setCommentsArray={setCommentsArray}
          />
          <Pagination
            pageNumberSelected={pageNumberSelected}
            setPageNumberSelected={setPageNumberSelected}
            numberOfpages={numberOfpages}
            threeDots={threeDots}
          />
          <CommentsInfo commentsArrayPage={commentsArrayPage} />
          <WriteComment
            setCommentsArray={setCommentsArray}
            commentsArrayPage={commentsArrayPage}
            setPageNumberSelected={setPageNumberSelected}
            commentsArray={commentsArray}
          />
        </div>
      ) : null}
    </>
  );
}

export default Comments;
