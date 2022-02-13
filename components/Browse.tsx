import axios from "axios";
import React, { useEffect } from "react";
import styles from "../styles/Browse.module.css";
import Card from "./Card";
import CategoryList from "./CategoryList";
import LongCard from "./LongCard";

const Browse: React.FC = () => {
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/tv?api_key=429f8c8585f3588d3a8a235df2f63819&language=en-US&sort_by=vote_average.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0"
      )
      .then((result) => result);
  }, []);

  return (
    <div className={styles.browse}>
      <CategoryList title={"Popular On Netflix"}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </CategoryList>
      <CategoryList title={"Exclusive on Netflix"}>
        <LongCard />
        <LongCard />
        <LongCard />
        <LongCard />
        <LongCard />
        <LongCard />
        <LongCard />
        <LongCard />
        <LongCard />
        <LongCard />
        <LongCard />
        <LongCard />
        <LongCard />
      </CategoryList>
      <CategoryList title={"Best On Netflix"}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </CategoryList>
    </div>
  );
};

export default Browse;
