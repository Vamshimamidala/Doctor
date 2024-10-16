import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Deleteoffer = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:4000/offer/")
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);  

    const deleteoffer = (tid) => {
        axios.delete(`http://localhost:4000/offer/${tid}`)
            .then((res) => {
                alert("Offer deleted successfully.");
                setData(data.filter(offer => offer._id !== tid));  
            })
            .catch((err) => {
                alert("Failed to delete the offer. Please try again.");
            });
    };

    return (
        <div>
            <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-10">
                            <h2 className="text-center mb-4" style={{ fontWeight: 'bold', color: '#333' }}>Available Offers</h2>
                            <div className="table-responsive">
                                <table className="table table-hover table-striped shadow-lg">
                                    <thead className="thead-dark">
                                        <tr>
                                            <th scope="col">Offer</th>
                                            <th scope="col">Description</th>
                                            <th scope="col" className="text-center">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.length > 0 ? (
                                            data.map((offer) => (
                                                <tr key={offer._id}>
                                                    <td>{offer.offer}</td>
                                                    <td>{offer.tdesc}</td>
                                                    <td className="text-center">
                                                        <button
                                                            className="btn btn-danger"
                                                            style={{ borderRadius: '20px' }}
                                                            onClick={() => deleteoffer(offer._id)}
                                                        >
                                                            Delete
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="3" className="text-center">No offers available</td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Deleteoffer;
