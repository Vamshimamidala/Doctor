import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
 
 const Employeedelete = () => {
    const [ employee, setEmployee]=useState([]);
    useEffect(()=>{
        axios.get ("http://localhost:4000/employee")
        .then((res)=>{
             setEmployee(res.data)
        })
        .catch((err)=>{
            alert(err)
        })
    })
     const deleteEmployee=(eid)=>{
        axios.delete(`http://localhost:4000/employee/${eid}`)
        .then((res)=>{
            alert(" Employee data deleted");
        })
        .catch((err)=>{
            alert("Fail to delete the please try again")
        })
     }
  return (
    <div>
      <section>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                <h1 className='text-center' style={{color:"blue"}}> Employee Data</h1>
                </div>
            </div>
        </div>
      </section>
      <section className='py-4'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='table-responsive'>
                        <table className='table table-bordered'>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Phone</th>
                                    <th>Email</th>
                                    <th>Designation</th>
                                    <th>Salary</th>
                                </tr>
                            </thead>
                            <tbody>
                        {
                             employee.map((emp)=>{
                                return(
                                    <tr key={emp._id}>
                                        <td>{emp.name}</td>
                                        <td>{emp.phone}</td>
                                        <td>{emp.email}</td>
                                        <td>{emp.designation}</td>
                                        <td>{emp.salary}</td>
                                        <td>
                                            <button className='btn btn-danger me-3' onClick={(e)=>deleteEmployee(emp._id)}>Delete</button>
                                           <NavLink to={`/editemployee/${emp._id}`}>
                                           <button className='btn btn-sucess' style={{color:"blue"}}>Update</button>
                                           </NavLink>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

 
 
 export default  Employeedelete
 