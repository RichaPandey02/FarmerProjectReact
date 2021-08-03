import React from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "../layout/Carousel";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import "./Aggrid.css";
import schemee from "../styles/schemee.css";

const Schemes = () => {
  const rowStyle = {
    background: "transparent",
    color: "black",
  };
  let gridApi;
  const onGridReady = (params) => {
    fetch("http://localhost:3000/api/schemeSchema")
      .then((resp) => resp.json())
      .then((resp) => params.api.applyTransaction({ add: resp }));

    gridApi = params.api;
  };
  const columns = [
    {
      headerName: "TITLE",
      field: "title",
      editable: true,
    },
    {
      headerName: "STATE",
      field: "State",
    },

    {
      headerName: "WEBSITE",
      field: "Website",
    },
    {
      headerName: "DESCRIPTION",
      field: "Description",
    },
    {
      headerName: "ACTION",

      cellRendererFramework: (params) => (
        <div>
          <button
            onClick={() => cellDeleteing(params)}
            style={{ color: "white" }}
            className="delete-Schemes"
          >
            Delete
          </button>
          
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

    axios.put(`http://localhost:3000/api/scheme/${id}`, resp.data);
    console.log(resp);
    alert("your data has been updated 🙂☺ ");
  };
  const cellDeleteing = (resp) => {
    id = resp.data._id;
    resp.api.applyTransaction({
      remove: [resp.node.data],
    });
    axios.delete(`http://localhost:3000/api/scheme/${id}`, resp.data);

    //  alert("your data has been deleted");
  };

  const onExportClick = () => {
    gridApi.exportDataAsCsv();
  };

  return (
    <div>
      <div>
        <Carousel />

        <section>
          <h1>
            <br />
            Shemes Available For Market Price
          </h1>

          {/* <h5 data-testid="testcase">
            Minimum Support Price (MSP) is a form of market intervention by the
            Government of India to insure agricultural producers against any
            sharp fall in farm prices. The minimum support prices are announced
            by the Government of India at the beginning of the sowing season for
            certain crops on the basis of the recommendations of the Commission
            for Agricultural Costs and Prices (CACP). MSP is price fixed by
            Government of India to protect the producer - farmers - against
            excessive fall in price during bumper production years. The minimum
            support prices are a guarantee price for their produce from the
            Government. The major objectives are to support the farmers from
            distress sales and to procure food grains for public distribution.
            In case the market price for the commodity falls below the announced
            minimum price due to bumper production and glut in the market,
            government agencies purchase the entire quantity offered by the
            farmers at the announced minimum price.
          </h5> */}
        </section>
        <br />
        <button
          onClick={() => onExportClick()}
          // style={{ color: "white" }}
          className="export-btn"
        >
          export
        </button>
        <br />
        <br />
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
            onRowDoubleClicked={UpadateFunction}
            onCellEditingStopped={cellEditing}
            height="350px"
            rowStyle={rowStyle}
          />
        </div>
      </div>
    </div>
  );
};

export default Schemes;
