import React, { useContext, useState } from 'react'
import axios from "axios"
import { Navigate, NavLink, useNavigate } from 'react-router-dom';
import { store } from '../App';

const Adimlogin = () => {
    const [token,setToken]=useContext(store)
    const [email,setEmail]=useState("");
const [password,setPassword]=useState("")
const Navigate=useNavigate("")
const submit=(e)=>{
    e.preventDefault()
    axios.post("http://localhost:4000/singup/login" ,{email,password})
    .then((res)=>{
           setToken(res.data.token)
    })
    .catch((err)=>{
        console.log(err)
    })
    if(token){
        Navigate("/adimdashboard")
    }
}
  return (
    <div>
       <section>
        <div className='container '>
            <div className='row'>
                <div className='col-md-3'></div>
                <div className='col-md-6'>
                    <form onSubmit={submit}>  
                         
                        <div className='mb-3'>
                            <input type='text' name='email' placeholder='username' className='form-control' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        </div>
                        <div className='mb-3'>
                            <input type='password' name='password' placeholder='password' className='form-control' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                        </div>
                        <div>
                            <input type='submit'  value="Adim login" className='btn btn-sucess' style={{color:"blue "}} />
                        </div>
                    </form>
                    <NavLink to ='/register'>New User?</NavLink>
                </div>
            </div>
        </div>
       </section>
     </div>
   
  )
}

export default Adimlogin
