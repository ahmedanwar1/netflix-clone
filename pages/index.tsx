import React, { useState } from "react";

import type { NextPage } from "next";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Browse from "../components/Browse";
import axios from "axios";
import Footer from "../components/Footer";
import Modal from "../components/Modal";
import Head from "next/head";

interface Props {
  trendingMovies: any;
}

const Index: NextPage<Props> = ({ trendingMovies }) => {
  return (
    <>
      <Head>
        <title>Netflix</title>
        <meta name="description" content="netflix clone website" />
        <link rel="icon" href="/netflix_PNG8.png" />
      </Head>
      <Modal />
      <Header />
      <Banner trendingMovies={trendingMovies} />
      <Browse />
      <Footer />
    </>
  );
};

export default Index;

export const getServerSideProps = async () => {
  const trendingMovies = await axios.get(
    // `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.TMDB_API_KEY}`
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_API_KEY}&with_genres=16`
  );

  return {
    props: {
      trendingMovies: trendingMovies.data,
    },
  };
};
