import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const EditStudent = () => {
    const [name,setName]=useState("");
    const [phone,setPhone]=useState("");
    const [email,setEmail]=useState("");
    const [address,setAddress]=useState("");
    let {id} = useParams();
    const navigate=useNavigate();
    useEffect(()=>{
        axios.get(`http://localhost:4000/student/${id}`,{name,phone,email,address})
        .then((res)=>{
           setName(res.data.name);
           setPhone(res.data.phone);
           setEmail(res.data.email);
           setAddress(res.data.address);
        })
        .catch((err)=>{
            console.log(err)
        })
    },[]);
    const updateStudent=((e)=>{
        e.preventDefault();
        axios.put(`http://localhost:4000/student/${id}`,{name,phone,email,address})
         .then((res)=>{
            alert("Student data added");
             navigate("/delete")
         })
         .catch((err)=>{
            alert("fail to add data");
         })
    })
  return (
    <div>
        <section>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <h1 className='text-center' style={{color:"red"}}>Edit the Students</h1>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className='container py-4'>
                <div className='row'>
                    <div className='col-md-4'></div>
                    <div className='col-md-4'>
                    <form onSubmit={updateStudent} >
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
                            <input type='submit'  value="Update Student" className='btn btn-sucess' />
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default EditStudent
