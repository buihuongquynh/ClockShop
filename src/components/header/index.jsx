import React, { useState,useRef,useEffect } from "react";
import "./style.css";
import {useHistory } from 'react-router-dom';
import { Popover } from 'antd';
import {
  BarChartOutlined,
  FileOutlined,
  FileProtectOutlined,
  HomeOutlined,
  MenuOutlined,
  TableOutlined,
  SearchOutlined,
} from '@ant-design/icons'
import { Layout, Menu, Avatar, Input, Tooltip } from 'antd'
import Logo from "./logo1.png"
import ListMyOrder from "../listMyOrder"
const Header = () => {
  const ref = useRef()
  const [show, setShow] = useState(false)
  const history = useHistory();
  const [showSearchIcon, setShowSearchIcon] = useState(true)
  const onClick = () => {
    setShow(!show)
    setShowSearchIcon(!showSearchIcon)
  }
  const onEnter = (e) => {
    if (e.key === 'Enter') {
      history.push({ pathname: `/productLookup/${e.target.value}` });
    }
  }
  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) {
        // console.log(ref.current, event.target)
        return
      }
      // console.log(ref)

      setShow(false)
      setShowSearchIcon(true)
    }

    document.body.addEventListener('click', onBodyClick, { capture: true })
    return () => {
      document.body.removeEventListener('click', onBodyClick, {
        capture: true,
      })
    }
  }, [])
  return (
    <div className="header">
     <div className="header__left">
      <ul>
        <li>Nam giới</li>
        <li>Nữ giới</li>
        <li>Về curnon</li>
      </ul>
     </div>
     <div onClick={() => {
        history.push({ pathname: `/` });
      }} className="header__center">
      <img style={{width:'170px', height:"70px"}} src="https://tse4.mm.bing.net/th?id=OIP.6EWoZ_VgxyijiQwamWBD1gHaCX&pid=Api&P=0&w=535&h=172" alt="" />
     </div>
     <div className="header__rignt flex items-center">
     <Popover placement="bottom" content={<ListMyOrder/>} trigger="click">
     <div style={{cursor: "pointer"}} className="flex items-center">
     <span>Giỏ hàng</span>
      <img style={{width:'30px', height:'30px'}} src={Logo} alt="logo" />
     </div>
      </Popover>
      <span className="queue-demo">
                {showSearchIcon && (
                  <a className="hv-icon" onClick={onClick}>
                    <SearchOutlined style={{ marginLeft: '4px', fontSize: '30px' }} />
                  </a>
                )}

                <span ref={ref}>
                  {show ? (
                    <Input
                      style={{
                        width: '200px',
                        height: '40px',
                      }}
                      name="name"
                      className="no-border"
                      placeholder="Std"
                      bordered
                      autoComplete="off"
                      onKeyPress={onEnter}
                    />
                  ) : null}
                </span>
              </span>
     </div>
    </div>
  );
};

export default Header;
