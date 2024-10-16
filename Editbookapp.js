import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Editbookapp = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:4000/book/")
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const deletebook = (bid) => {
        axios.delete(`http://localhost:4000/book/${bid}`)
            .then((res) => {
                alert("Appointment data deleted");
                setData(data.filter(item => item._id !== bid)); // Remove the deleted record from state
            })
            .catch((err) => {
                alert("Failed to delete. Please try again.");
            });
    };

    return (
        <div>
            <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="container">
                    <h2 className="text-center mb-4" style={{ color: '#333', fontWeight: '600' }}>Manage Booked Appointments</h2>
                    <div className="row justify-content-center">
                        <div className="col-md-10">
                            <div className="table-responsive shadow-lg p-4 bg-white rounded" style={{ overflowX: 'auto' }}>
                                <table className="table table-hover table-bordered">
                                    <thead className="table-dark">
                                        <tr>
                                            <th>Name</th>
                                            <th>Phone</th>
                                            <th>Email</th>
                                            <th>Address</th>
                                            <th>Subject</th>
                                            <th>Action</th>
                                            <th>status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((bookap) => (
                                            <tr key={bookap._id}>
                                                <td>{bookap.name}</td>
                                                <td>{bookap.phone}</td>
                                                <td>{bookap.email}</td>
                                                <td>{bookap.address}</td>
                                                <td>{bookap.subject}</td>
                                                <td>{bookap.status}</td>
                                                <td>
                                                    <button
                                                        className="btn btn-danger btn-sm"
                                                        onClick={() => deletebook(bookap._id)}
                                                    >
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                {data.length === 0 && (
                                    <div className="text-center">
                                        <p className="text-muted">No appointments found.</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Editbookapp;
