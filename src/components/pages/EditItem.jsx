import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { MoackApi } from "../api";
import axios from "axios";

export const EditItem = (props) => {
  const { id } = useParams();

  const getItemById = async () => {
    const { data } = await axios.get(
      "https://61cb633c194ffe0017788d2e.mockapi.io/skate/" + id
    );
    props.setEditItem({
      ...props.editItem,
      brand: data.brand,
      frontImg: data.frontImg,
      backImg: data.backImg,
      price: data.price,
      quantity: data.quantity,
      size: data.size,
      id: id,
    });
  };

  useEffect(() => {
    getItemById();
  }, []);

  return (
    <div>
      <div className="field">
        <label htmlFor="brand">Brand</label>
        <input
          type="text"
          name="brand"
          value={props.editItem.brand}
          onChange={(e) =>
            props.setEditItem({ ...props.editItem, brand: e.target.value })
          }
        />
      </div>
    </div>
  );
};
