import React, { useEffect, useState } from "react";
import Head from "next/head";
import Navbar from "../components/navbar";
import SideMenu from "../components/sideMenu";
import Carosel from "../components/carosel";
import MovieComponent from "../components/movieComponent";
import CaroselTv from "../components/caroseltv";
import Footer from "../components/footer.js";
import { useStateValue } from "../state/stateProvider";

const urlInitalList = `https://api.themoviedb.org/4/list/${1}?page=${1}&api_key=${
  process.env.NEXT_PUBLIC_MDB_API_KEY
}`;
const weekTrendingUrl = `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.NEXT_PUBLIC_MDB_API_KEY}`;
const weekTrendingTvUrl = `https://api.themoviedb.org/3/trending/tv/week?api_key=${process.env.NEXT_PUBLIC_MDB_API_KEY}`;

export async function getStaticProps() {
  const movieList = await fetch(urlInitalList);
  const data = await movieList.json();
  const initialMovieList = data.results;
  const weekTrendingFetch = await fetch(weekTrendingUrl);
  const weekTrendingList = await weekTrendingFetch.json();
  const weekTrendingMovies = weekTrendingList.results;
  const weekTrendingTvFetch = await fetch(weekTrendingTvUrl);
  const weekTrendingTvList = await weekTrendingTvFetch.json();
  const weekTrendingTv = weekTrendingTvList.results;

  if (!weekTrendingFetch) {
    return {
      weeklyNotfound: true,
    };
  }
  if (!weekTrendingTvFetch) {
    return {
      weeklyNotfound: true,
    };
  }

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { initialMovieList, weekTrendingMovies, weekTrendingTv }, // will be passed to the page component as props
  };
}

export default function Home({
  initialMovieList,
  weekTrendingMovies,
  weekTrendingTv,
}) {
  const [{ initalMovies, dayilTrending }, dispatch] = useStateValue();
  console.log();
  useEffect(() => {
    dispatch({
      type: "GET_INITAL_LIST",
      payload: initialMovieList,
    });
    dispatch({
      type: "GET_TRENDING_WEEKLY",
      payload: weekTrendingMovies,
    });

    dispatch({
      type: "GET_TRENDING_WEEKLY_TV",
      payload: weekTrendingTv,
    });
  }, []);

  return (
    <div>
      <Head>
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
        <div className="container-fluid">
          <div className="row">
            <div className="side-menu-container col-lg-3">
              <SideMenu />
            </div>

            <div className="col-lg-3">
              <Carosel />
            </div>
            <div className="col-lg-3">
              <CaroselTv />
            </div>

            <div className=" row">
              <MovieComponent movies={initialMovieList} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <style jsx>
        {`
          .home-page {
            background-color: #121212;
            padding-top: 80px;
          }
          .
        `}
      </style>
    </div>
  );
}
