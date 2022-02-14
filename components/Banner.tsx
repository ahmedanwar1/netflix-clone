import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import styles from "../styles/Banner.module.css";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

// type results = [
//   {
//     poster_path: String;
//   }
// ];

interface Props {
  trendingMovies: any;
}

const Banner: React.FC<Props> = ({ trendingMovies }) => {
  const [spotLightMovie, setSpotLightMovie] = useState<any>();

  const SpotLightMovieSetter = () => {
    const ranNum = Math.floor(Math.random() * trendingMovies.results.length);
    setSpotLightMovie(trendingMovies.results[ranNum]);
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
              <Button variant="contained">
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
