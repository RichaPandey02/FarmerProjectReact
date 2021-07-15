import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";

const AddUser = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    Fullname: "",
    pass:"",
    phone:""
    
  });

  const { FullName, pass, phone } = user;
  const onInputChange = e => {
    setUser({ [e.target.FullName]: e.target.value });
  };
  const onInputChange1 = e => {
    setUser({ [e.target.phoneNumber]: e.target.value });
  };
  const onInputChange2 = e => {
    setUser({ [e.target.pass]: e.target.pass });
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
        <h2 className="text-center mb-4">Register A User</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your FullName"
              name="FullName"
              value={FullName}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Password"
              name="pass"
              value={pass}
              onChange={e => onInputChange1(e)}
            />
          </div>
          
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your phone"
              name="phone"
              value={phone}
              onChange={e => onInputChange2(e)}
            />
          </div>
          <button className="btn btn-primary btn-block">Register User</button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
