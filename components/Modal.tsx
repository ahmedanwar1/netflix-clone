import React, { useState, Dispatch, SetStateAction, useEffect } from "react";
import styles from "../styles/Modal.module.css";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";
import axios from "axios";

interface Props {
  // toggleModalHandler: (state: Boolean) => void;
  toggleModalHandler: any;
  movieID: Number;
}

const Modal: React.FC<Props> = ({ toggleModalHandler, movieID }) => {
  const [movieData, setMovieData] = useState<any>();

  useEffect(() => {
    axios.get(`/api/movies/get_movie?movie_id=${movieID}`).then((result) => {
      setMovieData(result.data);
      // console.log(result.data);
    });
  }, []);

  return (
    <>
      {movieData && (
        <div className={styles.modalContainer}>
          <div className={styles.modal}>
            <div className={styles.spotLight}>
              <img
                src={`https://image.tmdb.org/t/p/original/${movieData.backdrop_path}`}
                alt=""
              />
              <Button
                className={styles.closeBtn}
                onClick={() => toggleModalHandler(false)}
              >
                <CloseIcon />
              </Button>
            </div>
            <div className={styles.details}>
              <div className={styles.title}>{movieData.title}</div>
              <div className={styles.actionRow}>
                <Button variant="contained">
                  <PlayArrowIcon /> Play
                </Button>
                <div className="actionBtn">
                  <AddIcon />
                </div>

                <div className="actionBtn">
                  <ThumbUpOutlinedIcon />
                </div>
                <div className="actionBtn">
                  <ThumbDownOutlinedIcon />
                </div>
              </div>

              <p className={styles.rating}>
                Rating: {movieData.vote_average} of 10
              </p>
              <div className={styles.overview}>
                <p className={styles.text}>{movieData.overview}</p>
                <div className={styles.genre}>
                  <h4>Genres: </h4>
                  {movieData.genres?.map((genere: any) => (
                    <span key={genere.id}>{genere.name}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div
            className={styles.modalOverlay}
            onClick={() => toggleModalHandler(false)}
          ></div>
        </div>
      )}
    </>
  );
};

export default Modal;
