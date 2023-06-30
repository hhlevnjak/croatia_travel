import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/context";
import SearchLogic from "../logic/searchLogic";
import routes from "../route/routes";

function SearchBar() {
  const [searchText, setSearchText] = useState(``);
  const [arrayToShow, setArrayToShow] = useState(null);

  const { destinationsArray, setSearch, setDestination } = useContext(AppContext);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(searchText);
    navigate(routes.search);
  };

  const handleSearch = (text) => {
    if (text.length < 1) return setArrayToShow(null);
    const newArray = SearchLogic(text, destinationsArray);
    setArrayToShow(newArray);
    setSearchText(text);
  };

  const handleClick = (el) => {
    setDestination(el);
    navigate(`${routes.destination}/${el.name}`);
  };

  return (
    <>
      <div className="searchBar">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Where to?"
            onChange={(e) => handleSearch(e.target.value)}
          ></input>
          <button type="submit">Submit</button>
        </form>
        {!arrayToShow
          ? null
          : (arrayToShow.length < 2 ? arrayToShow.map((el, i) => {
            return (
              <div key={i} className="searchResultsSingle" style={{marginTop: `${i * 30}px`}} onClick={() => handleClick(el)}>
                {el.name}
              </div>
            );
          }) : arrayToShow.map((el, i) => {
              return (
                <div key={i} className="searchResults" style={{marginTop: `${i * 30}px`}} onClick={() => handleClick(el)}>
                  {el.name}
                </div>
              );
            })
            )
            }
      </div>
      <div>
        
      </div>
    </>
  );
}

export default SearchBar;
