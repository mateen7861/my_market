import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import CartCard from "../../components/CartCard";
const Index = () => {
  const [data, setData]: any = useState();

  const data1 = useSelector((state: any) => state.cart.cart);
  useEffect(() => {
    setData(data1);
  });
  return (
    <div>
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
  );
};

export default Index;
