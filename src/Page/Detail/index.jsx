import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import "./style.css";
import { getDetail } from '../../state/actions';
import { useParams } from "react-router-dom";
import "./style.css";
function Detail() {
  const param = useParams();
  const dispatch = useDispatch();
  const dataDetail = useSelector((state) => state.getDetail.data);
  console.log(dataDetail,"data")
  useEffect(() => {
    dispatch(getDetail(param.id));
  }, [])

  return (
    <div className="Detail">
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-5">
          <img
            src="https://curnonwatch.com/_next/image?url=https%3A%2F%2Fshop.curnonwatch.com%2Fmedia%2Fcatalog%2Fproduct%2Fs%2Ft%2Fsterling_2.jpg&w=640&q=75"
            alt=""
          />
        </div>
        <div className="col-md-3">
          <div className="card">
            <p className="colo">COLOSSEUM</p>
            <div className="name">STERLING</div>
            <div className="price mb-4">
              <p className="order">1000 d</p>
              <strike letter className="old ml-1">
                88888
              </strike>
            </div>
            <div className="status">
              tình trạng: <span style={{color:"rgb(59, 177, 0)"}} className="st">còn Hàng</span> 
            </div>
            <p><span style={{color:"red"}}>GIẢM 20%</span> CHO VÒNG TAY MUA KÈM:</p>
            <div className="group__button mt-10">
              <button className="payment">THANH TOÁN NGAY</button>
              <br/>
              <button className="ADD__CART mt-3">THÊM VÀO GIỎ HÀNG</button>
            </div>
          </div>
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
  );
}
export default Detail;
