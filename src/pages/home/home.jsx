import React from 'react'
import Chart from '../../components/charts/Chart'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/SideBar/Sidebar'
import Table from '../../components/table/table'
import Widget from '../../components/widget/Widget'
import Feature from '../../components/Feature/Feature'

const home = () => {
  return (
    <div className="flex" >
       <Sidebar/>
       <div className="container flex-6">
         <Navbar/>
         <div className="my-4 flex p-[1.25rem] gap-5 ">
           <Widget type="User"/>
           <Widget type="Orders"/>
           <Widget type="erarning"/>
           <Widget type="Balance"/>
         </div>
         <div className="flex gap-4 px-4 py-4">
             <Feature/>
             <Chart  title="Last 6 Months (Revenue)" aspect={2 / 1}/>
         </div>
         <div className="listContianer shadow-xl p-3  rounded-lg m-4">
           <div className="listTitle">Last tranactions</div>
           <Table/>
         </div>
       </div>
    </div>
  )
}

export default home