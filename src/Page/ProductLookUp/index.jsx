/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { getMan, getInfo } from "../../state/actions";
import { useParams } from "react-router-dom";

import Item from "../../components/item";
function Look() {
    const param = useParams();
  const dispatch = useDispatch();
  const listProductMan = useSelector((state) => state.getMan.data);
  const listInfo = useSelector((state) => state.getInfo.data);
  const [dataTable, setDataTable] = useState(listProductMan);
  const [dataIf,setDataIf] = useState(null)
  useEffect(() => {
    dispatch(getMan());
    dispatch(getInfo());
  am()
  }, [listInfo]);
  const am = ()=>{
    const a = listInfo
    const result =a&& a.filter((item) =>
    item.phone_number.includes(param.id)
    );
    setDataIf(result&& result[0]);
  }
  return (
    <div className="productLookUP">
       <div className="row">
           <div className="col-md-6">
                <div className="info">
                    <p>{dataIf && dataIf.fullname}</p>
                    <p>{dataIf && dataIf.email}</p>
                    <p>{dataIf && dataIf.address}</p>
                    <p>{dataIf && dataIf.phone_number}</p>
                </div>
           </div>
           <div className="col-md-6">
                <div className="pro">

                </div>
           </div>
       </div>
    </div>
  );
}
export default Look;
