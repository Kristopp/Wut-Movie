import React, {  useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { useStateValue } from "../state/stateProvider";

function carosel() {
  const [{ weekelyTrendingTvShows }, dispatch] = useStateValue();
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <h2>weekly trending tv</h2>
      <Carousel
        className="d-block w-100"
        activeIndex={index}
        onSelect={handleSelect}
      >
        {weekelyTrendingTvShows.map((tv, index) => (
          <Carousel.Item key={tv.id} interval={10000}>
            <div className="carousel-inner"></div>
            <img
              className="d-block w-100"
              src={`https://image.tmdb.org/t/p/w500/${tv.poster_path}`}
              alt="First slide"
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default carosel;
