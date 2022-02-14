import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "../styles/Browse.module.css";
import CategoryList from "./CategoryList";

const Browse: React.FC = () => {
  const [generesList, setGeneresList] = useState<any>();

  useEffect(() => {
    axios
      .get(
        // `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.TMDB_API_KEY}&language=en-US`
        `/api/movies/genres`
      )
      .then((result) => {
        setGeneresList(result.data.genres);
        // console.log(result);
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
