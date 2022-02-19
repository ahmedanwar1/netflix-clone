import React from "react";
import axios from "axios";
import absoluteUrl from "next-absolute-url";

import type { NextPage } from "next";
import { GetServerSideProps } from "next";
import { TMovieList } from "../types";

import Header from "../components/Header";
import Banner from "../components/Banner";
import Browse from "../components/Browse";
import Footer from "../components/Footer";
import Modal from "../components/Modal";
import Head from "next/head";

interface Props {
  trendingMovies: TMovieList;
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { origin } = absoluteUrl(context.req);
  const trendingMovies = await axios.get(`${origin}/api/movies/trending`);

  return {
    props: {
      trendingMovies: trendingMovies.data,
    },
  };
};
