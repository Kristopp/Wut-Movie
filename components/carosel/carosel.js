import React, { Fragment, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { useStateValue } from "../../state/stateProvider";

function carosel() {
  const [{ weekelyTrending }, dispatch] = useStateValue();
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="carousel">
      <h2>weekly trending movies</h2>
      <Carousel
        className="d-block w-100"
        activeIndex={index}
        onSelect={handleSelect}
      >
        {weekelyTrending.map((movies, index) => (
          <Carousel.Item key={movies.id} interval={10000}>
            <div className="img carousel-inner">
              <img
                className="d-block w-100 inner-image"
                src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`}
                alt="First slide"
              />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
      <style jsx>
        {`
            .carousel {
              border-radius: 5px;
              background-color: rgb(26, 25, 25, 0.8);
              margin: 10px;
              border: 0.5px solid rgb(250, 216, 50, 0.9);
            }
          h2 {
            text-align: center;
            font-size: 1.7em;
            white-space: nowrap;
            overflow: hidden;
            line-height: 1.4;
            color: rgb(250, 216, 50, 0.8);
          }
          .img { 
            border-radius: 5px;
          }
        `}
      </style>
    </div>
  );
}

export default carosel;
