import React, {useState,useEffect} from "react";

import axios from 'axios';
import Pagination from "../layout/Pagination";
import Carousel from "../layout/Carousel";
const Mandi = () => {
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
      const result=await axios.get("http://localhost:3000/api/mandischema");
      setUser(result.data)
      console.log(result)
  }
  return (
    <div >
      
      <Carousel/>
      <section id="about">
         <div id="about-para">
      <h1 style={{textAlign:'center'}}> CURRENTLY AVAILABLE MANDI'S</h1>
      <hr >
</hr>
        </div>
        </section>
             <table class="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">STATE</th>
      <th scope="col">DIST</th>
      <th scope="col">MARKET</th>
      
      
      
    </tr>
  </thead>
  <tbody>
  {users.slice(pagination.start,pagination.end).map((users, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  {/* <td>{users.id}</td> */}
                  <td>{users.STATE}</td>
                  <td>{users.DIST}</td>
                  <td>{users.MARKET}</td>
                  

                 
                </tr>
              ))}
  </tbody>
</table>
<Pagination showPerPage={showPerPage} onPaginationChange={onPaginationChange}/>
    </div>

    
  );
};

export default Mandi;
