import React from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
const Widget = ({ type }) => {
  // STATE
  const [amount, setAmount] = useState(null);
  const [diff, setDiff] = useState(null);
  let data;
  //temporary

  switch (type) {
    case "User":
      data = {
        title: "Users",
        isMoney: false,
        link: "see All Users",
        query:"users",
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="text text-lg p-1 bg-purple-400  rounded-lg self-end"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "erarning":
      data = {
        title: "erarning",
        isMoney: true,
        link: "see All Users",
        icon: (
          <ShoppingCartOutlinedIcon
            className="text text-lg p-1 bg-purple-400  rounded-lg self-end"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "Balance":
      data = {
        title: "erarning",
        isMoney: false,
        link: "see All Users",
        icon: (
          <PersonOutlinedIcon
            className="text text-lg p-1 bg-purple-400  rounded-lg self-end"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    case type:
      data = {
        title: "Orders",
        isMoney: false,
        link: "see All Users",
        icon: (
          <MonetizationOnOutlinedIcon
            className="text text-lg p-1  rounded-lg self-end"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    default:
      break;
  }
  React.useEffect(()=>{
    const fetchData =async ()=>{
      const today =  new Date()
      const lastMonth = new Date(new Date().setMonth(today.getMonth() - 1));
      const prevMonth = new Date(new Date().setMonth(today.getMonth() - 2));
      const lastMonthQuery = query(
        collection(db, data.query),
        where("timeStamp", "<=", today),
        where("timeStamp", ">", lastMonth)
      );
      const prevMonthQuery = query(
        collection(db, data.query),
        where("timeStamp", "<=", lastMonth),
        where("timeStamp", ">", prevMonth)
      );
      const lastMonthData = await getDocs(lastMonthQuery);
      const prevMonthData = await getDocs(prevMonthQuery);

      setAmount(lastMonthData.docs.length);
      setDiff(
        ((lastMonthData.docs.length - prevMonthData.docs.length) / prevMonthData.docs.length) *
          100
      );
    }
    fetchData()
  },[])
  return (
    <div className="left flex mr-5 flex-1 gap-5 justify-between shadow-lg py-12 rounded-2xl px-4">
      <div className=" flex flex-col justify-between font-semibold">
        <span className="title text-base">{data.title}</span>
        <span className="counter text-3xl font-light"><span className="counter">
          {data.isMoney && "$"} {amount}
        </span>
        </span>
        <span className="link text-sm  border-b border-gray-400  max-w-max cursor-pointer">
          {data.link}
        </span>
      </div>
      <div className="right h-full flex">
      <div className={`percentage ${diff < 0 ? "negative" : "positive"}`}>
          {diff < 0 ? <KeyboardArrowDownIcon/> : <KeyboardArrowUpIcon/> }
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
