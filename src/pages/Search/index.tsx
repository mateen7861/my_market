import React, { useState, useEffect } from "react";
import { IconButton } from "@material-ui/core";
import styles from "../Home/Home.module.css";
import { Smartphones } from "../../components/Products";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import ProductCard from "../../components/ProductCard";
const Home = () => {
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData]: any = useState([]);

  useEffect(() => {
    setFilteredData(
      Smartphones.filter((smartphone) =>
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
      {console.log(filteredData)}

      {filteredData.length !== 0 ? (
        filteredData.map(
          (
            { title, imageUrl, brand, description, price, storage }: any,
            index: any
          ) => (
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
