import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import img from './images/bg2.avif';
 
const Treatmentdetails = () => {
  const [doctor, setDoctor] = useState([]);
  const [treatment, setTreatment] = useState("");
  const { tname } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:4000/doctor/${tname}`)
      .then((res) => {
        setDoctor(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios.get(`http://localhost:4000/treatment/${tname}`)
      .then((res) => {
        setTreatment(res.data[0].tdesc);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [tname]);

  return (
    <div className="treatment-details">
      <div className="container">
        <div className="image-container">
          <img src={img} alt="Treatment" className="treatment-image" />
        </div>
        <div className="tname-container">
          <h2 className="tname-title">{tname}</h2>
        </div>
        <div className="treatment-description">
          <p>{treatment}</p>
        </div>
        <div className="doctor-list">
          {doctor.map((doc, index) => (
            <div key={index} className="doctor-card">
              <p> Doctor Name:{doc.name}</p>
              <p> Experience:{doc.exp}+ years</p>
              <p>Hosptal:{doc.hosp}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Treatmentdetails;