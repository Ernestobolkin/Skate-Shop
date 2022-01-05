import React, { useEffect } from "react";
import { MoackApi } from "../api";
import { useHistory } from "react-router-dom";

export const AddItem = ({ addItem, setAddItem }) => {
  const history = useHistory();

  const setIdByData = async () => {
    const item = await MoackApi.getProductsData();
    const id = +(item[item.length - 1].id + 1).toString();
    
    setAddItem({ ...addItem, id });
    console.log(addItem);
  };

  const handleOnClick = async () => {
    await MoackApi.AddItem(addItem);
    setAddItem({
      brand: "",
      frontImg: "",
      backImg: "",
      price: null,
      quantity: 0,
      size: null,
      id: "",
    });
    history.push("/skate");
  };

  useEffect(() => {
    setIdByData();
  }, []);
  return (
    <>
      <div className="addItemContainer">
        <div className="field">
          <label htmlFor="brand">Brand</label>
          <input
            type="text"
            name="brand"
            onChange={(e) => setAddItem({ ...addItem, brand: e.target.value })}
          />
        </div>
        <div className="field">
          <label htmlFor="frontImg">Front Image</label>
          <input
            type="text"
            name="frontImg"
            onChange={(e) =>
              setAddItem({ ...addItem, frontImg: e.target.value })
            }
          />
        </div>
        <div className="field">
          <label htmlFor="BackImg">Back Image</label>
          <input
            type="text"
            name="BackImg"
            onChange={(e) =>
              setAddItem({ ...addItem, backImg: e.target.value })
            }
          />
        </div>
        <div className="field">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            name="price"
            onChange={(e) => setAddItem({ ...addItem, price: e.target.value })}
          />
        </div>
        <div className="field">
          <label htmlFor="size">Size</label>
          <input
            type="number"
            name="size"
            onChange={(e) => setAddItem({ ...addItem, size: e.target.value })}
          />
        </div>
        <button
          onClick={() => {
            handleOnClick();
          }}
        >
          Add
        </button>
      </div>
    </>
  );
};
