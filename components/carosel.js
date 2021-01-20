import React, { Fragment, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { useStateValue } from "../state/stateProvider";

function carosel() {
  const [{ weekelyTrending }, dispatch] = useStateValue();
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <h2>weekly trending movies</h2>
      <Carousel
        className="d-block w-50"
        activeIndex={index}
        onSelect={handleSelect}
      >
        {weekelyTrending.map((movies, index) => (
          <Carousel.Item key={movies.id} interval={10000}>
            <div className="carousel-inner"></div>
            <img
              className="d-block w-100"
              src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`}
              alt="First slide"
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default carosel;
