import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Contactuss = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:4000/contact/")
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const deletecontact = (cid) => {
        axios.delete(`http://localhost:4000/contact/${cid}`)
            .then((res) => {
                alert("Contact data deleted");
                setData(data.filter(item => item._id !== cid)); // Remove from state after deletion
            })
            .catch((err) => {
                alert("Failed to delete. Please try again");
            });
    };

    return (
        <div>
            <section className="py-5" style={{ backgroundColor: '#e9f0f7' }}>
                <div className="container">
                    <h2 className="text-center mb-5" style={{ color: '#1f3c88', fontWeight: 'bold' }}>Manage Contacts</h2>
                    <div className="row justify-content-center">
                        <div className="col-md-10">
                            <div className="table-responsive shadow-lg p-4 bg-white rounded">
                                <table className="table table-hover">
                                    <thead className="bg-primary text-white">
                                        <tr>
                                            <th>Name</th>
                                            <th>Phone</th>
                                            <th>Email</th>
                                            <th>Address</th>
                                            <th>Subject</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.length > 0 ? (
                                            data.map((contact) => (
                                                <tr key={contact._id}>
                                                    <td>{contact.name}</td>
                                                    <td>{contact.phone}</td>
                                                    <td>{contact.email}</td>
                                                    <td>{contact.address}</td>
                                                    <td>{contact.subject}</td>
                                                    <td>
                                                        <button
                                                            className="btn btn-danger btn-sm"
                                                            onClick={() => deletecontact(contact._id)}
                                                        >
                                                            Delete
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="6" className="text-center text-muted">
                                                    No contacts found
                                                </td>
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

export default Contactuss;
