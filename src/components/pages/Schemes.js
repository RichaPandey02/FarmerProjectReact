import React from "react";
import axios from "axios";
import Carousel from "../layout/Carousel";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

const Schemes = () => {
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
      // checkboxSelection: true,
      color: "#2C3A47",
      flex:1,
            minWidth:120
    },
    {
      headerName: "STATE",
      field: "State",
      editable: true,
      filter: true,
      floatingFilter: true,
      flex: 1,
      minwidth:120
    },
    
    {
      headerName: "WEBSITE",
      field: "Website",
      editable: true,
      flex: 1,
      minwidth:120
    },
    {
      headerName: "DESCRIPTION",
      field: "Description",
      editable: true,
      flex: 1,
      minwidth:120
    },
    {
      headerName: "ACTION",
      flex: 1,
      minwidth:120,
      cellRendererFramework: (params) => (
        <div>
          <button
            onClick={() => cellDeleteing(params)}
            style={{ color: "white" }}
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
    axios.delete(`http://localhost:3000/api/scheme/${id}`, resp.data);
    alert("your data has been deleted");
  };

  const onExportClick = () => {
    gridApi.exportDataAsCsv();
  };

  return (
    <div>
      <div>
        <Carousel />

        <section>
          <h1 style={{ textAlign: "center", color: "#eb2f06" }}>
            <br/>
            Shemes Available For Market Price
          </h1>

          <h5
            style={{ textAlign: "justify", color: "#2C3A47", margin: "5px" }}
            data-testid="testcase"
          >
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
          </h5>
        </section>
        <br/>
        <button
          onClick={() => onExportClick()}
          style={{ color: "white" }}
          className="btn btn-success"
        >
          export
        </button>
        <br/>
        <br/>
        <div
          className="ag-theme-alpine
          container table-responsive-sm"
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

            // onRowValueChanged={cellEditing}
            // onGridReady={onGridReady1}
          />
        </div>
      </div>
    </div>
  );
};

export default Schemes;

// import React, { Component } from "react";
// import Carousel from "../layout/Carousel";
// import { render } from "react-dom";
// import { AgGridReact } from "@ag-grid-community/react";
// import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
// import { RangeSelectionModule } from "@ag-grid-enterprise/range-selection";
// import "@ag-grid-community/core/dist/styles/ag-grid.css";
// import "@ag-grid-community/core/dist/styles/ag-theme-alpine.css";

// function actionCellRenderer(params) {
//   let eGui = document.createElement("div");

//   let editingCells = params.api.getEditingCells();
//   // checks if the rowIndex matches in at least one of the editing cells
//   let isCurrentRowEditing = editingCells.some((cell) => {
//     return cell.rowIndex === params.node.rowIndex;
//   });

//   if (isCurrentRowEditing) {
//     eGui.innerHTML = `
// <button  class="action-button update"  data-action="update"> update  </button>
// <button  class="action-button cancel"  data-action="cancel" > cancel </button>
// `;
//   } else {
//     eGui.innerHTML = `
// <button class="action-button edit"  data-action="edit" > edit  </button>
// <button class="action-button delete" data-action="delete" > delete </button>
// `;
//   }

//   return eGui;
// }

// export default class GridExample extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       modules: [ClientSideRowModelModule, RangeSelectionModule],
//       columnDefs: [
//         { field: "title", minWidth: 150 },
//         { field: "State", maxWidth: 90 },
//         {field:"Website",maxWidth:90},
//         {field:"Description",maxWidth:90},
//         {
//           headerName: "action",
//           minWidth: 150,
//           cellRenderer: actionCellRenderer,
//           editable: false,
//           colId: "action"
//         }
//       ],
//       defaultColDef: {
//         editable: true
//       },
//       rowData: null
//     };
//   }

//   onGridReady = (params) => {
//     this.gridApi = params.api;
//     this.gridColumnApi = params.columnApi;

//     const httpRequest = new XMLHttpRequest();
//     const updateData = (data) => {
//       this.setState({ rowData: data });
//     };

//     httpRequest.open("GET", "http://localhost:3000/api/schemeSchema");
//     httpRequest.send();
//     httpRequest.onreadystatechange = () => {
//       if (httpRequest.readyState === 4 && httpRequest.status === 200) {
//         updateData(JSON.parse(httpRequest.responseText));

//       }
//     };
//   };

//   onCellClicked(params) {
//     // Handle click event for action cells
//     if (params.column.colId === "action" && params.event.target.dataset.action) {
//       let action = params.event.target.dataset.action;

//       if (action === "edit") {
//         params.api.startEditingCell({
//           rowIndex: params.node.rowIndex,
//           // gets the first columnKey
//           colKey: params.columnApi.getDisplayedCenterColumns()[0].colId
//         });
//       }

//       if (action === "delete") {
//         params.api.applyTransaction({
//           remove: [params.node.data]
//         });
//       }

//       if (action === "update") {
//         params.api.stopEditing(false);
//       }

//       if (action === "cancel") {
//         params.api.stopEditing(true);
//       }
//     }
//   }

//   onRowEditingStarted(params) {
//     params.api.refreshCells({
//       columns: ["action"],
//       rowNodes: [params.node],
//       force: true
//     });

//   }
//   onRowEditingStopped(params) {
//     params.api.refreshCells({
//       columns: ["action"],
//       rowNodes: [params.node],
//       force: true,
//     }
//     );

//   }

//   render() {
//     return (
//       <div>
//             <Carousel />
//           <section>
//           <h1 style={{ textAlign: "center" }}>
//            SCHEMES AVAILABLE FOR MARKET PRICE
//             </h1>
//             <p style={{ textAlign: "justify", color: "gray", margin: "5px" }}>
//               Minimum Support Price (MSP) is a form of market intervention by the
//               Government of India to insure agricultural producers against any sharp
//                 fall in farm prices. The minimum support prices are announced by the
//                 Government of India at the beginning of the sowing season for certain
//                 crops on the basis of the recommendations of the Commission for
//                 Agricultural Costs and Prices (CACP). MSP is price fixed by Government
//                 of India to protect the producer - farmers - against excessive fall in
//                price during bumper production years. The minimum support prices are a
//                 guarantee price for their produce from the Government. The major
//                 objectives are to support the farmers from distress sales and to
//                procure food grains for public distribution. In case the market price
//                for the commodity falls below the announced minimum price due to
//               bumper production and glut in the market, government agencies purchase
//               the entire quantity offered by the farmers at the announced minimum
//                price.
//              </p>
//            </section>

//       <div style={{ width: "1500%", height: "1500%" }}>
//         <div
//           id="myGrid"
//           style={{
//             height: "500px",
//             width: "1500%"
//           }}
//           className="ag-theme-alpine"
//         >
//           <AgGridReact
//             onRowEditingStopped={this.onRowEditingStopped}
//             onRowEditingStarted={this.onRowEditingStarted}
//             onCellClicked={this.onCellClicked}
//             editType="fullRow"
//             suppressClickEdit={true}
//             modules={this.state.modules}
//             columnDefs={this.state.columnDefs}
//             defaultColDef={this.state.defaultColDef}
//             enableRangeSelection={true}
//             onGridReady={this.onGridReady}
//             rowData={this.state.rowData}

//           />
//         </div>
//       </div>
//       </div>
//     );
//   }
// }
