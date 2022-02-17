import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/Browse.module.css";
import CategoryList from "./CategoryList";
import { addGenres } from "../store/genresSlice";
import { RootState } from "../store";

const Browse: React.FC = () => {
  const [genresList, setGenresList] = useState<any>();
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
        genresList.map((genre: any) => {
          return <CategoryList genre={genre} key={genre.id} />;
        })}
    </div>
  );
};

export default Browse;
