import { AppContext } from "../context/context";
import { useContext } from "react";
import SearchLogic from "../logic/searchLogic";
import { useNavigate } from "react-router-dom";
import routes from "../route/routes";

function Search() {
  const { search, destinationsArray, setDestination } = useContext(AppContext);

  const navigate = useNavigate();

  if (!destinationsArray) return;
  else if (!search) {
    //Return to homepage in case of refresh
    return setTimeout(() => {
      navigate(routes.home);
    }, 0);
  }

  const arrayAfterSearch = SearchLogic(search, destinationsArray);

  const handleClick = (el) => {
    setDestination(el);
    navigate(`${routes.destination}/${el.name}`);
  };

  const navigateBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <div onClick={navigateBack}>Go back</div>
      {arrayAfterSearch.map((el, i) => {
        return (
          <div key={i} onClick={() => handleClick(el)}>
            {el.name}
          </div>
        );
      })}
    </div>
  );
}

export default Search;
