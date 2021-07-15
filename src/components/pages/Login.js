import React, { useState ,useEffect} from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";

const AddUser = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    Fullname: "",
    phoneNumber:""
    
  });
  

  const { FullName, phoneNumber } = user;
  const onInputChange = e => {
    setUser({ [e.target.name]: e.target.value });
  };
  const onInputChange1 = e => {
    setUser({ [e.target.phoneNumber]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3000/api/login", user);
    history.push("/");
    alert('user is successfully logedin')
  };
 
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A User</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="FullName"
              value={FullName}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Username"
              name="phoneNumber"
              value={phoneNumber}
              onChange={e => onInputChange1(e)}
            />
          </div>
          <button className="btn btn-primary btn-block">Login User</button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
