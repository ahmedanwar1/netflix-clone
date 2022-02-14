import React from "react";

import type { NextPage } from "next";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Browse from "../components/Browse";
import axios from "axios";
import Footer from "../components/Footer";

interface Props {
  trendingMovies: any;
}

const home: NextPage<Props> = ({ trendingMovies }) => {
  return (
    <>
      <Header />
      <Banner trendingMovies={trendingMovies} />
      <Browse />
      <Footer />
    </>
  );
};

export default home;

export const getStaticProps = async () => {
  const trendingMovies = await axios.get(
    "https://api.themoviedb.org/3/trending/all/week?api_key=429f8c8585f3588d3a8a235df2f63819"
  );

  return {
    props: {
      trendingMovies: trendingMovies.data,
    },
  };
};
