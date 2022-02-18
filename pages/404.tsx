import { Button } from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import styles from "../styles/404.module.css";
const _404 = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Not found</title>
        <meta name="description" content="netflix clone website" />
        <link rel="icon" href="/netflix_PNG8.png" />
      </Head>
      <img src="/404_error.gif" />
      <Link href="/">
        <Button>Back to home page</Button>
      </Link>
    </div>
  );
};

export default _404;
