import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "../styles/CategoryList.module.css";
import Card from "./Card";
import ScrollContainer from "react-indiana-drag-scroll";

interface Props {
  // title: String;
  genre: any;
}

const CategoryList: React.FC<Props> = ({ genre }) => {
  const [moviesList, setMoviesList] = useState<any>();

  useEffect(() => {
    if (genre) {
      axios
        .get(
          // `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_API_KEY}&with_genres=${genere.id}`
          `/api/movies/discover?genre_id=${genre.id}`
        )
        .then((result) => {
          // setMoviesList(result.data.results);
          setMoviesList(result.data);
        });
    }
  }, []);

  return (
    <>
      {moviesList && (
        <div className={styles.categoryList}>
          <h2 className={styles.title}>{genre.name}</h2>
          <ScrollContainer className={styles.cardContainer}>
            {moviesList.map((movie: any) => (
              <Card
                key={movie.id}
                id={movie.id}
                longCard={genre.id === 10770 || genre.id === 99}
                title={movie.title}
                imgSrc={
                  genre.id === 10770 || genre.id === 99
                    ? movie.poster_path
                    : movie.backdrop_path
                }
                genres={movie.genre_ids}
                voteAverage={movie.vote_average}
              />
            ))}
          </ScrollContainer>
          {/* <ItemDetailsSection itemID={selectedMovie} /> */}
        </div>
      )}
    </>
  );
};

export default CategoryList;
