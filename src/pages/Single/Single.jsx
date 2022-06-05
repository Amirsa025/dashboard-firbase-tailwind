import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/SideBar/Sidebar";
import Chart from '../../components/charts/Chart'
import Table from "../../components/table/table"
const Single = () => {
  return (
    <div className="single  flex w-100">
      <Sidebar />
      <div className="singleContainer flex-1 ml-40">
        <Navbar />
        <div className={"py-5 px-4"}>
          <div className="top flex p-5 gap-5 ">
            <div className="leftSingle relative">
              <div className="editButton absolute right-0  p-1 top-0 text-purple-700 bg-purple-200 text-sm rounded-l-lg cursor-pointer">Edit</div>
              <h1 className="text-2xl font-bold ">Information</h1>
              <div className="item flex gap-5  item-center py-2">
                <img  src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="img" className="item-Img  w-24 h-24 rounded-full object-cover "/>
                  <div className="details ">
                    <div className="detailItem">
                  <span className="itemKey">Email:</span>{"  "}
                  <span className="itemValue">janedoe@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>{"  "}
                  <span className="itemValue">+1 2345 67 89</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>{"  "}
                  <span className="itemValue">
                    Elton St. 234 Garden Yd. NewYork
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>{"  "}
                  <span className="itemValue">USA</span>
                </div>
                  </div>
              </div>
            </div>
            <div className="rightSingle">
            <Chart  aspect={4 / 1} title="User Spending ( Last 6 Months)"/>
            </div>
          </div>
          <div className="bottom">
            <Table/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;
