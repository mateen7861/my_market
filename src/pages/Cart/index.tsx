import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import CartCard from "../../components/CartCard";
import styles from "./Cart.module.css";
const Index = () => {
  const [data, setData]: any = useState();
  const data1 = useSelector((state: any) => state.cart.cart);
  useEffect(() => {
    setData(data1);
  });
  return data?.length ? (
    <div className={styles.cart}>
      <div className={styles.cart__product}>
        {data?.map(({ title, id, price, brand, imageUrl, storage }: any) => (
          <CartCard
            title={title}
            id={id}
            price={price}
            brand={brand}
            imageUrl={imageUrl}
            storage={storage}
          />
        ))}
      </div>
      <div className={styles.cart__details}>
        <h2>
          Payment <span>Details</span>
        </h2>
        <h3>
          Total Items :{" "}
          <span style={{ color: "orange" }}> {data1?.length}</span>
        </h3>
        <h3>
          Total Price :{" "}
          <span style={{ color: "orange" }}>
            ${data?.reduce((amount: any, item: any) => item.price + amount, 0)}
          </span>{" "}
        </h3>
      </div>
    </div>
  ) : (
    <h1>Cart is empty</h1>
  );
};

export default Index;
