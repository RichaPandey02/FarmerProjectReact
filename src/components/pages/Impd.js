import React from "react";
import "./Aggrid.css";
import axios from "axios";
import Imp from "../styles/Imp.css";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import Carousel from "../layout/Carousel";
const ImportantAddress = () => {
  const onGridReady = (params) => {
    console.log("grid is ready");
    fetch("http://localhost:3000/api/SoilSchema")
      .then((resp) => resp.json())
      .then((resp) => params.api.applyTransaction({ add: resp }));
  };

  const columns = [
    {
      headerName: "STATE",
      field: "STATE",
    },
    {
      headerName: "DIST",
      field: "dist",
    },
    {
      headerName: "OFFICE ADDRESS",
      field: "Office_Address",
    },
    {
      headerName: "NO OF STAFF",
      field: "No_of_Staff",
    },
    {
      headerName: "TELEPHONE",
      field: "TelePhone",
    },
    {
      headerName: "SOIL EQUIPMENT",
      field: "Soil_Equipment",
    },
    {
      headerName: "SOIL TEST NUMBER",
      field: "Soil_Test_No",
    },

    {
      headerName: "ACTION",
      cellRendererFramework: (params) => (
        <div>
          <button
            onClick={() => cellDeleteing(params)}
            className="delete"
          >
            Delete
          </button>
          {/* <button onClick={()=>cellEditing(params)}  editType="fullRow" >update</button> */}
        </div>
      ),
    },
  ];
  const defaultColDef = {
    sortable: true,
    editable: true,
    flex: 1,
    filter: true,
    floatingFilter: true,
    minWidth: 120,
  };

  let id;
  const UpadateFunction = (resp) => {
    console.log(resp);
    id = resp.data._id;
    alert("Do you want to update tour data?🙄🙄");
  };

  const cellEditing = (resp) => {
    id = resp.data._id;

    axios.put(`http://localhost:3000/api/soil/${id}`, resp.data);
    console.log(resp);
    alert("your data has been updated 🙂☺ ");
  };
  const cellDeleteing = (resp) => {
    id = resp.data._id;
    resp.api.applyTransaction({
      remove: [resp.node.data],
    });
    axios.delete(`http://localhost:3000/api/soil/${id}`, resp.data);
    alert("your data has been Deleted 🙂☺ ");
  };

  return (
    <div>
      <Carousel />
      <br />
      <h1>SOIL TESTING LABS</h1>
      <div
        className="ag-theme-alpine "
        style={{
          height: "500px",
        }}
      >
        <AgGridReact
          columnDefs={columns}
          defaultColDef={defaultColDef}
          onGridReady={onGridReady}
          pagination={true}
          paginationPageSize={10}
          paginationAutoPageSize={true}
          onRowDoubleClicked={UpadateFunction}
          onCellEditingStopped={cellEditing}
          height="350px"
        />
      </div>
    </div>
  );
};

export default ImportantAddress;
