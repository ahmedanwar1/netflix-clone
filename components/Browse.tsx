import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/Browse.module.css";
import CategoryList from "./CategoryList";
import { addGenres } from "../store/genresSlice";
import { IGenre, TGenresList } from "../types";

const Browse: React.FC = () => {
  const [genresList, setGenresList] = useState<TGenresList>();
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(`/api/movies/genres`).then((result) => {
      setGenresList(result.data.genres);
      dispatch(addGenres(result.data.genres));
    });
  }, []);

  return (
    <div className={styles.browse}>
      {genresList &&
        genresList.map((genre: IGenre) => {
          return <CategoryList genre={genre} key={genre.id.toString()} />;
        })}
    </div>
  );
};

export default Browse;
