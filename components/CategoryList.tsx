import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "../styles/CategoryList.module.css";
import Card from "./Card";

interface Props {
  // title: String;
  genere: any;
}

const CategoryList: React.FC<Props> = ({ genere }) => {
  const [moviesList, setMoviesList] = useState<any>();

  useEffect(() => {
    if (genere) {
      axios
        .get(
          "https://api.themoviedb.org/3/discover/movie?api_key=429f8c8585f3588d3a8a235df2f63819&with_genres=" +
            genere.id
        )
        .then((result) => {
          setMoviesList(result.data.results);
        });
    }
  }, []);

  return (
    <>
      {moviesList && (
        <div className={styles.categoryList}>
          <h2 className={styles.title}>{genere.name}</h2>
          <div className={styles.cardContainer}>
            {moviesList.map((movie: any) => (
              <Card
                key={movie.id}
                longCard={genere.id === 10770}
                title={movie.title}
                imgSrc={
                  genere.id === 10770 ? movie.poster_path : movie.backdrop_path
                }
                generes={movie.genre_ids}
                voteAverage={movie.vote_average}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default CategoryList;
