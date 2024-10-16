import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import img from './images/doctor.jpg'
import bgg from "./images/bg1.avif"
import Addoffer from '../Adimdashboard/Addoffer';
const Home = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [subject, setSubject] = useState("");
  useEffect(() => {
    
    axios
      .get('http://localhost:4000/treatment')
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []); 
  const booked = (e) => {
    e.preventDefault();
    axios.post("http://localhost:4000/book", { name, phone, email, subject, address })
        .then((res) => {
            alert("Appointment was booked.");
            setName("");
            setPhone("");
            setEmail("");
            setSubject("");
            setAddress("");
        })
        .catch((err) => {
            alert("Try again after some time.");
        });
};
  return (
    <div>
      <div className='container-fluid images'>
        <div className='row'>
          <div className='col-md-12'>
            <img src={img} alt=''/>
          </div>
        </div>
      </div>
      <section className="bg-light py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="text-center mb-4">Treatment List</h1>
              <div className="row g-4">
                {data.map((tdata) => {
                  return (
                    <div className="col-md-4" key={tdata._id}>
                      <div className="card shadow-sm h-100">
                        <div className="card-body text-center">
                          <NavLink to={`/treatmentdetails/${tdata.tname}`} className="text-decoration-none">
                            <h5 className="card-title text-primary">{tdata.tname}</h5>
                          </NavLink>
                           
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
       
      <section>
        <div className='container py-4' style={{backgroundColor:"gray"}}>
          <div className='row'>
            <div className='col-md-5'>
            <form onSubmit={booked}>
                                    <div className="mb-3">
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Name"
                                            className="form-control p-3"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            style={{ borderRadius: '10px' }}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <input
                                            type="text"
                                            name="phone"
                                            placeholder="Phone"
                                            className="form-control p-3"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            style={{ borderRadius: '10px' }}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            className="form-control p-3"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            style={{ borderRadius: '10px' }}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <input
                                            type="text"
                                            name="address"
                                            placeholder="Address"
                                            className="form-control p-3"
                                            value={address}
                                            onChange={(e) => setAddress(e.target.value)}
                                            style={{ borderRadius: '10px' }}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <textarea
                                            className="form-control p-3"
                                            placeholder="Subject"
                                            value={subject}
                                            onChange={(e) => setSubject(e.target.value)}
                                            rows="4"
                                            style={{ borderRadius: '10px' }}
                                        ></textarea>
                                    </div>
                                    <div className="text-center">
                                        <input
                                            type="submit"
                                            value="Book Appointment"
                                            className="btn btn-lg px-5"
                                            style={{
                                                backgroundColor: '#28a745',
                                                color: 'white',
                                                borderRadius: '30px',
                                                transition: 'background-color 0.3s ease'
                                            }}
                                            onMouseOver={(e) => e.target.style.backgroundColor = '#218838'}
                                            onMouseOut={(e) => e.target.style.backgroundColor = '#28a745'}
                                        />
                                    </div>
                                </form>
            </div>
            <div className='col-md-6'>
              <img src={bgg} alt=''/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
