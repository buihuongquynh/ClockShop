import React,{useEffect, useState} from "react";
import './style.css';
function NavDetail({data}) {
  return (
    <div className="NavDetail">
      <ul className="flex items-center	">
          <li>Coins: <span>10213</span></li>
          <li>Exchanges: <span>517</span></li>
          <li>Market Cap: <span>7,622,324,881,477.167 XLM 0.1%</span></li>
          <li>24h Vol:<span>423,486,489,562.362 XLM</span></li>
          <li>Dominance <span>BTC 42.4%</span></li>
          <li>ETH Gas: <span> 212 gwei</span></li>
      </ul>
    </div>
  );
}
export default NavDetail;
