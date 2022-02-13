import React from "react";
import styles from "../styles/Card.module.css";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Card: React.FC = () => {
  return (
    <div className={styles.card}>
      <div className={styles.thumbnail}>
        <img src="https://image.tmdb.org/t/p/original/3G1Q5xF40HkUBJXxt2DQgQzKTp5.jpg" />
      </div>
      <div className={styles.details}>
        <div className={styles.actionRow}>
          <div className={styles.left}>
            <div className={`${styles.actionBtn} ${styles.playBtn}`}>
              <PlayArrowIcon />
            </div>
            <div className={styles.actionBtn}>
              <AddIcon />
            </div>
            <div className={styles.actionBtn}>
              <ThumbUpOutlinedIcon />
            </div>
            <div className={styles.actionBtn}>
              <ThumbDownOutlinedIcon />
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.actionBtn}>
              <KeyboardArrowDownIcon />
            </div>
          </div>
        </div>
        <p className={styles.title}>The Ice Age Adventures Of Buck Wild</p>
        <p className={styles.matching}>74% Match</p>
        <div className={styles.genre}>
          <ul>
            <li>Adventure</li>
            <li>Animation</li>
            <li>Comedy</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
