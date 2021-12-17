import React, { useState } from "react";
import Drop from "../drops/Drop";
import "./style.css";
import {useHistory } from 'react-router-dom';
const Header = () => {
  return (
    <div className="header">
     <div className="header__left">
      <ul>
        <li>Nam giới</li>
        <li>Nữ giới</li>
        <li>Về curnon</li>
      </ul>
     </div>
     <div className="header__center">
      <img style={{width:'170px', height:"70px"}} src="https://tse4.mm.bing.net/th?id=OIP.6EWoZ_VgxyijiQwamWBD1gHaCX&pid=Api&P=0&w=535&h=172" alt="" />
     </div>
     <div className="header__rignt flex items-center">
       <span>Giỏ hàng</span>
      <img style={{width:'30px', height:'30px'}} src="https://tse2.mm.bing.net/th?id=OIP.W7RIqUpb4s2JM86eZ3P5FQHaHa&pid=Api&P=0&w=300&h=300" alt="" />
      <img style={{width:'30px', height:'30px'}} src="https://tse4.mm.bing.net/th?id=OIP.U1862UtWoELQq3cRrWOEYAHaHa&pid=Api&P=0&w=300&h=300" alt="" />
     </div>
    </div>
  );
};

export default Header;
