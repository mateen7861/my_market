import React from "react";
import styles from "./ProductCard.module.css";
import { Button } from "@material-ui/core";
const ProductCard = ({
  title,
  description,
  price,
  brand,
  imageUrl,
  storage,
}: any) => {
  return (
    <div className={styles.root}>
      <div className={styles.ProductCard}>
        <div className={styles.ProductCard__details}>
          <h2 className={styles.ProductCard__details__title}>{title}</h2>
          <h4 className={styles.ProductCard__details__price}>${price}</h4>
          <p className={styles.ProductCard__details__storage}>{storage}</p>

          <p className={styles.ProductCard__details__desc}>{description}</p>
        </div>
        <div className={styles.ProductCard__image}>
          <img src={imageUrl} alt="" />
        </div>
      </div>
      <Button
        variant="contained"
        style={{ backgroundColor: "#3c6cdf", color: "#fff" }}
      >
        Add to Cart
      </Button>
      <Button
        variant="contained"
        style={{
          backgroundColor: "#3c6cdf",
          color: "#fff",
          marginLeft: "1rem",
        }}
      >
        Details
      </Button>
    </div>
  );
};

export default ProductCard;
