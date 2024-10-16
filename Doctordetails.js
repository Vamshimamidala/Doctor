import axios from 'axios';
import React, { useState } from 'react'

const Doctordetails = () => {
    const [name,setName]=useState("");
    const [exp,setExp]=useState("");
    const [treatment,setTreatment]=useState("");
    const [hosp,setHosp]=useState("");
 
    const  addDoctor=(e)=>{
        axios.post("http://localhost:4000/doctor",{name,exp,treatment,hosp})
        .then((res)=>{
           alert("doctor data added");
           setName("");
           setExp("");
            setTreatment("");
            setHosp("");
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
                   <form onSubmit={addDoctor}>
                       <div className='mb-3'>
                           <input type='text' name='name' placeholder='Name' className='form-control' value={name} onChange={(e)=>setName(e.target.value)}/>
                       </div>
                       <div className='mb-3'>
                           <input type='text' name='exp' placeholder='doctor experice' className='form-control' value={exp} onChange={(e)=>setExp(e.target.value)}/>
                       </div>
                       <div className='mb-3'>
                           <input type='text' name='treatment' placeholder='treatment' className='form-control' value={treatment} onChange={(e)=>setTreatment(e.target.value)}/>
                       </div>
                       <div className='mb-3'>
                           <input type='text' name='hosp' placeholder='hospital' className='form-control' value={hosp} onChange={(e)=>setHosp(e.target.value)}/>
                       </div>
                       <div>
                           <input type='submit'  value="Add doctor" className='btn btn-sucess' />
                       </div>
                   </form>
               </div>
           </div>
       </div>
      </section>
    </div>
  )
}

export default Doctordetails
