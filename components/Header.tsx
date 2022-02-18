import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../styles/Header.module.css";

import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";
import { signOut } from "next-auth/react";

const Header: React.FC = () => {
  const [darkBackground, setDarkBackground] = useState<boolean>(false);

  useEffect(() => {
    if (window !== undefined) {
      document.addEventListener("scroll", () => {
        setDarkBackground(window.scrollY > 100);
      });
    }
  }, []);

  return (
    <div
      className={`${styles.headerWrapper} container ${
        darkBackground ? styles.dark : ""
      }`}
    >
      <header className={styles.header}>
        <div className={styles.left}>
          <img
            className={styles.logo}
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          />
          <ul>
            <li className={styles.active}>Home</li>

            <li>TV Shows</li>
            <li>Movies</li>
            <li>Recently Added</li>
            <li>My List</li>
          </ul>
        </div>
        <div className={styles.right}>
          <SearchIcon />
          {/* <Link href="/home">KIDS</Link>
          <Link href="/home">DVD</Link> */}
          <NotificationsIcon />
          {/* <div className={styles.profile}>
          <img src="https://scontent.fcai21-3.fna.fbcdn.net/v/t39.30808-1/s320x320/273281161_3153911598161695_3361964561094897906_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=7206a8&_nc_ohc=ac_GwtuptygAX83_EBU&_nc_ht=scontent.fcai21-3.fna&oh=00_AT8ocPCniOr5YgsKnXSeyQu-K9tyPAkwHLfeF_ouZA3Y-w&oe=6206E509" />
        </div> */}
          <Avatar
            alt="profile"
            src="https://scontent.fcai21-3.fna.fbcdn.net/v/t39.30808-1/273281161_3153911598161695_3361964561094897906_n.jpg?stp=dst-jpg_s320x320&_nc_cat=105&ccb=1-5&_nc_sid=7206a8&_nc_ohc=iqokyTnYPvkAX-v9e9A&_nc_ht=scontent.fcai21-3.fna&oh=00_AT9kUkC6AGYg5KjCSseBP1MRufXmjjb-MB3SOuJ4KXSMMA&oe=62144429"
            onClick={() => signOut()}
            style={{ cursor: "pointer" }}
          />
        </div>
      </header>
    </div>
  );
};

export default Header;
