import React, { useContext, useEffect, useState } from 'react';
import Adimslider from './Adimslider';
import { Outlet, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { store } from '../App';
 
const Adimdashboard = () => {
  const[token,setToken]=useContext(store);
  const [data,setData]=useState("")
  const navigate = useNavigate()
  useEffect(()=>{
    axios.get("http://localhost:4000/singup/adimdashboard",{
      headers:{
        "A-token":token 
      }
    })
     
    .then((res)=>{
           setData(res.data)
    })
    .catch((err)=>{
        console.log(err)
    })
    if(!token){
      navigate("/adim")
    }
  })
  return (
    <div className="adim-dashboard">
       
      <section className="dashboard-header py-4" style={{backgroundColor:"blue"}}>
        <div className="container">
          <h1 className="text-center display-4"> {data}Admin Dashboard</h1>
        </div>
      </section>

      
      <section className="dashboard-content">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <Adimslider />
            </div>
            <div className="col-md-9 bg-white shadow-sm">
              <Outlet/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Adimdashboard;
