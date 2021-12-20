import React from "react";
import './App.css';
import ListItemMan from '../../components/list-item-man'
import ListItemWomen from '../../components/list-item-women'
import Banner from '../../components/banner/index'
import { useSelector } from "react-redux";

function Home() {
  const listProductMan = useSelector((state) => state.getMan.data);
  return (
    <div className="home">
     <Banner/>
     <h1 className="title">MEN'S BEST SELLERS</h1>
     <ListItemMan listProductMan = {listProductMan}/>
     <h1 className="title">WOMEN'S BEST SELLERS</h1>
     <ListItemWomen listProductWoman = {listProductMan}/>
    </div>
  );
}
export default Home;
