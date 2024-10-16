import React from 'react';
 
const About = () => {
  return (
    <div>
      <section className="about-section" style={{backgroundColor:"skyblue"}}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              
              <div className="card doctor-card">
                <h1>❤️ Cardiologists (Heart Doctors):</h1>
                <p className="description">
                  <strong>Who They Are:</strong> Cardiologists are the heroes of your cardiovascular system, focusing on everything that keeps your heart and blood vessels healthy and strong.
                </p>
                <p className="section-header"><strong>What They Treat:</strong></p>
                <ul>
                  <li>Heart Disease: From coronary artery disease to heart failure, these doctors tackle it all.</li>
                  <li>Heart Rhythm Disorders: Whether it’s a racing heart or an irregular beat, they can get your rhythm back in sync.</li>
                  <li>High Blood Pressure & Cholesterol: Cardiologists help manage the silent risk factors that could lead to bigger heart problems.</li>
                </ul>
                <p className="section-header"><strong>When to Visit:</strong></p>
                <ul>
                  <li>Chest Pain or Discomfort: Don’t ignore that ache; it could be more serious than you think.</li>
                  <li>Shortness of Breath: If everyday tasks are leaving you breathless, it’s time to get checked.</li>
                  <li>Family History: A family history of heart disease? Early visits can help prevent future issues.</li>
                </ul>
              </div>

              <div className="card doctor-card">
                <h1>🌬 Pulmonologists: Experts in Every Breath You Take</h1>
                <p className="description">
                  <strong>Who They Are:</strong> Pulmonologists are the masters of your respiratory system, making sure your lungs function at their best so you can breathe easy.
                </p>
                <p className="section-header"><strong>What They Treat:</strong></p>
                <ul>
                  <li>Asthma & COPD: These experts help you manage life's breathless moments.</li>
                  <li>Lung Infections: Treat serious infections like pneumonia and tuberculosis.</li>
                  <li>Sleep Apnea: Helping you get back to restful nights by treating sleep-related disorders.</li>
                </ul>
                <p className="section-header"><strong>When to Visit:</strong></p>
                <ul>
                  <li>Chronic Cough: If a nagging cough won’t go away, visit a lung specialist.</li>
                  <li>Difficulty Breathing: Trouble catching your breath or feeling wheezy? Don’t wait!</li>
                  <li>Smoking History: Even if you’ve quit smoking, lung checkups are crucial for early detection.</li>
                </ul>
              </div>

              <div className="card doctor-card">
                <h1>🧠 Neurologists: Keep Your Brain and Nerves in Check</h1>
                <p className="description">
                  <strong>Who They Are:</strong> Neurologists focus on your nervous system and help navigate brain and nerve disorders.
                </p>
                <p className="section-header"><strong>What They Treat:</strong></p>
                <ul>
                  <li>Migraines & Headaches: Chronic headaches? Neurologists offer relief and pinpoint causes.</li>
                  <li>Stroke: Neurologists are critical in recovery and prevention of future strokes.</li>
                  <li>Neurodegenerative Disorders: Experts in managing long-term care for conditions like Alzheimer’s and Parkinson’s.</li>
                </ul>
                <p className="section-header"><strong>When to Visit:</strong></p>
                <ul>
                  <li>Frequent Memory Loss or Confusion: Trouble focusing? Time for a neurologist visit.</li>
                  <li>Seizures: Seizures are serious, and a neurologist will investigate the cause.</li>
                  <li>Numbness or Tingling: Unusual sensations could point to nerve damage.</li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
