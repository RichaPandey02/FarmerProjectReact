import React from "react";
// import Navbar from "../layout/Navbar";
// import axios from "axios";
// import Pagination from "../layout/Pagination";
import Carousel from "../layout/Carousel";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

const Schemes = () => {
  // const [users, setUser] = useState([]);
  // useEffect(() => {
  //    loadUsers();
  // }, []);
  // const [showPerPage, setShowPerPage] = useState(10);
  // const [pagination, setPagination] = useState({
  //   start: 0,
  //   end: showPerPage,
  // });
  // const onPaginationChange = (start, end) => {
  //   setPagination({ start: start, end: end });
  // };
  //
  const onGridReady = (params) => {
    console.log("grid is ready");
    fetch("http://localhost:3000/api/schemeSchema")
      .then((resp) => resp.json())
      .then((resp) => params.api.applyTransaction({ add: resp }));
  };
  const columns = [
    {
      headerName: "title",
      field: "title",
      sortable: true,
      editable: true,
      filter: true,
      checkboxSelection: true,
      floatingFilter: true,
    },
    {
      headerName: "State",
      field: "State",
      sortable: true,
      editable: true,
      filter: true,
      floatingFilter: true,
    },
    {
      headerName: "Website",
      field: "Website",
      sortable: true,
      editable: true,
      filter: true,
      floatingFilter: true,
    },
    {
      headerName: "Description",
      field: "Description",
      sortable: true,
      editable: true,
      filter: true,
      floatingFilter: true,
    },
  ];

  return (
    <div>
      <Carousel />
      <section>
        <h1 style={{ textAlign: "center" }}>
          SCHEMES AVAILABLE FOR MARKET PRICE
        </h1>
        <p style={{ textAlign: "justify", color: "gray", margin: "5px" }}>
          Minimum Support Price (MSP) is a form of market intervention by the
          Government of India to insure agricultural producers against any sharp
          fall in farm prices. The minimum support prices are announced by the
          Government of India at the beginning of the sowing season for certain
          crops on the basis of the recommendations of the Commission for
          Agricultural Costs and Prices (CACP). MSP is price fixed by Government
          of India to protect the producer - farmers - against excessive fall in
          price during bumper production years. The minimum support prices are a
          guarantee price for their produce from the Government. The major
          objectives are to support the farmers from distress sales and to
          procure food grains for public distribution. In case the market price
          for the commodity falls below the announced minimum price due to
          bumper production and glut in the market, government agencies purchase
          the entire quantity offered by the farmers at the announced minimum
          price.
        </p>
      </section>
      {/* <div classNmae="container">
        <div classNmae="py-4">
          <table className="table border shadow">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Id</th>
                <th scope="col">title</th>
                <th scope="col">State</th>
                <th scope="col">Website</th>
              </tr>
            </thead>
            <tbody>
              {users.slice(pagination.start,pagination.end).map((users, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
               
                  <td>{users.title}</td>
                  <td>{users.State}</td>

                  <td>{users.Website}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
         */}
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
    </div>
  );
};

export default Schemes;
