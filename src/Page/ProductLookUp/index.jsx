/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { getMan } from "../../state/actions";
import Item from "../../components/item";
import {
  Table,
  Button,
  Slider,
  DatePicker,
  Input,
  Empty,
  Select,
  Tooltip,
  Space,
  Modal,
  notification,
  Popover,
} from "antd";
import {
  SearchOutlined,
  FilterOutlined,
  EditTwoTone,
  DeleteTwoTone,
  ExclamationCircleOutlined,
  CheckCircleTwoTone,
} from "@ant-design/icons";
function Home() {
  const dispatch = useDispatch();
  const listProductMan = useSelector((state) => state.getMan.data);
  const [dataTable, setDataTable] = useState(listProductMan);
  useEffect(() => {
    dispatch(getMan());
    setDataTable(listProductMan);
  }, [listProductMan]);
  const onSearch = (e) => {
    const result = listProductMan.filter((item) =>
      item.name.toLowerCase().includes(e.target.value)
    );
    setDataTable(result);
  };
  return (
    <div className="productLookUP">
     
    </div>
  );
}
export default Home;
