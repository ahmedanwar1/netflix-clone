import React from "react";
import styles from "../styles/Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p>All right reserved &copy; {new Date().getFullYear()} | Ahmed Anwar </p>
    </footer>
  );
};

export default Footer;
