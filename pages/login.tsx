import React from "react";
import type { NextPage } from "next";
import styles from "../styles/Login.module.css";

import { Button } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { signIn } from "next-auth/react";

const Login: NextPage = () => {
  return (
    <div className={styles.backgroundCover + " container"}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <img
            className={styles.logo}
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          />
          <div>
            <Select
              value={"en"}
              // onChange={handleChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value={"en"}>ENGLISH</MenuItem>
              <MenuItem value={"ar"}>ARABIC</MenuItem>
            </Select>
            <Button
              variant="contained"
              onClick={() => signIn("google", { callbackUrl: "/" })}
            >
              Sign in
            </Button>
          </div>
        </div>

        <div className={styles.storyCard}>
          <h1 className={styles.title}>
            Unlimited movies, TV shows, and more.
          </h1>
          <h2 className={styles.subtitle}>Watch anywhere. Cancel anytime</h2>
          <h3 className={styles.disclaimer}>
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>
          <div className={styles.form}>
            <input type="text" placeholder="Email address" />
            <Button variant="contained">Get started</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
