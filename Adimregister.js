 import React, { useState } from 'react'
 import axios from "axios"
import { useNavigate } from 'react-router-dom';
 const Adimregister = () => {
    const [name,setName]=useState("");
    const [phone,setPhone]=useState("");
    const [email,setEmail]=useState("");
    const [password,setpassword]=useState("");
    const [address,setAddress]=useState("");
    const navigate=useNavigate();
    const  addStudent=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:4000/singup",{name,phone,email,password,address})
         .then((res)=>{
            alert("User data added");
             navigate("/adim")
         })
         .catch((err)=>{
            alert("fail to add data");
         })
        
    }
   return (
     <div>
        <section>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 my-4'>
                        <h1 className='text-center'> Adim register</h1>
                    </div>
                </div>
            </div>
        </section>
       <section>
        <div className='container'>
            <div className='row'>
                <div className='col-md-3'></div>
                <div className='col-md-6'>
                    <form onSubmit={addStudent}>
                        <div className='mb-3'>
                            <input type='text' name='name' placeholder='Name' className='form-control' value={name} onChange={(e)=>setName(e.target.value)}/>
                        </div>
                        <div className='mb-3'>
                            <input type='text' name='phone' placeholder='Phone' className='form-control' value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                        </div>
                        <div className='mb-3'>
                            <input type='text' name='email' placeholder='Email' className='form-control' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        </div>
                        <div className='mb-3'>
                            <input type='password' name='password' placeholder='password' className='form-control' value={password} onChange={(e)=>setpassword(e.target.value)}/>
                        </div>
                        <div className='mb-3'>
                            <input type='text' name='address' placeholder='Address' className='form-control' value={address} onChange={(e)=>setAddress(e.target.value)}/>
                        </div>
                        <div>
                            <input type='submit'  value="Register" className='btn btn-sucess' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
       </section>
     </div>
   )
 }
 
 export default Adimregister
 