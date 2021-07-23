import React from "react";

 import axios from 'axios';

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
      
       editable: true,
     
      flex:1
    },
    {
      headerName: "dist",
      field: "dist",
    
       editable: true,
      
    },
    {
      headerName: "Office_Address",
      field: "Office_Address",
     
       editable: true,
      
    },
    {
      headerName: "No_of_Staff",
      field: "No_of_Staff",
     
       editable: true,
       filter: true,
       floatingFilter: true,
    },
    {
      headerName: "TelePhone",
      field: "TelePhone",
      // sortable: true,
      editable: true,
      // filter: true,
      // floatingFilter: true,
    },
    {
      headerName: "Soil_Equipment",
      field: "Soil_Equipment",
      // sortable: true,
       editable: true,
      // filter: true,
      // floatingFilter: true,
    },
    {
      headerName: "Soil_Test_No",
      field: "Soil_Test_No",
      // sortable: true,
       editable: true,
      // filter: true,
      // floatingFilter: true,
    },
    {
      headerName: "Fax",
      field: "Fax",
      // sortable: true,
       editable: true,
      // filter: true,
      // floatingFilter: true,
    },
    {
      headerName: "other_Information",
      field: "other_Information",
      // sortable: true,
       editable: true,
      // filter: true,
      // floatingFilter: true,
    },
    {
      headerName:"Action",
      cellRendererFramework:(params)=>
      <div>
        <button onClick={()=>cellDeleteing(params)}>Delete</button>
        {/* <button onClick={()=>cellEditing(params)}  editType="fullRow" >update</button> */}
      
      </div>
    }
    
  ];

  let id;
  const UpadateFunction = (resp) => {
    
    console.log(resp);
    id = resp.data._id;
  };

  const cellEditing = (resp) => {
    
    id = resp.data._id;
    
    axios.put(`http://localhost:3000/api/scheme/${id}`, resp.data);
    console.log(resp);
    alert("your data has been updated")
  };
  const cellDeleteing=(resp)=>{
    id = resp.data._id;
    axios.delete(`http://localhost:3000/api/scheme/${id}`, resp.data)
    alert("your data has been deleted")
  }

  return (
    <div >
      
      <Carousel/>
      <div
        className="ag-theme-alpine"
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

export default ImportantAddress;
