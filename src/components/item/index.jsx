// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import "./style.css";
import { useHistory } from "react-router-dom";
const Item = ({ record }) => {
  const history = useHistory();
  console.log(record,"recod")
  return (
    <div
      onClick={() => {
        history.push({ pathname: `/detail/${record.id}` });
      }}
      className="item"
    >
      <div className="item__center">
        <img src={record.img} alt="/" />
        <a href="/" className="add__cart">
          Thêm vào giỏ hàng
        </a>
        <p className="mt-3">{record.name}</p>

        <p>{record.trademark}</p>
        <div className="price mb-4">
          <p className="order">{record.price}</p>
          <strike letter className="old ml-1">
            {record.oldPrice}
          </strike>
        </div>
      </div>
    </div>
  );
};
export default Item;
