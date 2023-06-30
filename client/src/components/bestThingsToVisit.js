import { useNavigate } from "react-router-dom";
import bestThingsToVisit from "../img/bestThingsToVisit.jpg";
import routes from "../route/routes";

function BestThingsToVisit() {

  const navigate = useNavigate()

  const handleClick = () => {
    navigate(routes.topRated)
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className="imageContainer2">
      <img
        src={bestThingsToVisit}
        className="bestThingsToVisitImg"
        alt="best-things-image"
      ></img>
      <div className="bestThingsToVisitText">
        Travelers Choice, Best Things to Do in Croatia
        <div className="bestThingsToVisitTextDiv">
          See our best reviewed locations!
        </div>
        <button onClick={handleClick}>See the list</button>
      </div>
    </div>
  );
}

export default BestThingsToVisit
