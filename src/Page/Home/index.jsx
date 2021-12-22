/* eslint-disable react-hooks/exhaustive-deps */
import React,{useEffect} from "react";
import './App.css';
import ListItemMan from '../../components/list-item-man'
import ListItemWomen from '../../components/list-item-women'
import Banner from '../../components/banner/index'
import { useDispatch, useSelector } from 'react-redux';
import { getMan } from '../../state/actions';
function Home() {
  const dispatch = useDispatch();
  const listProductMan = useSelector((state) => state.getMan.data);
  useEffect(() => {
    dispatch(getMan());
  }, [])
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
