import axios from 'axios';
import React, { useState } from 'react';

const Addoffer = () => {
    const [offer, setOffer] = useState("");
    const [tdesc, setTdesc] = useState("");

    const addoffer = (e) => {
        e.preventDefault();
        axios.post("http://localhost:4000/offer", { offer, tdesc })
            .then((res) => {
                alert("Offer added successfully");
                setOffer("");
                setTdesc("");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div>
            <section className="bg-light py-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="card shadow-lg p-4">
                                <h3 className="text-center mb-4" style={{ color: '#333', fontWeight: 'bold' }}>Add New Offer</h3>
                                <form onSubmit={addoffer}>
                                    <div className="mb-3">
                                        <input
                                            type="text"
                                            placeholder="Offer Name"
                                            className="form-control p-3"
                                            value={offer}
                                            onChange={(e) => setOffer(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <textarea
                                            className="form-control p-3"
                                            placeholder="Description"
                                            value={tdesc}
                                            onChange={(e) => setTdesc(e.target.value)}
                                            rows="4"
                                            required
                                        ></textarea>
                                    </div>
                                    <div className="text-center">
                                        <input
                                            type="submit"
                                            value="Add Offer"
                                            className="btn btn-success btn-lg px-5"
                                            style={{ borderRadius: '30px' }}
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

export default Addoffer;
