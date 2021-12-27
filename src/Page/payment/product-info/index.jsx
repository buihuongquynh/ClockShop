/* eslint-disable react-hooks/exhaustive-deps */
import React,{useEffect} from "react";
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { getMan } from '../../../state/actions';

function Home({data}) {
  return (
    <div className="product_info">
                <div className="product_info_item">
                  <div className="product_img">
                    <img src={data.img} />
                  </div>
                  <div className="product_detail">
                    <p className="product_name">{data.name}</p>
                    <p className="product_subName">{data.trademark}</p>
                  </div>
                  <div className="product_price">
                    <p className="product_price_discount">{data.price}</p>
                    <p className="product_price_original">{data.oldPrice}</p>
                  </div>
                </div>
              </div>
  );
}
export default Home;
