import React, { useEffect, useState } from "react";
import styles from "../styles/Card.module.css";
import { motion } from "framer-motion";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Image from "next/image";

import Modal from "./Modal";
import axios from "axios";
import { RootState } from "../store";
import { useSelector } from "react-redux";

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
  const [toggleModal, setToggleModal] = useState<Boolean>(false);
  const genreList = useSelector((state: RootState) => state.genres.genresList);

  const getGenreName = (id: Number): String => {
    let genreName = "";
    genreList.forEach((element: any) => {
      if (element.id === id) {
        genreName = element.name;
      }
    });
    return genreName;
  };

  return (
    <>
      <div className={longCard ? styles.longCard : styles.card}>
        {!longCard && (
          <div className={styles.thumbnail}>
            <Image
              src={"https://image.tmdb.org/t/p/w500/" + imgSrc}
              // onClick={() => setToggleModal(true)}
              layout="fill"
            />
          </div>
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
              <div className="actionBtn" onClick={() => setToggleModal(true)}>
                <KeyboardArrowDownIcon />
              </div>
            </div>
          </div>
          <p className={styles.title}>{title}</p>
          <p className={styles.rating}>Rating: {voteAverage} of 10</p>
          <div className={styles.genre}>
            <ul>
              {genreList &&
                genres?.map((genre: any) => (
                  <li key={genre}>{getGenreName(genre)}</li>
                ))}
            </ul>
          </div>
        </div>
      </div>
      {toggleModal && (
        <Modal toggleModalHandler={setToggleModal} movieID={id} />
      )}
    </>
  );
};

export default Card;
