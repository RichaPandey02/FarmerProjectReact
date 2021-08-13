//Home page code..
import React from "react";
import Carousel from "../layout/Carousel";
import HOme from "../styles/HOme.css";
import Footer from "../layout/Footer";
import { useState,useEffect } from "react";
import axios from "axios";
const Home = () => {
  const[users,setUser]=useState([]);
  useEffect(()=>{
    loadUsers();
  },[]);
  const loadUsers=async ()=>{
    
    const result=await axios.get("http://localhost:8080/user/getAll");
    setUser(result.data);
    console.log(result);
  }
  return (
    <div>
      <br />
      <div className="space">
      <Carousel />
      </div>
    </div>
  );
};
export default Home;
