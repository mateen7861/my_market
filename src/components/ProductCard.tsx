import React, { FC } from "react";
import styles from "./ProductCard.module.css";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { ADD } from "../store/cartSlice";

import { Link } from "react-router-dom";
import { Smartphone } from "./Products";
const ProductCard: FC<Smartphone> = ({
  id,
  title,
  description,
  price,
  brand,
  imageUrl,
  storage,
  battery,
  camera,
  color,
  ram,
}) => {
  const dispatch = useDispatch();

  const AddToCart = (): void => {
    dispatch(
      ADD({
        id,
        title,
        description,
        price,
        brand,
        imageUrl,
        storage,
        battery,
        camera,
        color,
        ram,
      })
    );
  };
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
        variant="outlined"
        style={{
          width: "8rem",
          border: "2px solid orange",
          color: "orange",
          textTransform: "capitalize",
        }}
        onClick={AddToCart}
      >
        Add to Cart
      </Button>
      <Link to={`/${id}`} style={{ textDecoration: "none" }}>
        <Button
          variant="contained"
          style={{
            backgroundColor: "orange",
            width: "8rem",
            color: "#fff",
            marginLeft: "1rem",
          }}
        >
          Details
        </Button>
      </Link>
    </div>
  );
};

export default ProductCard;
