import React, { useEffect, useState } from "react";
import Head from "next/head";
import Navbar from "../components/navbar";
import SideMenu from "../components/sideMenu";
import Carosel from "../components/carosel";
import MovieComponent from "../components/movieComponent";
import Footer from "../components/footer.js";
import { useStateValue } from "../state/stateProvider";

const urlInitalList = `https://api.themoviedb.org/4/list/${1}?page=${1}&api_key=${
  process.env.NEXT_PUBLIC_MDB_API_KEY
}`;
const weekTrendingUrl = `https://api.themoviedb.org/3/trending/movie/week?api_key=${
  process.env.NEXT_PUBLIC_MDB_API_KEY
}`;

export async function getStaticProps() {
  const movieList = await fetch(urlInitalList);
  const data = await movieList.json();
  const initialMovieList = data.results;
  const weekTrendingFetch  = await fetch(weekTrendingUrl);
  const weekTrendingList = await weekTrendingFetch.json();
  const weekTrendingMovies = weekTrendingList.results;

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { initialMovieList, weekTrendingMovies }, // will be passed to the page component as props
  };
}

export default function Home({ initialMovieList, weekTrendingMovies }) {
  const [{ initalMovies, dayilTrending }, dispatch] = useStateValue();
  console.log()
  useEffect(() => { 
    dispatch({ 
      type: "GET_INITAL_LIST",
      payload: initialMovieList

    })
    dispatch({ 
      type: "GET_TRENDING_WEEKLY",
      payload: weekTrendingMovies
    })
  },[])

  return (
    <div>
      <Head>
        <title>Home</title>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
        <script
          src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
          integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
          integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
          integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
          crossorigin="anonymous"
        ></script>
      </Head>
      <Navbar />
      <div className="home-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <SideMenu appName={"Wut Movie?"} />
            </div>

            <div className="col-lg-9">
              <Carosel />

              <div className="row">
                <MovieComponent movies={initialMovieList}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <style jsx>
        {`
          .home-page {
            padding-top: 80px;
          }
        `}
      </style>
    </div>
  );
}
