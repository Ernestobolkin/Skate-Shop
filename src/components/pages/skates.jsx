import { MoackApi } from "../api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./pagesStyle/skate.style.scss";

export const SkatePage = (props) => {
  const dataResponse = async () => {
    const data = await MoackApi.getProductsData();
    props.setData(data);
  };

  useEffect(() => {
    dataResponse();
  }, []);

  const hoverImgIn = (e, backImg) => {
    e.src = backImg;
  };

  const hoverImgOut = (e, frontImg) => {
    e.src = frontImg;
  };

  const addToCart = (id, brand, img, price, quantity, size) => {
    props.setCartCounter(props.cartCounter + 1);
    let tempArr = [];
    let bool = props.cartCheck.findIndex((item) => {
      return item.id === id;
    });
    if (props.cartCheck.length === 0 || bool === -1) {
      quantity = quantity + 1;
      tempArr.push({ id, brand, img, price, quantity, size });
      props.setCartCheck([...props.cartCheck, ...tempArr]);
    } else {
      tempArr = props.cartCheck.map((item) => {
        if (item.id === id) {
          item.quantity = item.quantity + 1;
          return item;
        } else {
          return item;
        }
      });
      props.setCartCheck([...tempArr]);
    }
    props.setSumToPay(props.sumToPay + +price);
    console.log(props.cartCheck, "the array");
  };

  const deleteItem = async (id) => {
    await MoackApi.deleteItem(id);
    dataResponse();
  };

  const renderItems = () => {
    return props.data.map((item) => {
      return (
        <div key={item.id} className="cart">
          <img
            onMouseEnter={(e) => hoverImgIn(e.target, item.backImg)}
            onMouseLeave={(e) => hoverImgOut(e.target, item.frontImg)}
            src={item.frontImg}
            alt="skate"
          />
          <p className="brand">{item.brand}</p>
          <p>Size : {item.size}</p>
          <p>
            Price : <span>${item.price}</span>
          </p>
          {props.isShownAdmin && (
            <button
              onClick={() =>
                addToCart(
                  item.id,
                  item.brand,
                  item.frontImg,
                  item.price,
                  item.quantity,
                  item.size
                )
              }
            >
              Add To Cart
            </button>
          )}
          {/* {!props.isShownAdmin && renderRemoveBtn} */}
          {!props.isShownAdmin && (
            <button onClick={() => deleteItem(item.id)}>Delete</button>
          )}
          {!props.isShownAdmin && (
            <Link to={`/skate/edit/${item.id}`}>
              <button>Edit</button>
            </Link>
          )}
        </div>
      );
    });
  };

  const renderButtonAdd = () => {
    return (
      <Link to="/skate/AddItem">
        <button className="addItem">Add Item</button>
      </Link>
    );
  };

  return (
    <div className="wrapper">
      {!props.isShownAdmin && renderButtonAdd()}
      <div className="skate-container">{renderItems()}</div>
    </div>
  );
};
