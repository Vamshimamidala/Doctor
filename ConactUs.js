import axios from 'axios';
import React, { useState } from 'react';

const ContactUs = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [subject, setSubject] = useState("");

    const contact = (e) => {
        e.preventDefault();
        axios.post("http://localhost:4000/contact", { name, phone, email, address, subject })
            .then((res) => {
                alert("Contact information sent to admin.");
                setName("");
                setPhone("");
                setEmail("");
                setAddress("");
                setSubject("");
            })
            .catch((err) => {
                alert("Try again after some time.");
            });
    };

    return (
        <div>
            <section className="bg-gradient-primary py-5" style={{ background: 'gray' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card p-4 shadow-lg border-0" style={{ borderRadius: '15px' }}>
                                <h3 className="text-center mb-4" style={{ fontWeight: 'bold', color: '#333' }}>Contact Us</h3>
                                <form onSubmit={contact}>
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
                                            value="Contact Us"
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
                        <div className='col-md-6   shadow-lg  d-flex align-items-center'>
                            <div style={{ color: '#fff' }}>
                                <h2>Adress :</h2>
                                <h6>Medicover Fertility</h6>
                                <p>HUDA Techno Enclave, HITEC City, Hyderabad, Telangana 500081</p>
                                <p>Phone: 085220 39764</p>
                                <p>Appointments: medicoverfertility.in, healthplix.com</p>
                                <p>Areas served: HUDA Techno Enclave and nearby areas</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            
        </div>
    );
};

export default ContactUs;
