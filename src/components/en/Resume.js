import React from 'react';

const Resume = () => {
  return (
    <section className="section" id="resume">
      <div className="container">
        <h2 className="mb-5"><span className="text-danger">My</span> Resume</h2>
        <div className="row">
          <div className="col-md-6 col-lg-4">
            <div className="card">
              <div className="card-header">
                <div className="mt-2">
                  <h4>Experience</h4>
                  <span className="line"></span>
                </div>
              </div>
              <div className="card-body">
                <h6 className="title text-danger">Multiplatform application development in a pharmaceutical company.</h6>
                <p className="subtitle">04/2024 - Present | Intern (Dual)</p>
                <hr />
                <h6 className="title text-danger">IT Technician in a public school.</h6>
                <p className="subtitle">10/2022 - 06/2023 | Intern</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="card">
              <div className="card-header">
                <div className="mt-2">
                  <h4>Education</h4>
                  <span className="line"></span>
                </div>
              </div>
              <div className="card-body">
                <h6 className="title text-danger">Advanced diploma in multiplatform application development.</h6>
                <p className="subtitle">09/2023 - Present | DAM</p>
                <hr />
                <h6 className="title text-danger">Intermediate diploma in microcomputer systems and networks.</h6>
                <p className="subtitle">09/2021 - 05/2023 | SMX</p>
                <hr />
                <h6 className="title text-danger">Compulsory Secondary Education. Technological Itinerary.</h6>
                <p className="subtitle">09/2017 - 07/2021 | ESO</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <div className="card-header">
                <div className="pull-left">
                  <h4 className="mt-2">Skills</h4>
                  <span className="line"></span>
                </div>
              </div>
              <div className="card-body pb-2">
                <h6>Web (HTML / CSS / PHP / Laravel / Nodejs)</h6>
                <div className="progress mb-3">
                  <div className="progress-bar bg-danger" role="progressbar" style={{ width: '83%' }}
                    aria-valuenow="83" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <h6>Java</h6>
                <div className="progress mb-3">
                  <div className="progress-bar bg-danger" role="progressbar" style={{ width: '50%' }}
                    aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <h6>Operating Systems (Linux / bash / Active Directory)</h6>
                <div className="progress mb-3">
                  <div className="progress-bar bg-danger" role="progressbar" style={{ width: '80%' }}
                    aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <h6>Python</h6>
                <div className="progress mb-3">
                  <div className="progress-bar bg-danger" role="progressbar" style={{ width: '85%' }}
                    aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <h6>Office Tools and Social Networks</h6>
                <div className="progress mb-3">
                  <div className="progress-bar bg-danger" role="progressbar" style={{ width: '95%' }}
                    aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <div className="pull-left">
                  <h4 className="mt-2">Languages</h4>
                  <span className="line"></span>
                </div>
              </div>
              <div className="card-body pb-2">
                <h6>English (B2)</h6>
                <div className="progress mb-3">
                  <div className="progress-bar bg-danger" role="progressbar" style={{ width: '50%' }}
                    aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <h6>Catalan (Native)</h6>
                <div className="progress mb-3">
                  <div className="progress-bar bg-danger" role="progressbar" style={{ width: '99%' }}
                    aria-valuenow="99" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <h6>Spanish</h6>
                <div className="progress mb-3">
                  <div className="progress-bar bg-danger" role="progressbar" style={{ width: '80%' }}
                    aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
