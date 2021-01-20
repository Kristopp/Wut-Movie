import React, { useEffect } from "react";

import { useStateValue } from "../state/stateProvider";

const movieComponent = () => {
  const [{ initalMovies }, dispatch] = useStateValue();
  const shortentext = (text, maxLenght) => {
    if (text && text.length > maxLenght) {
      return text.substr(0, maxLenght) + "...";
    }
    return text;
  };
  return (
    <React.Fragment>
      {initalMovies.map((movies) => (
        <div key={movies.id} className="col-lg-3 col-md-3 mb-3">
          <div className="card h-100">
            <a href="#">
              <img className="card-img-top" src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`} alt="" />
            </a>
            <div className="card-body">
              <a href="#">{movies.original_title}</a>
              <h4 className="card-title"></h4>
            </div>
            
            <div className="card-footer">
            <small className="text-warning m-2">{"Avarage raiting "  + movies.vote_average}</small>
            </div>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
};

export default movieComponent;
