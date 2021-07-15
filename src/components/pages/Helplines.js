import React , {useState,useEffect}from "react";

import Pagination from "../layout/Pagination";
import axios from 'axios';
import Carousel from "../layout/Carousel";

const Helplines = () => {
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
      const result=await axios.get("http://localhost:3000/api/HelplineSchema");
      setUser(result.data)
      console.log(result)
  }
  
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
             <table class="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Details</th>
      <th scope="col">Title</th>
      
    </tr>
  </thead>
  <tbody>
  {users.slice(pagination.start,pagination.end).map((users, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  {/* <td>{users.id}</td> */}
                  <td>{users.title}</td>
                  <td>{users.details}</td>

                 
                </tr>
              ))}
  </tbody>
</table>
           
    </div>
    <Pagination showPerPage={showPerPage} onPaginationChange={onPaginationChange}/>
    </div>
    
  );
};

export default Helplines;
