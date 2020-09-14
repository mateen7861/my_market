import React, { useState, useEffect, FC } from "react";
import { IconButton } from "@material-ui/core";
import styles from "../Home/Home.module.css";
import { Smartphone, Smartphones } from "../../components/Products";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import ProductCard from "../../components/ProductCard";
const Home: FC = () => {
  const [search, setSearch] = useState<string>("");
  const [filteredData, setFilteredData] = useState<Smartphone[]>([]);

  useEffect(() => {
    setFilteredData(
      Smartphones.filter((smartphone: Smartphone) =>
        smartphone.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);
  return (
    <div className={styles.home}>
      <div className={styles.home__search}>
        <IconButton>
          <SearchRoundedIcon style={{ color: "grey" }} />
        </IconButton>
        <input
          type="text"
          placeholder="Type here to search"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <br />

      {filteredData.length !== 0 ? (
        filteredData.map(
          (
            {
              id,
              title,
              imageUrl,
              brand,
              description,
              price,
              storage,
              battery,
              camera,
              ram,
              color,
            }: Smartphone,
            index: number
          ) => (
            <div key={index}>
              <ProductCard
                id={id}
                title={title}
                description={description}
                imageUrl={imageUrl}
                brand={brand}
                price={price}
                storage={storage}
                battery={battery}
                camera={camera}
                ram={ram}
                color={color}
              />
            </div>
          )
        )
      ) : (
        <h1>Not found</h1>
      )}
      <br />
      <br />
      <br />
    </div>
  );
};

export default Home;
