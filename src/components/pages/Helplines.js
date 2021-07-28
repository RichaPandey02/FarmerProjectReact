import React from "react";
import Help from "../styles/Help.css";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

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
      sortable: true,
      editable: true,
      filter: true,

      floatingFilter: true,
      flex: "1",
    },
    {
      headerName: "DETAILS",
      field: "details",
      sortable: true,
      editable: true,
      filter: true,
      floatingFilter: true,
    },
  ];

  return (
    <div>
      <Carousel />
      <section></section>
      <div id="about-para">
        <br />
        <h1>Wanna help...Please Call Us 😊😊</h1>

        <h5 data-testid="testcase">
          Bharat Sarkar has started a Kisan Call Center for the support of the
          farmers, whose farmers and farmers can avail the benefits and
          information of the services related to the crop seed, by calling the
          helpline number of the country, these farmers call centers can get all
          the help in the country. States have started for farmers, on which
          farmers can get information related to their problems and agriculture
          by calling.
        </h5>
      </div>

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
        />
      </div>
      <br />
      <br />
    </div>
  );
};

export default Helplines;
