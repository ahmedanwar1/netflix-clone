import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import styles from "../styles/Banner.module.css";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useDispatch } from "react-redux";
import { addMovieID } from "../store/modalSlice";
import { IMovie, TMovieList } from "../types";

interface Props {
  trendingMovies: TMovieList;
}

const Banner: React.FC<Props> = ({ trendingMovies }) => {
  const dispatch = useDispatch();

  const [spotLightMovie, setSpotLightMovie] = useState<IMovie>();

  const SpotLightMovieSetter = () => {
    const ranNum = Math.floor(Math.random() * trendingMovies.length);
    setSpotLightMovie(trendingMovies[ranNum]);
  };

  useEffect(() => {
    SpotLightMovieSetter();

    setInterval(() => {
      SpotLightMovieSetter();
    }, 60000);
  }, [trendingMovies]);
  return (
    <>
      {spotLightMovie && (
        <div className={styles.banner}>
          <img
            src={`https://image.tmdb.org/t/p/original/${spotLightMovie["backdrop_path"]}`}
            alt=""
          />
          <div className={styles.details}>
            <p className={styles.title}>
              {spotLightMovie?.name || spotLightMovie.title}
            </p>
            <p className={styles.synopsis}>{spotLightMovie?.overview}</p>
            <div className={styles.buttonRow}>
              <Button variant="contained">
                <PlayArrowIcon /> Play
              </Button>
              <Button
                variant="contained"
                onClick={() => dispatch(addMovieID(spotLightMovie.id))}
              >
                <InfoOutlinedIcon /> More info
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Banner;
