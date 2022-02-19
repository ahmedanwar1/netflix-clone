import React, { useEffect, useState } from "react";
import styles from "../styles/Card.module.css";
import { domAnimation, LazyMotion, motion } from "framer-motion";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Image from "next/image";

import { RootState } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { addMovieID } from "../store/modalSlice";
import { IGenre } from "../types";

interface Props {
  longCard?: Boolean;
  id: Number;
  title: String;
  imgSrc: String;
  genres: Number[];
  voteAverage: Number;
}

const Card: React.FC<Props> = ({
  longCard = false,
  id,
  title,
  imgSrc,
  genres,
  voteAverage,
}) => {
  const dispatch = useDispatch();
  const [imageLoaded, setImageLoaded] = useState<Boolean>(false);
  const genreList = useSelector((state: RootState) => state.genres.genresList);

  const getGenreName = (id: Number): String => {
    let genreName: String = "";
    genreList.forEach((genre: IGenre) => {
      if (genre.id === id) {
        genreName = genre.name;
      }
    });
    return genreName;
  };

  return (
    <>
      <div className={longCard ? styles.longCard : styles.card}>
        {!longCard && (
          <motion.div
            // initial={{ opacity: 0.5, background: "#888" }}
            // animate={{ opacity: 1, background: "none" }}
            className={styles.thumbnail}
          >
            <Image
              src={"https://image.tmdb.org/t/p/w500/" + imgSrc}
              // onClick={() => setToggleModal(true)}
              layout="fill"
              onLoad={() => setImageLoaded(true)}
            />
          </motion.div>
        )}
        {longCard && (
          <Image
            src={"https://image.tmdb.org/t/p/original" + imgSrc}
            // onClick={() => setToggleModal(true)}
            layout="fill"
          />
        )}
        <div className={styles.details}>
          <div className={styles.actionRow}>
            <div className={styles.left}>
              <div className={`actionBtn ${styles.playBtn}`}>
                <PlayArrowIcon />
              </div>
              <div className="actionBtn">
                <AddIcon />
              </div>
              {!longCard && (
                <>
                  <div className="actionBtn">
                    <ThumbUpOutlinedIcon />
                  </div>
                  <div className="actionBtn">
                    <ThumbDownOutlinedIcon />
                  </div>
                </>
              )}
            </div>
            <div className={styles.right}>
              <div
                className="actionBtn"
                onClick={() => dispatch(addMovieID(id))}
              >
                <KeyboardArrowDownIcon />
              </div>
            </div>
          </div>
          <p className={styles.title}>{title}</p>
          <p className={styles.rating}>Rating: {voteAverage} of 10</p>
          <div className={styles.genre}>
            <ul>
              {genreList &&
                genres?.map((genre: Number) => (
                  <li key={genre.toString()}>{getGenreName(genre)}</li>
                ))}
            </ul>
          </div>
        </div>
      </div>
      {/* {toggleModal && (
        <Modal toggleModalHandler={setToggleModal} movieID={id} />
      )} */}
    </>
  );
};

export default Card;
