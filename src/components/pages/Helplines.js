import React from "react";
import help from "../styles/help.css";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import Card from "./Card";
import "./Aggrid.css";
import Carousel from "../layout/Carousel";

const Helplines = () => {
  const onGridReady = (params) => {
    console.log("grid is ready");
    fetch("http://localhost:3000/api/HelplineSchema")
      .then((resp) => resp.json())
      .then((resp) => params.api.applyTransaction({ add: resp }));
  };

  const columns = [
    {
      headerName: "TITLE",
      field: "title",
    },
    {
      headerName: "DETAILS",
      field: "details",
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

  return (
    <div>
      {/* <Carousel />  */}
      <Card/>
      
      <section></section>
      <div className="about-para">
        <br />
        <h1>Wanna help...Please Call Us 😊😊</h1>
        <br></br>

        <h5 data-testid="testcase" className="about-para__help">
          Bharat Sarkar has started a Kisan Call Center for the support of the farmers
          {/* farmers, whose farmers and farmers can avail the benefits and
          information of the services related to the crop seed, by calling the
          helpline number of the country, these farmers call centers can get all
          the help in the country. States have started for farmers, on which
          farmers can get information related to their problems and agriculture
          by calling. */}
        </h5>
      </div>
<br></br>
      <div
        className="ag-theme-alpine manage-table
         container table-responsive-sm"
        // style={{
        //   height: "500px",
        // }}
      >
        <AgGridReact
          columnDefs={columns}
          defaultColDef={defaultColDef}
          onGridReady={onGridReady}
          pagination={true}
          paginationPageSize={10}
          paginationAutoPageSize={true}
          height="350px"
        />
      </div>
      <br />
      <br />
    </div>
  );
};

export default Helplines;
