import React from "react";
import { AgGridReact } from "ag-grid-react";
import Modal from "react-bootstrap/Modal";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import axios from "axios";
import Mandii from "../styles/Mandii.css";

import Carousel from "../layout/Carousel";
const Mandi = () => {
  const onGridReady = (params) => {
    console.log("grid is ready");
    fetch("http://localhost:3000/api/mandischema")
      .then((resp) => resp.json())
      .then((resp) => params.api.applyTransaction({ add: resp }));
  };
  const columns = [
    {
      headerName: "STATE",
      field: "STATE",
      sortable: true,
      editable: true,
      filter: true,
      // checkboxSelection: true,
      floatingFilter: true,
      flex: 1,
    },
    {
      headerName: "DIST",
      field: "DIST",
      sortable: true,
      editable: true,
      filter: true,
      floatingFilter: true,
    },
    {
      headerName: "MARKET",
      field: "MARKET",
      sortable: true,
      editable: true,
      filter: true,
      floatingFilter: true,
    },
    {
      headerName: "GODOWN",
      field: "GODOWN",
      sortable: true,
      editable: true,
      filter: true,
      floatingFilter: true,
    },
    {
      headerName: "COLDSTORAGE",
      field: "COLDSTORAGE",
      sortable: true,
      editable: true,
      filter: true,
      floatingFilter: true,
    },
    {
      headerName: "RAILWAY",
      field: "RAILWAY",
      sortable: true,
      editable: true,
      filter: true,
      floatingFilter: true,
    },
    {
      headerName: "Action",
      cellRendererFramework: (params) => (
        <div>
          <button
            onClick={() => cellDeleteing(params)}
            className="btn btn-danger"
          >
            Delete
          </button>
          {/* <button onClick={()=>cellEditing(params)}  editType="fullRow" >update</button> */}
        </div>
      ),
    },
  ];
  let id;
  const UpadateFunction = (resp) => {
    console.log(resp);
    id = resp.data._id;
    alert("Do you want to update your data?🙄🙄")
  };

  const cellEditing = (resp) => {
    id = resp.data._id;

    axios.put(`http://localhost:3000/api/mandi/${id}`, resp.data);
    console.log(resp);
    alert("your data has been updated😊😊");
  };
  const cellDeleteing = (resp) => {
    resp.api.applyTransaction({
      remove:[resp.node.data]
    })
    id = resp.data._id;
    axios.delete(`http://localhost:3000/api/mandi/${id}`, resp.data);
    alert("your data has been deleted")
  };

  return (
    <div>
      <Carousel />
      <br />
      <h1> Currently Available Mandi's</h1>
      <br />
      <div
        className="ag-theme-alpine  container table-responsive-sm"
        style={{
          height: "500px",
          width: "1500px",
        }}
      >
        <AgGridReact
          columnDefs={columns}
          onGridReady={onGridReady}
          pagination={true}
          paginationPageSize={10}
          paginationAutoPageSize={true}
          onRowDoubleClicked={UpadateFunction}
          onCellEditingStopped={cellEditing}
        />
      </div>
    </div>
  );
};

export default Mandi;
