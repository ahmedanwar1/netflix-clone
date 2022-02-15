import React from "react";
import styles from "../styles/Card.module.css";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

interface Props {
  longCard?: Boolean;
  id: Number;
  title: String;
  imgSrc: String;
  generes: Number[];
  voteAverage: Number;
  SelectMovieHandler: (movieID: Number) => void;
}

const Card: React.FC<Props> = ({
  longCard = false,
  id,
  title,
  imgSrc,
  generes,
  voteAverage,
  SelectMovieHandler,
}) => {
  return (
    <div className={longCard ? styles.longCard : styles.card}>
      {!longCard && (
        <div className={styles.thumbnail}>
          <img
            src={"https://image.tmdb.org/t/p/w500/" + imgSrc}
            onClick={() => SelectMovieHandler(id)}
          />
        </div>
      )}
      {longCard && (
        <img
          src={"https://image.tmdb.org/t/p/original" + imgSrc}
          onClick={() => SelectMovieHandler(id)}
        />
      )}
      <div className={styles.details}>
        <div className={styles.actionRow}>
          <div className={styles.left}>
            <div className={`${styles.actionBtn} ${styles.playBtn}`}>
              <PlayArrowIcon />
            </div>
            <div className={styles.actionBtn}>
              <AddIcon />
            </div>
            {!longCard && (
              <>
                <div className={styles.actionBtn}>
                  <ThumbUpOutlinedIcon />
                </div>
                <div className={styles.actionBtn}>
                  <ThumbDownOutlinedIcon />
                </div>
              </>
            )}
          </div>
          <div className={styles.right}>
            <div className={styles.actionBtn}>
              <KeyboardArrowDownIcon onClick={() => SelectMovieHandler(id)} />
            </div>
          </div>
        </div>
        <p className={styles.title}>{title}</p>
        <p className={styles.rating}>Rating: {voteAverage} of 10</p>
        <div className={styles.genre}>
          <ul>
            {generes?.map((genere: any) => (
              <li key={genere}>{genere}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
