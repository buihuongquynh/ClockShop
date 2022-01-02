/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { getMan, getInfo } from "../../state/actions";
import { useParams } from "react-router-dom";
import Item from "../../components/item";
import ProductInfo from "./product-info"
function Look() {
  const param = useParams();
  const dispatch = useDispatch();
  const listInfo = useSelector((state) => state.getInfo.data);
  const [dataIf, setDataIf] = useState(null);
  useEffect(() => {
    dispatch(getInfo());
  }, [dispatch]);
  const result = listInfo && listInfo.filter((item) => item.phone_number.includes(param.id));
  return (
      result &&
      <div className="productLookUP">
        {
          result.length>0 ? 
          <div className="row">
          <div className="col-md-6">
            <div className="info">
              <div className="if__center">
              <pre>Họ tên:      {result && result[0].fullname}</pre>
              <pre>Email:       {result && result[0].email}</pre>
              <pre>Địa chỉ:     {result && result[0].address}</pre>
              <pre>SDT:         {result && result[0].phone_number}</pre>
              </div>
             
            </div>
          </div>
          <div className="col-md-5">
            <div className="pro">
            {result.length>0 &&
                  result[0].id_product.map((data) => {
                    return <ProductInfo data={data}/>;
                  })}
            </div>
          </div>
        </div>
          : 
          <div className="productLookUP">
          <div className="null">không có user nào khớp với số điện thoại</div>
        </div>
        }
     
  </div>
   
  );
}
export default Look;
