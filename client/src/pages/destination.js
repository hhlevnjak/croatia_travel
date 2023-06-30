import { AppContext } from "../context/context";
import { useContext, useEffect, useState } from "react";
import Navigation from "../components/navigation";
import axios from "axios";
import Comments from "../components/comments/comments";
import { useNavigate, useParams } from "react-router-dom";
import PlaceColor from "../logic/placeColor";
import ShowReviewStars from "../logic/showReviewStars";
import "../styles/location.css";

function Destination() {
  const [commentsArray, setCommentsArray] = useState(null);

  const { destination, setDestination, destinationsArray } =
    useContext(AppContext);

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    //Open only first time or after refresh, because after adding comment commentsArray exists
    if (destinationsArray && !destination) {
      destinationsArray.forEach((element) => {
        if (element.name.toLowerCase() === params.id.toLowerCase())
          return setDestination(element);
      });
    } else if (destination && !commentsArray) {
      const apiName = destination.name.split(" ").join("").toLowerCase();
      axios.get(`https://croatia-travel.onrender.com/api/${apiName}`).then((res) => {
        setCommentsArray(res.data);
      });
    }
  }, [destinationsArray, destination]);

  const handleBackClick = () => {
    navigate(-1);
  };

  if (!destination) return;
  else {
    let isTopRated;
    destinationsArray.forEach((element, i) => {
      if (i + 1 > 3) return;
      else if (element.name === destination.name)
        return (isTopRated = PlaceColor(i));
    });
    return (
      <div>
        <Navigation />
        <div className="location">
          <div className="locationHeader">
            <img src={destination.img} alt={destination.name}></img>
            <div className="locationHeaderName">{destination.name} </div>
            {isTopRated ? isTopRated : null}
          </div>
          <div className="locationRatings">
            <div className="avgRating">
              {destination.averageRating == 0
                ? `Not rated yet`
                : ShowReviewStars(destination.averageRating)}
              <div className="goBackRating" onClick={handleBackClick}>
                Go Back
              </div>
            </div>
            <div className="reviewsNumb">
              {commentsArray?.length
                ? `${commentsArray.length} ${
                    commentsArray.length === 1 ? `review` : `reviews`
                  }`
                : null}
            </div>
          </div>
          <div className="description">{destination.description}</div>
        </div>
        <Comments
          commentsArray={commentsArray}
          setCommentsArray={setCommentsArray}
        />
      </div>
    );
  }
}

export default Destination;
