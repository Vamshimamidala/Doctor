import axios from 'axios';
import React, { useState } from 'react'

const Addemployees = () => {
    const [name,setName]=useState("");
    const [phone,setPhone]=useState("");
    const [email,setEmail]=useState("");
    const [designation,setDesignation]=useState("");
    const [salary, setSalary]=useState("")
    const  addEmployee=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:4000/employee",{name,phone,email,designation,salary})
         .then((res)=>{
            alert(" employee data added");
            setName("");
            setPhone("");
            setEmail("");
            setDesignation("");
            setSalary("");
         })
         .catch((err)=>{
            alert("Fail to add the employee data");
         })
        
    }
   return (
     <div>
        <section>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <h1 className='text-center' style={{color:"red"}}>Add Employees</h1>
                    </div>
                </div>
            </div>
        </section>
       <section>
        <div className='container'>
            <div className='row'>
                <div className='col-md-3'></div>
                <div className='col-md-6'>
                    <form >
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
                            <input type='text' name='designation' placeholder='Designation' className='form-control' value={designation} onChange={(e)=> setDesignation(e.target.value)}/>
                        </div>
                        <div className='mb-3'>
                            <input type='text' name='salary' placeholder='Salary' className='form-control' value={salary} onChange={(e)=>  setSalary(e.target.value)}/>
                        </div>
                        <div>
                            <input type='button'  value="Add Employee" className='btn btn-sucess' onClick={addEmployee} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
       </section>
     </div>
   )
 }
 

export default Addemployees
