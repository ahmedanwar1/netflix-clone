import React from "react";
import styles from "../styles/LongCard.module.css";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const LongCard: React.FC = () => {
  return (
    <div className={styles.longCard}>
      <img src="https://image.tmdb.org/t/p/w500/fFT0IgqtCOks4munDTxQwkvNJkd.jpg" />

      <div className={styles.details}>
        <div className={styles.actionRow}>
          <div className={styles.left}>
            <div className={`${styles.actionBtn} ${styles.playBtn}`}>
              <PlayArrowIcon />
            </div>
            <div className={styles.actionBtn}>
              <AddIcon />
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

export default LongCard;
