import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Treatment = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:4000/doctor')
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []); 

  return (
    <div>
      <section className="bg-light py-4" >
        <div className="container p-4" style={{backgroundColor:"gray"}}>
          <div className="row">
            <div className="col-md-12">
              <h1 className="text-center mb-4" style={{color:"white"}}>Doctor List</h1>
              <div className="row g-4">
                {data.map((doctor) => {
                  return (
                    <div className="col-md-4" key={doctor._id}>
                      <div className="card h-100 shadow-sm border-0">
                        <div className="card-body">
                          <h4 className="card-title">{doctor.name}</h4>
                          <p className="card-text">
                            <strong>Experience:</strong> {doctor.exp} years
                          </p>
                          <p className="card-text">
                            <strong>Treatment:</strong> {doctor.treatment}
                          </p>
                          <p className="card-text">
                            <strong>Hospital:</strong> {doctor.hosp}
                          </p>
                        </div>
                        <div className="card-footer bg-transparent text-center">
                          <button className="btn btn-primary">Contact Doctor</button>
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
    </div>
  );
}

export default Treatment;
