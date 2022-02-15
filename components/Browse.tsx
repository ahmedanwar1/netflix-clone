import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "../styles/Browse.module.css";
import CategoryList from "./CategoryList";

const Browse: React.FC = () => {
  const [genresList, setGenresList] = useState<any>();

  useEffect(() => {
    axios
      .get(
        // `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.TMDB_API_KEY}&language=en-US`
        `/api/movies/genres`
      )
      .then((result) => {
        setGenresList(result.data.genres);
        // console.log(result);
      });
  }, []);

  return (
    <div className={styles.browse}>
      {genresList &&
        genresList.map((genre: any) => {
          return <CategoryList genre={genre} key={genre.id} />;
        })}
    </div>
  );
};

export default Browse;
