import axios from 'axios';
import React, { useState } from 'react';

const BookAppoinment = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [subject, setSubject] = useState("");
    const [status, setStatus] = useState("pending");

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
                setStatus("")
            })
            .catch((err) => {
                alert("Try again after some time.");
            });
    };

    return (
        <div>

            <section className="bg-gradient-primary py-5" style={{ background: 'linear-gradient(120deg, #f6d365 0%, #fda085 100%)' }}>
                <div className="container">
                    <div className="row justify-content-center">
                      <div className='col-md-7'></div>
                        <div className="col-md-5">
                            <div className="card p-4 shadow-lg border-0" style={{ borderRadius: '20px' }}>
                                <h3 className="text-center mb-4" style={{ fontWeight: 'bold', color: '#333' }}>Book an Appointment</h3>
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
                                    <div className="mb-3">
                                        <input
                                            type="hidden"
                                            name="status"
                                             
                                            className="form-control p-3"
                                            value={status}
                                            
                                            style={{ borderRadius: '10px' }}
                                        />
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
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BookAppoinment;
