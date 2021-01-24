import React, { useState, useEffect } from "react";
import { useStateValue } from "../state/stateProvider";

function pageCounter(current_count) { 
  return current_count++
}

export async function getStaticProps() {
  const getPage = pageCounter(1);
  const initalPopularListUrl = ` https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_MDB_API_KEY}&language=en-US&page=${getPage}`;
  const popularMovieList = await fetch(initalPopularListUrl);
  const data = await popularMovieList.json();
  const initialPopularMovieList = data.results;
  console.log(initialPopularMovieList)
  return {
    props: initialPopularMovieList
  };
}
function popularMovies({ initialPopularMovieList }) {
  const [{}, dispatch] = useStateValue();
  const [page, setPage] = useState(1);
  console.log(initialPopularMovieList)
  useEffect(() => {
    dispatch({
      type: "GET_INITAL_LIST",
      payload: initialPopularMovieList,
    });
  }, []);

  return <div></div>;
}



export default popularMovies;
