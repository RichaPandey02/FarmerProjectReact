import React from "react";

// import axios from 'axios';
// import Pagination from "../layout/Pagination";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import Carousel from "../layout/Carousel";
const ImportantAddress = () => {
  // const[users,setUser]=useState([]);
  // useEffect(()=>{

  //     loadUsers();
  // },[]);
  // const [showPerPage,setShowPerPage]=useState(8);
  // const [pagination, setPagination] = useState({
  //   start:0,
  //   end:showPerPage
  // });
  // const onPaginationChange=(start,end)=>{
  //   setPagination({start:start,end:end})

  // }
  // const loadUsers=async ()=>{
  //     const result=await axios.get("http://localhost:3000/api/SoilSchema");
  //     setUser(result.data)
  //     console.log(result)
  // }
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
      // sortable: true,
      // editable: true,
      // filter: true,
      // checkboxSelection: true,
      // floatingFilter: true,
      flex:1
    },
    {
      headerName: "dist",
      field: "dist",
      // sortable: true,
      // editable: true,
      // filter: true,
      // floatingFilter: true,
    },
    {
      headerName: "Office_Address",
      field: "Office_Address",
      // sortable: true,
      // editable: true,
      // filter: true,
      // floatingFilter: true,
    },
    {
      headerName: "No_of_Staff",
      field: "No_of_Staff",
      // sortable: true,
      // editable: true,
       filter: true,
       floatingFilter: true,
    },
    {
      headerName: "TelePhone",
      field: "TelePhone",
      // sortable: true,
      // editable: true,
      // filter: true,
      // floatingFilter: true,
    },
    {
      headerName: "Soil_Equipment",
      field: "Soil_Equipment",
      // sortable: true,
      // editable: true,
      // filter: true,
      // floatingFilter: true,
    },
    {
      headerName: "Soil_Test_No",
      field: "Soil_Test_No",
      // sortable: true,
      // editable: true,
      // filter: true,
      // floatingFilter: true,
    },
    {
      headerName: "Fax",
      field: "Fax",
      // sortable: true,
      // editable: true,
      // filter: true,
      // floatingFilter: true,
    },
    {
      headerName: "other_Information",
      field: "other_Information",
      // sortable: true,
      // editable: true,
      // filter: true,
      // floatingFilter: true,
    },
    
  ];

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
        />
      </div>
     
    </div>

    
  );
};

export default ImportantAddress;
