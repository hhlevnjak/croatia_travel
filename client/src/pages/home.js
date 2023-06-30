import { useEffect, useState } from "react";
import Navigation from "../components/navigation";
import SearchBar from "../components/searchBar";
import BestThingsToVisit from "../components/bestThingsToVisit";
import Footer from "../components/footer";
import homeImg1 from "../img/homeImg1.jpg";
import homeImg2 from "../img/homeImg2.jpg";
import homeImg3 from "../img/homeImg3.jpg";
import homeImg4 from "../img/homeImg4.jpg";
import "../styles/home.css";

function Home() {
  const [randomImage, setRandomImage] = useState(0);

  useEffect(() => {
    const randomNumber = Math.trunc(Math.random() * 4) + 1;
    if (randomNumber === 1) return setRandomImage(homeImg1);
    else if (randomNumber === 2) return setRandomImage(homeImg2);
    else if (randomNumber === 3) return setRandomImage(homeImg3);
    else return setRandomImage(homeImg4);
  }, []);

  return (
    <>
      <Navigation />
      <div className="homeImageContainer">
        <img src={randomImage} alt="home-image" className="homeImage"></img>
        <SearchBar />
      </div>
      <BestThingsToVisit />
      <Footer />
    </>
  );
}

export default Home;
