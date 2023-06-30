import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/context";
import Navigation from "../components/navigation";
import PlaceColor from "../logic/placeColor";
import routes from "../route/routes";
import ShowReviewStars from "../logic/showReviewStars";
import "../styles/selections.css";

function Towns() {
  const { destinationsArray, setDestination } = useContext(AppContext);

  const navigate = useNavigate();

  if (!destinationsArray) return;

  const handleClick = (el) => {
    setDestination(el);
    navigate(`${routes.destination}/${el.name}`);
  };

  return (
    <div>
      <Navigation />
      <div className="selection">
        <div className="selectionTitle">Towns</div>
        {destinationsArray.map((el, i) => {
          if (el.tags.includes(`towns`)) {
            return (
              <div
                className="selectionElement"
                key={i}
                onClick={() => handleClick(el)}
              >
                <div className="selectionElementTitle">
                  <div className="selectionElementTitleName">{el.name}</div>
                  <div className="selectionElementTitleStars">
                    {ShowReviewStars(el.averageRating)}
                  </div>
                </div>
                <img
                  src={el?.img}
                  alt={el.name}
                  className="selectionImage"
                ></img>
                {i + 1 < 4 ? PlaceColor(i) : null}
              </div>
            );
          } else return;
        })}
      </div>
    </div>
  );
}

export default Towns;
