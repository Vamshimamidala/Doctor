import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const Editemployee = () => {
    const [name,setName]=useState("");
    const [phone,setPhone]=useState("");
    const [email,setEmail]=useState("");
    const [ designation,setDesignation]=useState("");
    const [salary,setSalary]=useState("")
    let {id} = useParams();
    const navigate=useNavigate();
    useEffect(()=>{
        axios.get(`http://localhost:4000/employee/${id}`,{name,phone,email,designation,salary})
        .then((res)=>{
           setName(res.data.name);
           setPhone(res.data.phone);
           setEmail(res.data.email);
           setDesignation(res.data.designation);
           setSalary(res.data.salary);
        })
        .catch((err)=>{
            console.log(err)
        })
    },[]);
    const updateStudent=((e)=>{
        e.preventDefault();
        axios.put(`http://localhost:4000/employee/${id}`,{name,phone,email,designation,salary})
         .then((res)=>{
            alert("Employee data added");
             navigate("/empdelete")
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
                        <h1 className='text-center' style={{color:"red"}}>Edit the Employee details</h1>
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
                            <input type='text' name='designation' placeholder='Designation' className='form-control' value={designation} onChange={(e)=>setDesignation(e.target.value)}/>
                        </div>
                        <div className='mb-3'>
                            <input type='text' name='salary' placeholder='salary' className='form-control' value={salary} onChange={(e)=>setSalary(e.target.value)}/>
                        </div>
                        <div>
                            <input type='submit'  value="Update Employee" className='btn btn-sucess' />
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Editemployee
