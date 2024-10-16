import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Deletetreatments = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:4000/treatment/")
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []); 

    const deletetreatment = (tid) => {
        axios.delete(`http://localhost:4000/treatment/${tid}`)
            .then((res) => {
                alert("Treatment data deleted");
                setData(data.filter(treatment => treatment._id !== tid)); 
            })
            .catch((err) => {
                alert("Failed to delete. Please try again.");
            });
    };

    return (
        <div>
            <section className="py-5" style={{ backgroundColor: '#f7f7f7' }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-10">
                            <h2 className="text-center mb-4" style={{ fontWeight: 'bold', color: '#333' }}>Available Treatments</h2>
                            <div className="table-responsive">
                                <table className="table table-hover table-striped shadow-lg">
                                    <thead className="thead-light">
                                        <tr>
                                            <th scope="col">Treatment Name</th>
                                            <th scope="col">Description</th>
                                            <th scope="col" className="text-center">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.length > 0 ? (
                                            data.map((treatment) => (
                                                <tr key={treatment._id}>
                                                    <td>{treatment.tname}</td>
                                                    <td>{treatment.tdesc}</td>
                                                    <td className="text-center">
                                                        <button
                                                            className="btn btn-danger"
                                                            style={{ borderRadius: '20px' }}
                                                            onClick={() => deletetreatment(treatment._id)}
                                                        >
                                                            Delete
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="3" className="text-center">No treatments available</td>
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

export default Deletetreatments;
