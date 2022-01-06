import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { MoackApi } from "../api";
import axios from "axios";
import { useHistory } from "react-router-dom";

export const EditItem = (props) => {
  const history = useHistory();
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

  const handleOnClick = async () => {
    await MoackApi.updateItem(id, props.editItem);
    history.push("/skate");
  };

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
      <div className="field">
        <label htmlFor="frontImg">Front Image</label>
        <input
          type="text"
          name="frontImg"
          value={props.editItem.frontImg}
          onChange={(e) =>
            props.setEditItem({ ...props.editItem, frontImg: e.target.value })
          }
        />
      </div>
      <div className="field">
        <label htmlFor="backImg">Back Image</label>
        <input
          type="text"
          name="backImg"
          value={props.editItem.backImg}
          onChange={(e) =>
            props.setEditItem({ ...props.editItem, backImg: e.target.value })
          }
        />
      </div>
      <div className="field">
        <label htmlFor="price">Price</label>
        <input
          type="number"
          name="price"
          value={props.editItem.price}
          onChange={(e) =>
            props.setEditItem({ ...props.editItem, price: e.target.value })
          }
        />
      </div>
      <div className="field">
        <label htmlFor="size">Size</label>
        <input
          type="number"
          name="size"
          value={props.editItem.size}
          onChange={(e) =>
            props.setEditItem({ ...props.editItem, size: e.target.value })
          }
        />
      </div>
      <button
        className="btn"
        onClick={() => {
          handleOnClick();
        }}
      >
        Save
      </button>
    </div>
  );
};
