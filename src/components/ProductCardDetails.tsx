import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Smartphones } from "./Products";
const ProductCardDetails = () => {
  const { title } = useParams();
  const [data, setData]: any = useState();
  useEffect(() => {
    const tempData = Smartphones.filter((Smartphone) => {
      return Smartphone.id === Number(title);
    });
    setData(tempData);
  }, [title]);
  data?.map((v: any) => console.log(v.title));
  return <div>{title}</div>;
};

export default ProductCardDetails;
