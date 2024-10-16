import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './Innerpages/About'
import Treatment from './Innerpages/Treatment'
import BookAppoinment from './Innerpages/BookAppoinment'
import ConactUs from './Innerpages/ConactUs'
import Home from './Innerpages/Home'
import Register from './Innerpages/Register'
import Nopage from './Innerpages/Nopage'
import Studentdata from './Innerpages/Studentdata'
import Delete from './Innerpages/Delete'
import EditStudent from './Innerpages/EditStudent'
import Addemployees from './Addemployees'
import Employeedata from './Innerpages/Employeedata'
import Employeedelete from './Innerpages/Employeedelete'
import Editemployee from './Innerpages/Editemployee'
import Adimlogin from './Adimdashboard/Adimlogin'
import Adimregister from './Adimdashboard/Adimregister'
import Adimdashboard from './Adimdashboard/Adimdashboard'
import Addtreatments from './Adimdashboard/Addtreatments'
import Deletetreatments from './Adimdashboard/Deletetreatments'
import Addoffer from './Adimdashboard/Addoffer'
import Deleteoffer from './Adimdashboard/Deleteoffer'
import Treatmentdetails from './Innerpages/Treatmentdetails'
import Editbookapp from './Adimdashboard/Editbookapp'
import Contactuss from './Adimdashboard/Contactuss'
import Doctordetails from './Adimdashboard/Doctordetails'
import Deletedoctor from './Adimdashboard/Deletedoctor'

const Routing = () => {
  return (
    <>
       <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path="/About" element={<About/>}/>
         <Route path='/TreatMent' element={<Treatment/>}/>
         <Route path='/Book Appoinment' element={<BookAppoinment/>}/>
         <Route path='/Conact Us' element={<ConactUs/>}/> 
         <Route path='/adim' element={<Adimlogin/>}/>
         <Route path='/register' element={<Adimregister/>}/>
         <Route path='/treatmentdetails/:tname' element={<Treatmentdetails/>}/>
         <Route path='/adimdashboard' element={<Adimdashboard/>}>
         <Route path='' element={<Addtreatments/>}/>
         <Route path='deletetreatment' element={<Deletetreatments/>}/>
         <Route path='addoffer' element={<Addoffer/>}/>
         <Route path='deleteoffer' element={<Deleteoffer/>}/>
         <Route path='deletebookapp' element={<Editbookapp/>}/>
         <Route path='contactUss' element={<Contactuss/>}/>
         <Route path='doctor' element={<Doctordetails/>}/>
         <Route path='doctordelete' element={<Deletedoctor/>}/>
         </Route>
         <Route path='*' element={<Nopage/>}/>
       </Routes>
    </>
  )
}

export default Routing
