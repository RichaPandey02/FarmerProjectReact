import React from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
// import axios from 'axios';
// import Pagination from "../layout/Pagination";
import Carousel from "../layout/Carousel";
const Mandi = () => {
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
  //     const result=await axios.get("http://localhost:3000/api/mandischema");
  //     setUser(result.data)
  //     console.log(result)
  // }
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
      checkboxSelection: true,
      floatingFilter: true,
      flex:1
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
    
  ];

  return (
    <div >
      
      <Carousel/>
      <h1 style={{textAlign:'center'}}> CURRENTLY AVAILABLE MANDI'S</h1>
          
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

export default Mandi;
