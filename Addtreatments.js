import axios from 'axios'
import React, { useState } from 'react'

const Addtreatments = () => {
    const [tname, setTname] = useState("");
    const [tdesc, setTdesc] = useState("");

    const addTreatment = (e) => {
        e.preventDefault();
        axios.post("http://localhost:4000/treatment", { tname, tdesc })
            .then((res) => {
                alert("Treatment added");
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
                        <div className="col-md-6">
                            <div className="card p-4 shadow-lg">
                                <h3 className="text-center mb-4"></h3>
                                <form onSubmit={addTreatment}>
                                    <div className="mb-3">
                                        <input 
                                            type="text" 
                                            placeholder="Treatment Name" 
                                            className="form-control p-3" 
                                            value={tname} 
                                            onChange={(e) => setTname(e.target.value)} 
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <textarea 
                                            className="form-control p-3" 
                                            placeholder="Description" 
                                            value={tdesc} 
                                            onChange={(e) => setTdesc(e.target.value)}
                                            rows="4"
                                        ></textarea>
                                    </div>
                                    <div className="text-center">
                                        <input 
                                            type="submit" 
                                            value="Add Treatment" 
                                            className="btn btn-success btn-lg px-5" 
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
}

export default Addtreatments;
