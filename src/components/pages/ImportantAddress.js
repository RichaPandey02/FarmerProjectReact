import React, {useState,useEffect} from "react";

import axios from 'axios';
import Pagination from "../layout/Pagination";
import Carousel from "../layout/Carousel";
const ImportantAddress = () => {
  const[users,setUser]=useState([]);
  useEffect(()=>{

      loadUsers();
  },[]);
  const [showPerPage,setShowPerPage]=useState(8);
  const [pagination, setPagination] = useState({
    start:0,
    end:showPerPage
  });
  const onPaginationChange=(start,end)=>{
    setPagination({start:start,end:end})

  }
  const loadUsers=async ()=>{
      const result=await axios.get("http://localhost:3000/api/schemeSchema");
      setUser(result.data)
      console.log(result)
  }
  return (
    <div >
      
      <Carousel/>
      <Pagination showPerPage={showPerPage} onPaginationChange={onPaginationChange}/>
    </div>

    
  );
};

export default ImportantAddress;
