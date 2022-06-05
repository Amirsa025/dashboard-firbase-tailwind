import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
// Data imported in Config 
import { NavbarSide } from "../../config/Config";
const Navbar = () => {
  return (
    <div className="navbar h-[3.125rem]  text-[#555] items-center">
      <div className="wrapper flex  justify-between border-b-[0.5px]  border-slate-300 py-[0.125rem]">
        <div className="Search py-4 px-4 flex  items-center gap-2">
          <input
            type="text"
            placeholder="Search... "
            className="border-2 px-4 rounded-lg outline-0"
          />
          <SearchOutlinedIcon className="text-gray-400" />
        </div>
        <div className="items md:flex  hidden">
        {NavbarSide.map((item,id)=>{
          return (
            <div className="item flex items-center px-2 cursor-pointer gap-2 relative" key={id}>
              <item.icon className="text-[1.25rem] "/>
              <div className={item.style}>{item.counter}</div>
              <span className="text-sm font-semibold">{item.title}</span>
            </div>
          )
        })}
        <div className="item">
        <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar w-7 h-7 border-1 rounded-[50%] mt-4 mr-4"
            />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
