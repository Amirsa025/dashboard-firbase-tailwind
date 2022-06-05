import React from "react";
import DataTable from "../../components/dataTable/dataTable";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/SideBar/Sidebar";

const List = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="flex-1 ml-40 px-4">
        <Navbar/>
        <div className="list py-5 px-4">
            <DataTable />
          </div> 
      </div>
    </div>
  );
};

export default List;
