import { useContext } from "react";
import { AppContext } from "../context/context";
import Navigation from "../components/navigation";
import { useNavigate } from "react-router-dom";
import routes from "../route/routes";
import PlaceColor from "../logic/placeColor";

function TopRated() {
  const { destinationsArray, setDestination } = useContext(AppContext);

  const navigate = useNavigate();

  const handleClick = (el) => {
    setDestination(el);
    navigate(`${routes.destination}/${el.name}`);
  };

  return (
    <>
      <Navigation />
      <div className="topRatedList">
        {!destinationsArray
          ? null
          : destinationsArray.map((el, i) => {
              if (i + 1 > 3) return;
              else
                return (
                  <div
                    className="topRatedHeader"
                    key={i}
                    onClick={() => handleClick(el)}
                  >
                    {PlaceColor(i)}
                    <div className="topRatedName">{el.name}</div>
                    <img src={el?.img} alt={el.name}></img>
                  </div>
                );
            })}
      </div>
    </>
  );
}

export default TopRated;
