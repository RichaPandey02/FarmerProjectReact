import React, { useState, useEffect } from "react";
import Navbar from "../layout/Navbar";
import axios from "axios";

const Crop = () => {
  const [users, setUser] = useState([]);
  useEffect(() => {
    loadUsers();
  }, []);
  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3000/api/cropSchema");
    setUser(result.data);
    console.log(result);
  };
  return (
      <div>
           <div classNmae="py-4">
          <table className="table border shadow">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Crop</th>
                <th scope="col">Details</th>
                <th scope="col">Desc</th>
               
              </tr>
            </thead>
            <tbody>
              {users.map((users, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  {/* <td>{users.id}</td> */}
                  <td>{users.data}</td>
                  <td>{users.name}</td>
                  <td>{users.desc}</td>

                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
   
      
  )
}
export default Crop
