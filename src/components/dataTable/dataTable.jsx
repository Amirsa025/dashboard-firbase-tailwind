import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../config/Config";
import { Link } from "react-router-dom";
import {db} from '../../firebase'
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
const DataTable = () => {
  const [data,setData]=React.useState([])
  React.useEffect(() => {
    // const fetchData = async () => {
    //   let list = [];
    //   try {
    //     const querySnapshot = await getDocs(collection(db, "users"));
    //     querySnapshot.forEach((doc) => {
    //       list.push({ id: doc.id, ...doc.data() });
    //     });
    //     setData(list);
    //     console.log(list);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // };
    // fetchData();

    // LISTEN (REALTIME)
    const unsub = onSnapshot(
      collection(db, "users"),
      (snapShot) => {
        let list = [];
        snapShot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setData(list);
      },
      (error) => {
        console.log(error);
      }
    );
//  callback function
    return () => {
      unsub();
    };
  }, []);
  const handleDelete = async (id) => {
    try {
      if (window.confirm("Do you really Delete Rows?")){
        setData(data.filter((item) => item.id !== id));
        console.log(data);
        alert("delteted Rows succefully!")
      }
    } catch (err) {
      console.log(err);
    }
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
             className={
              "deleteButton px-1 py-1 rounded-xl border-2 text-red-600 cursor-pointer"
            }
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="dataTable">
      <div style={{ height: 600, width: "100%" }} className={"p-4"}>
        <div
          className={"flex items-center  justify-between text-2xl font-bold "}
        >
          Add new User
          <Link
            to="/users/new"
            className="text-2xl font-bold p-1 text-green-300 mb-4 items-center flex"
          >
            {" "}
            Add New
          </Link>
        </div>
        <DataGrid
          rows={data}
          columns={userColumns.concat(actionColumn)}
          pageSize={9}
          rowsPerPageOptions={[9]}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </div>
  );
};

export default DataTable;
