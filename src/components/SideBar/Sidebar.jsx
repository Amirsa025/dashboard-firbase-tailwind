import React from "react";
import { SidebarData } from "../../config/Config";
import { Link,useLocation } from "react-router-dom";

const Sidebar = ({}) => {
    const location = useLocation()
  return (
    <div className="sidebar  border-solid border-r h-screen  fixed top-0 left-0">
      {/* Top sidebar */}
      <div className="topSideBar flex h-[3rem] items-center justify-center px-4 py-8">
        <span className="logo text-purple-700 font-bold  text-2xl ">
          <Link to="/">Panel Admin</Link>
        </span>
      </div>
      <hr className="border-[0.5px] h-0 bg-slate-400" />

      {/* center sidebar*/}
      <div className="center pl-[1.25rem]">
        <ul>
          {SidebarData.map((item, idx) => {
            return (
              <div key={idx}>
                <p className="text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase">
                  {item.title}
                </p>
                {item.links.map((link,i) => (
                  <Link
                      key={i}
                    className={` ${location.pathname.includes(link.name)?'activeLink':'py-1 px-2 flex items-center  cursor-pointer hover:bg-slate-200'}`}
                    to={`/${link.name}`}
                  >
                    <div className="icon text-[1rem] text-purple-700">
                      {link.icon}
                    </div>
                    <span className="px-3 text-[0.8rem] font-semibold text-slate-600 ">
                      {link.name}
                    </span>
                  </Link>
                ))}
              </div>
            );
          })}
        </ul>
      </div>
      {/* bottom sidebar */}
      <div className="ColorOption flex gap-4 item-center py-4 justify-center ">
        <div className="black  w-[2rem] h-[1.5rem] rounded-md  bg-gray-900 text-white text-[1rem] cursor-pointer border-1 border-slate-300"></div>
        <div className="white w-[2rem] h-[1.5rem] rounded-md  bg-blue-900 text-white text-[1rem]  cursor-pointer border-1 border-slate-300"></div>
        <div className="white w-[2rem] h-[1.5rem] rounded-md  bg-gray-200 text-white text-[1rem] cursor-pointer border-2 border-slate-300"></div>
      </div>
    </div>
  );
};

export default Sidebar;
