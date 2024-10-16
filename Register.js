 import React, { useState } from 'react'
 import axios from "axios"
 const Register = () => {
    const [name,setName]=useState("");
    const [phone,setPhone]=useState("");
    const [email,setEmail]=useState("");
    const [address,setAddress]=useState("");
    const  addStudent=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:4000/student",{name,phone,email,address})
         .then((res)=>{
            alert("Student data added");
            setName("");
            setPhone("");
            setEmail("");
            setAddress("");
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
                            <input type='text' name='address' placeholder='Address' className='form-control' value={address} onChange={(e)=>setAddress(e.target.value)}/>
                        </div>
                        <div>
                            <input type='submit'  value="Add Student" className='btn btn-sucess' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
       </section>
     </div>
   )
 }
 
 export default Register
 