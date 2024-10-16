import React from 'react';
import { NavLink } from 'react-router-dom';

const Adimslider = () => {
  return (
    <div className="admin-slider p-3 shadow-sm">
      <ul className="list-unstyled">
        <li className="mb-3">
          <NavLink to="" className="nav-link">Add Treatment</NavLink>
        </li>
        <li className="mb-3">
          <NavLink to="deletetreatment" className="nav-link">Edit & Delete Treatment</NavLink>
        </li>
        <li className="mb-3">
          <NavLink to="addoffer" className="nav-link">Add Offers</NavLink>
        </li>
        <li className="mb-3">
          <NavLink to="deleteoffer" className="nav-link">Edit & Delete Offers</NavLink>
        </li>
        <li className="mb-3">
          <NavLink to="deletebookapp" className="nav-link">Edit & Delete Book Appointment</NavLink>
        </li>
        <li className="mb-3">
          <NavLink to="contactUss" className="nav-link">Edit & Delete Contact Us</NavLink>
        </li>
        <li className="mb-3">
          <NavLink to="doctor" className="nav-link">Doctor</NavLink>
        </li>
        <li className="mb-3">
          <NavLink to="doctordelete" className="nav-link">Delete Doctor</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Adimslider;
