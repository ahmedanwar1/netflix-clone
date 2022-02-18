import React, { useState, Dispatch, SetStateAction, useEffect } from "react";
import styles from "../styles/Modal.module.css";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";
import axios from "axios";
import { addMovieID, setVisibilityToFalse } from "../store/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { AnimatePresence, motion } from "framer-motion";

// interface Props {
//   // toggleModalHandler: (state: Boolean) => void;
//   toggleModalHandler: any;
//   movieID: Number;
// }

const Modal: React.FC = () => {
  const [movieData, setMovieData] = useState<any>();

  const dispatch = useDispatch();

  const movieID = useSelector((state: RootState) => state.modal.movieID);

  // dispatch(addMovieID());

  useEffect(() => {
    if (movieID) {
      axios.get(`/api/movies/get_movie?movie_id=${movieID}`).then((result) => {
        setMovieData(result.data);
        // console.log(result.data);
      });
    } else {
      setMovieData(null);
    }
  }, [movieID]);

  return (
    <AnimatePresence>
      {movieData && (
        <div className={styles.modalContainer}>
          <motion.div
            key="modal"
            initial={{ y: -1000 }}
            animate={{ y: 1 }}
            exit={{ y: 1000 }}
            className={styles.modal}
          >
            <div className={styles.spotLight}>
              <img
                src={`https://image.tmdb.org/t/p/original/${movieData.backdrop_path}`}
                alt=""
              />
              <Button
                className={styles.closeBtn}
                onClick={() => dispatch(setVisibilityToFalse())}
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
          </motion.div>

          <div
            className={styles.modalOverlay}
            onClick={() => dispatch(setVisibilityToFalse())}
          ></div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
