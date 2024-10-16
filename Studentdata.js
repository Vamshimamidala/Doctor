import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Studentdata = () => {
    const [student,setStudent]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:4000/student")
        .then((res)=>{
            setStudent(res.data)
        })
        .catch((err)=>{
            alert(err)
        })
    })
     
  return (
    <div>
      <section>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                <h1 className='text-center' style={{color:"blue"}}>Student Data</h1>
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
                                    <th>Address</th>
                                </tr>
                            </thead>
                            <tbody>
                        {
                            student.map((stu)=>{
                                return(
                                    <tr key={stu._id}>
                                        <td>{stu.name}</td>
                                        <td>{stu.phone}</td>
                                        <td>{stu.email}</td>
                                        <td>{stu.address}</td>
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

export default Studentdata
