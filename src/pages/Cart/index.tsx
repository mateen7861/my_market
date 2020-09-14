import React, { useState, useEffect, FC } from "react";
import { useSelector } from "react-redux";
import CartCard from "../../components/CartCard";
import { Smartphone } from "../../components/Products";
import styles from "./Cart.module.css";
const Index: FC = () => {
  const [data, setData] = useState<Smartphone[]>([]);
  const CartData: Smartphone[] = useSelector((state: any) => state.cart.cart);
  useEffect(() => {
    setData(CartData);
  });
  return data?.length ? (
    <div className={styles.cart}>
      <div className={styles.cart__product}>
        {data?.map(
          (
            {
              title,
              id,
              price,
              brand,
              imageUrl,
              storage,
              camera,
              ram,
              battery,
              color,
              description,
            }: Smartphone,
            index: number
          ) => (
            <div key={index}>
              <CartCard
                title={title}
                id={id}
                price={price}
                brand={brand}
                imageUrl={imageUrl}
                storage={storage}
                ram={ram}
                description={description}
                battery={battery}
                camera={camera}
                color={color}
              />
            </div>
          )
        )}
      </div>
      <div className={styles.cart__details}>
        <h2>
          Payment <span>Details</span>
        </h2>
        <h3>
          Total Items : <span style={{ color: "orange" }}> {data?.length}</span>
        </h3>
        <h3>
          Total Price :{" "}
          <span style={{ color: "orange" }}>
            $
            {data?.reduce(
              (amount: number, item: Smartphone) => item.price + amount,
              0
            )}
          </span>{" "}
        </h3>
      </div>
    </div>
  ) : (
    <h1>Cart is empty</h1>
  );
};

export default Index;
