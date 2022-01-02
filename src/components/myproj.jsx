// import { Data } from "./api";
import { MoackApi } from "./api";
import { useEffect, useState } from "react";
import "./style.scss";

export const TestingApi = () => {
  const [imgs, setImgs] = useState([]);

  const dataResponse = async () => {
    const data = await MoackApi.getProductsData();
    setImgs(data);
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

  const renderItems = () => {
    return imgs.map((item) => {
      return (
        <div key={item.id} className="cart">
          <img
            onMouseEnter={(e) => hoverImgIn(e.target, item.backImg)}
            onMouseLeave={(e) => hoverImgOut(e.target, item.frontImg)}
            // onMouseEnter={(e) => setIsHover(!isHover)}
            // onMouseLeave={(e) => setIsHover(!isHover)}
            src={item.frontImg}
            alt="skate"
          />
          <p>{item.brand}</p>
          <p>Size : {item.size}</p>
          <p>Price : ${item.price}</p>
          <br />
        </div>
      );
    });
  };

  return (
    <div>
      {renderItems()}
      <button onClick={() => console.log("imgs")}>click</button>
    </div>
  );
};
