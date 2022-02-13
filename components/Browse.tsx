import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "../styles/Browse.module.css";
import Card from "./Card";
import CategoryList from "./CategoryList";

const Browse: React.FC = () => {
  const [generesList, setGeneresList] = useState<any>();

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=429f8c8585f3588d3a8a235df2f63819&language=en-US"
      )
      .then((result) => {
        setGeneresList(result.data.genres);
      });
  }, []);

  return (
    <div className={styles.browse}>
      {generesList &&
        generesList.map((genere: any) => {
          return <CategoryList genere={genere} key={genere.id} />;
        })}
    </div>
  );
};

export default Browse;
