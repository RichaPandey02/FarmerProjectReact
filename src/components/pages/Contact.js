import React, { useState } from 'react'
import axios from 'axios'
 import { useHistory } from "react-router-dom";
import Carousel from '../layout/Carousel';
const Contact=()=>{
     let history = useHistory();
    const [user, setUser] = useState({
        Fullname: "",
        Topic: "",
        Details: "",  
      
    });
    const { Fullname, Topic, Details} = user;
    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
      };
      const onSubmit = async e => {
        e.preventDefault();
        await axios.post("http://localhost:3000/api/contactUs", user);
        history.push("/");
        alert('you query has been submitted.....')
      };
      return (
        <div>

        <Carousel/>
        <div className="container">
          <div className="w-75 mx-auto shadow p-5">
            <h2 className="text-center mb-4">CONTACT US👍😁 </h2>
            <form onSubmit={e => onSubmit(e)}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter Your FullName"
                  name="Fullname"
                  value={Fullname}
                  onChange={e => onInputChange(e)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter Your Topic"
                  name="Topic"
                  value={Topic}
                  onChange={e => onInputChange(e)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter Your Details"
                  name="Details"
                  value={Details}
                  onChange={e => onInputChange(e)}
                />
              </div>
              
              
              <button className="btn btn-primary btn-block">Submit</button>
            </form>
          </div>
          </div>
          </div>
      )
      
}

export default Contact