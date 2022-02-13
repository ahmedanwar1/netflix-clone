import React from "react";
import styles from "../styles/CategoryList.module.css";
import Card from "./Card";
import LongCard from "./LongCard";

interface Props {
  children: React.ReactNode;
  title: String;
}

const CategoryList: React.FC<Props> = ({ children, title }) => {
  return (
    <div className={styles.categoryList}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.cardContainer}>{children}</div>
    </div>
  );
};

export default CategoryList;
