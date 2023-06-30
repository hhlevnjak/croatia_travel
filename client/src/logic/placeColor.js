import { FaMedal } from "react-icons/fa";

function PlaceColor(i) {
  if (i + 1 === 1)
    return (
      <div className="topRatedPlace">
        <FaMedal className="topRatedPlaceIcon" style={{ color: `gold` }} />
        <span className="topRatedText">Croatia Travel Advisor Best Choice!</span>
      </div>
    );
  else if (i + 1 === 2)
    return (
      <div className="topRatedPlace">
        <FaMedal className="topRatedPlaceIcon" style={{ color: `silver` }} />
        Croatia Travel Advisor 2nd Best Choice!{" "}
      </div>
    );
  else
    return (
      <div className="topRatedPlace">
        <FaMedal className="topRatedPlaceIcon" style={{ color: `#CD7F32` }} />
        Croatia Travel Advisor 3rd Best Choice!{" "}
      </div>
    );
}

export default PlaceColor;
