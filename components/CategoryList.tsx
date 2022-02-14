import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "../styles/CategoryList.module.css";
import Card from "./Card";
import ScrollContainer from "react-indiana-drag-scroll";

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
          // `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_API_KEY}&with_genres=${genere.id}`
          `/api/movies/discover?genre_id=${genere.id}`
        )
        .then((result) => {
          console.log(result.data);
          // setMoviesList(result.data.results);
          setMoviesList(result.data);
        });
    }
  }, []);

  return (
    <>
      {moviesList && (
        <div className={styles.categoryList}>
          <h2 className={styles.title}>{genere.name}</h2>
          <ScrollContainer className={styles.cardContainer}>
            {moviesList.map((movie: any) => (
              <Card
                key={movie.id}
                longCard={genere.id === 10770 || genere.id === 99}
                title={movie.title}
                imgSrc={
                  genere.id === 10770 || genere.id === 99
                    ? movie.poster_path
                    : movie.backdrop_path
                }
                generes={movie.genre_ids}
                voteAverage={movie.vote_average}
              />
            ))}
          </ScrollContainer>
        </div>
      )}
    </>
  );
};

export default CategoryList;
