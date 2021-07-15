import React from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
// import Pagination from "../layout/Pagination";
// import axios from 'axios';
import Carousel from "../layout/Carousel";

const Helplines = () => {
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
  //     const result=await axios.get("http://localhost:3000/api/HelplineSchema");
  //     setUser(result.data)
  //     console.log(result)
  // }
  const onGridReady = (params) => {
    console.log("grid is ready");
    fetch("http://localhost:3000/api/HelplineSchema")
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
      flex:1
    },
    {
      headerName: "details",
      field: "details",
      sortable: true,
      editable: true,
      filter: true,
      floatingFilter: true,
    },
    
  ];

  return (
    
    <div>
      <Carousel/>
      <section></section>
      <div id="about-para">
        <h1>Wanna help...Please Call Us 😊😊</h1>
        


          <p>
            Bharat Sarkar has started a Kisan Call Center for
             the support of the farmers, whose farmers and farmers can avail
             the benefits and information of the services related to the crop seed, by calling the helpline number of the country, these farmers call centers can get all the help in the country. States have started for farmers, on which farmers can get
             information related to their problems and agriculture by calling.

             </p>
             
           
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
    </div>
    
  );
};

export default Helplines;
