import React from "react";
import styles from "../styles/ItemDetailsSection.module.css";

interface Props {
  itemID: Number | undefined;
}

const ItemDetailsSection: React.FC<Props> = ({ itemID }) => {
  return (
    <>
      {itemID && (
        <div className={styles.itemDetailsSection}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/GGe_h2MWMrs"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </>
  );
};

export default ItemDetailsSection;
