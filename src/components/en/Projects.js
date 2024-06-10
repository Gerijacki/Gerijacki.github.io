import React from 'react';

const Projects = () => {
  return (
    <section className="section" id="projects">
      <div className="container">
        <h2 className="mb-5 pb-4"><span className="text-danger">My</span> Projects</h2>
        <div className="row">
          <div className="col-md-4 col-sm-6">
            <div className="card mb-5">
              <div className="card-header has-icon">
                <i className="ti-bar-chart text-danger" aria-hidden="true"></i>
              </div>
              <div className="card-body px-4 py-3">
                <h5 className="mb-3 card-title text-dark">CF PBB LA ROCA</h5>
                <p className="subtitle">Development of the official website of the <em> Club de futbol Penya blanca i blava la roca</em><br /><a href="https://cfpbblaroca.com">Web</a></p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="card mb-5">
              <div className="card-header has-icon">
                <i className="ti-write text-danger" aria-hidden="true"></i>
              </div>
              <div className="card-body px-4 py-3">
                <h5 className="mb-3 card-title text-dark">EduQuack</h5>
                <p className="subtitle">Social network focused on a <em> school intranet </em>. Allows to communicate news
                  to students, chat with each other, and form groups with teachers.<br /><a
                    href="https://github.com/DuckHats/eduQuack">Github</a></p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="card mb-5">
              <div className="card-header has-icon">
                <i className="ti-vector text-danger" aria-hidden="true"></i>
              </div>
              <div className="card-body px-4 py-3">
                <h5 className="mb-3 card-title text-dark">Google-SignIn</h5>
                <p className="subtitle">GitHub project on how to make a phishing server based on the tool
                  zPhisher.<br /><a href="https://github.com/SergiGiribet/google-SignIn">Github</a></p>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6">
            <div className="card mb-5">
              <div className="card-header has-icon">
                <i className="ti-package text-danger" aria-hidden="true"></i>
              </div>
              <div className="card-body px-4 py-3">
                <h5 className="mb-3 card-title text-dark">Home_Server</h5>
                <p className="subtitle">Auto-configuration script for a Linux server for a home
                  environment.<br /><a href="https://github.com/Gerijacki/Home_server">Github</a></p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="card mb-5">
              <div className="card-header has-icon">
                <i className="ti-map-alt text-danger" aria-hidden="true"></i>
              </div>
              <div className="card-body px-4 py-3">
                <h5 className="mb-3 card-title text-dark">Shadowbyte</h5>
                <p className="subtitle">Basic utility application for daily use made with Python.<br /><a
                    href="https://github.com/Gerijacki/Shadowbyte">Github</a></p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="card mb-5">
              <div className="card-header has-icon">
                <i className="ti-support text-danger" aria-hidden="true"></i>
              </div>
              <div className="card-body px-4 py-3">
                <h5 className="mb-3 card-title text-dark">Cyber_Startupv2</h5>
                <p className="subtitle">This repository serves as a centralized hub for various
                  cybersecurity-related materials, including scripts, resources, and
                  information.<br /><a href="https://github.com/Gerijacki/Cyber_Startupv2">Github</a></p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default Projects;
