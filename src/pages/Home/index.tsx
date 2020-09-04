import React, { useState } from "react";
import { IconButton } from "@material-ui/core";
import styles from "./Home.module.css";
import { Smartphones } from "../../components/Products";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import ProductCard from "../../components/ProductCard";
const Home = () => {
  const [data, setData] = useState<any>();
  setData();
  console.log(Object.entries(Smartphones));
  return (
    <div className={styles.home}>
      <header className={styles.home__header}>
        <h1 className={styles.home__title1}>My</h1>
        <h1 className={styles.home__title2}>Market</h1>
      </header>
      <div className={styles.home__search}>
        <IconButton>
          <SearchRoundedIcon style={{ color: "grey" }} />
        </IconButton>
        <input type="text" placeholder="Type here to search" />
      </div>
      <br />

      {Smartphones.map(
        ({ title, imageUrl, brand, description, price, storage }, index) => (
          <div key={index}>
            <ProductCard
              title={title}
              description={description}
              imageUrl={imageUrl}
              brand={brand}
              price={price}
              storage={storage}
            />
          </div>
        )
      )}
      <br />
      <br />
      <br />
    </div>
  );
};

export default Home;
