import React, { useEffect, useState } from "react";
import "./style.css";
import { useParams } from "react-router-dom";
import NavDetail from "./NavDetail";
import { Row, Col, List } from "antd";
import axios from "axios";
import {
  ShareAltOutlined,
  NotificationOutlined,
  StarOutlined,
} from "@ant-design/icons";
import "./style.css";
function Detail() {
  const param = useParams();
  const [data, setData] = useState();
  useEffect(() => {
    let mounted = true;
    const fetchApi = async () => {
      try {
        const res = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${param.id}`
        );
        console.log(res.data);
        setData(res.data);
      } catch (error) {
        Error(error.toString());
      }
    };
    if (mounted) fetchApi();
    return () => (mounted = false);
  }, []);
  const dataTB = [
    {
      name: "BNB Price	",
      price: "11.157084 DOT",
    },
    {
      name: "Market Cap	",
      price: "1,875,666,014.059 DOT",
    },
    {
      name: "Market Cap Dominance",
      price: "3.32%",
    },
    {
      name: "Trading Volume",
      price: "51,523,910.425 DOT",
    },
    {
      name: "Volume / Market Cap",
      price: "0.0276",
    },
    {
      name: "24h Low / 24h High",
      price: "10.647166 DOT / 12.245381 DOT",
    },
    {
      name: "7d Low / 7d High",
      price: "10.617799 DOT / 12.753147 DOT",
    },
    {
      name: "Market Cap Rank",
      price: "#3",
    },
    {
      name: "All-Time High",
      price: "25.476169 DOT -56.2%",
    },
    {
      name: "Market Cap	",
      price: "1,875,666,014.059 DOT",
    },
  ];
  const dataNew =[
    {
      img:"https://assets.coingecko.com/article-images/370893.jpg",
      today:"Top Trader Predicts Epic Dogecoin Rally to New All-Time High, Warns Not To Sleep on Binance Coin",
      Title:"The Daily Hodl (1 day ago)",
      des:"A popular crypto strategist and trader expects Dogecoin (DOGE) to pull off a massive rally and warns traders not to sleep on Binance Coin (BNB). Pseudonymous analyst Smart Contracter tells his 176,700 Twitter followers that he sees Dogecoin launching a strong surge to $1.00, marking potential gai.."
    },
    {
      img:"https://assets.coingecko.com/article-images/369300.jpg",
      today:"Tokens.com Launches The First Publicly-Traded Company for DeFi And Metaverse Investments",
      Title:"Forbes (4 days ago)",
      des:"Tokens.com (NEO Exchange Canada: COIN) (Frankfurt Stock Exchange: 76M) (OTCQB US: SMURF) is on a mission to connect public market investors to blockchain investments by investing in DeFi tokens such as BNB and DOT, and NFT-based cryptocurrencies."
    },
    {
      img:"https://assets.coingecko.com/article-images/368972.jpg",
      today:"Blockchain-Powered Food Marketplace, Bistroo, Adds More Crypto Payment Options",
      Title:"NewsBTC (5 days ago)",
      des:"Bistroo, a blockchain-powered takeaway startup, has announced the addition of more crypto payment options, according to a press release on October 28th. This peer-to-peer food ecosystem will now allow merchants to accept payments in Bitcoin (BTC), Ethereum (ETH), Binance Coin (BNB), Litecoin (LTC... "
    },
  ]
  const renderItem = (item) => {
    return (
      <List.Item className="my-2">
       <div className="itemName ">
       <a >{item.name}</a>
       <a>{item.price}</a>
       </div>
      </List.Item>
    );
  };
  const renderItemNew = (item) => {
    return (
      <List.Item >
        <Row className="my-2 items-center">
          <Col span={4}><img src={item.img} alt="" /></Col>
          <Col className="ml-4" span={19}>
            <h1 style={{color: "#8dc647" ,fontSize: "1.25rem" ,lineHeight: "1.75rem"}}>{item.today}</h1>
            <p style={{fontWeight:"600"}}>{item.Title}</p>
             <p style={{fontSize: "13px",
    fontFamily: "-webkit-pictograph"}}>{item.des}</p>
          </Col>
        </Row>
      </List.Item>
    );
  };
  return (
    <div className="Detail text-left">
      <NavDetail data={data} className="mb-5" />
      <Row className="m-10 mt-10">
        <Col span={16}>
          <span className="bg-gray-500 rank">Rank #{data? data.coingecko_rank: null}</span>
          <div className="flex my-5 items-center">
            <img
              style={{ width: "30px", height: "30px" }}
              src={ data? data.image.thumb : null}
            />{" "}
            <div className="flex xlm">
              <span>{data? data.name: null}</span>
              <span className="phantram">0.1%</span>
            </div>{" "}
          </div>
          <ul className="share my-4">
            <li>
              <ShareAltOutlined />
            </li>
            <li>
              <NotificationOutlined />
            </li>
            <li>
              <StarOutlined />
            </li>
          </ul>
          <div style={{marginBottom:"5px", marginTop:"20px"}} className="progress"></div>
          <ul
            style={{ marginBottom:"10px",width: "50%", fontWeight: "600" }}
            className="flex justify-between mt-1"
          >
            <li>160,174.213 XLM</li>
            <li>24H Range</li>
            <li>166,679.463 XLM</li>
          </ul>
          <Row>
            <Col span={12}>
              <ul className="flex flex-col mx-2	wid">
                <li className="flex justify-between	">
                  <span style={{fontWeight:"200", color:"#999999"}} className="item">Market Cap </span>
                  <span className="item">1,875,666,014.059 DOT</span>
                </li>
                <li className="flex justify-between">
                  <div style={{fontWeight:"200", color:"#999999"}} className="item">24 Hour Trading Vol </div>
                  <div className="item">51,523,910.425 DOT</div>
                </li>
                <li className="flex justify-between">
                  <div style={{fontWeight:"200", color:"#999999"}} className="item">Fully Diluted Valuation </div>
                  <div className="item">1,875,666,014.059 DOT</div>
                </li>
              </ul>
            </Col>
            <Col span={12}>
              <ul className="flex flex-col mx-2	wid">
                <li className="flex justify-between">
                  <div style={{fontWeight:"200", color:"#999999"}} className="item">Circulating Supply </div>
                  <div className="item">168,137,035</div>
                </li>
                <li className="flex justify-between">
                  <div style={{fontWeight:"200", color:"#999999"}} className="item">Total Supply </div>
                  <div className="item">168,137,035</div>
                </li>
                <li className="flex justify-between">
                  <div style={{fontWeight:"300", color:"#999"}} className="item">Max Supply </div>
                  <div className="item">168,137,035</div>
                </li>
              </ul>
            </Col>
          </Row>
        </Col>
        <Col span={8}>
          <ul className="ml-7 left">
            <li>Buy/sell</li>
            <li>Long/Short</li>
            <li>Earn/Loan</li>
            <li>Mine</li>
          </ul>
          <h1 className="ml-10">Info</h1>
          <ul className="flex flex-col ml-10">
            <li style={{ width: "100%" }}>
              <Row>
                <Col span={8}>
                  <span style={{fontSize: "13px" ,fontWeight: "600"}}>Website</span>
                </Col>
                <Col span={14}>
                  <span className="sp-button">binance.com</span>
                  
                </Col>
              </Row>
            </li>
            <li style={{ width: "100%" }}>
              <Row>
                <Col span={8}>
                  <span style={{fontSize: "13px" ,fontWeight: "600"}}>Explorers</span>
                </Col>
                <Col span={14}>
                  <span className="sp-button">Mintscan</span>
                  <span className="sp-button">Binance</span>
                  <span className="sp-button">Bscscan</span>
                  <span className="sp-button">Etherscan</span>
                  <span className="sp-button">Ethplorer</span>
                </Col>
              </Row>
            </li>
            <li style={{ width: "100%" }}>
              <Row>
                <Col span={8}>
                  <span style={{fontSize: "13px" ,fontWeight: "600"}}>Wallets</span>
                </Col>
                <Col span={14}>
                  <span className="sp-button">Ledger</span>
                </Col>
              </Row>
            </li>
            <li style={{ width: "100%" }}>
              <Row>
                <Col span={8}>
                  <span style={{fontSize: "13px" ,fontWeight: "600"}}>Community</span>
                </Col>
                <Col span={14}>
                  <span className="sp-button">Reddit</span>
                  <span className="sp-button">Twitter</span>
                  <span className="sp-button">Facebook</span>
                </Col>
              </Row>
            </li>
            <li style={{ width: "100%" }}>
              <Row>
                <Col span={8}>
                  <span style={{fontSize: "13px" ,fontWeight: "600"}}>Source Code</span>
                </Col>
                <Col span={14}>
                  <span className="sp-button">Github</span>
                </Col>
              </Row>
            </li>
            <li style={{ width: "100%" }}>
              <Row>
                <Col span={8}>
                  <span style={{fontSize: "13px" ,fontWeight: "600"}}>API id</span>
                </Col>
                <Col span={14}>
                  <span className="sp-button">binancecoin</span>
                </Col>
              </Row>
            </li>
            <li style={{ width: "100%" }}>
              <Row>
                <Col span={8}>
                  <span style={{fontSize: "13px" ,fontWeight: "600"}}>Tags</span>
                </Col>
                <Col span={14}>
                  <span className="sp-button">Token</span>
                </Col>
              </Row>
            </li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col span={17}>
        <List
           style={{marginBottom:"20px" , marginRight:"20px" , border:"none"}}
            size="large"
            header={<div style={{fontSize: "2rem",
              fontWeight: "700",
              color: "brown"}}>Bitcoin News & Guides</div>}
            bordered
            dataSource={dataNew}
            renderItem={renderItemNew}
          />
        </Col>
        <Col span={7}>
          <List
          style={{marginBottom:"20px",marginRight:"20px", background:"#F3F4F6", border:"none"}}
            size="large"
            header={<div style={{    fontWeight: "700",
              color: "brown"}}>BTC Price and Market Stats</div>}
            bordered
            dataSource={dataTB}
            renderItem={renderItem}
          />
        </Col>
      </Row>
    </div>
  );
}
export default Detail;
