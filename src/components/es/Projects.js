import React from 'react';

const Projects = () => {
  return (
    <section className="section" id="proyectos">
      <div className="container">
        <h2 className="mb-5 pb-4"><span className="text-danger">Mis</span> proyectos</h2>
        <div className="row">
          <div className="col-md-4 col-sm-6">
            <div className="card mb-5">
              <div className="card-header has-icon">
                <i className="ti-bar-chart text-danger" aria-hidden="true"></i>
              </div>
              <div className="card-body px-4 py-3">
                <h5 className="mb-3 card-title text-dark">CF PBB LA ROCA</h5>
                <p className="subtitle">Desarrollo de la página web oficial del <em>Club de fútbol Penya blanca i blava la roca</em><br /><a href="https://cfpbblaroca.com">Web</a></p>
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
                <p className="subtitle">Red social enfocada a una <em>intranet escolar</em>. Permite comunicar novedades a los alumnos, hablar entre ellos y hacer grupos con los profesores.<br /><a href="https://github.com/DuckHats/eduQuack">Github</a></p>
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
                <p className="subtitle">Proyecto de GitHub sobre cómo hacer un servidor de phishing basado en la herramienta zPhisher.<br /><a href="https://github.com/SergiGiribet/google-SignIn">Github</a></p>
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
                <p className="subtitle">Script de autoconfiguración de un servidor Linux para un entorno doméstico.<br /><a href="https://github.com/Gerijacki/Home_server">Github</a></p>
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
                <p className="subtitle">Aplicación de utilidades básicas para el día a día hecha con Python.<br /><a href="https://github.com/Gerijacki/Shadowbyte">Github</a></p>
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
                <p className="subtitle">Este repositorio sirve como un centro centralizado para diversos materiales relacionados con la ciberseguridad, incluidos scripts, recursos e información.<br /><a href="https://github.com/Gerijacki/Cyber_Startupv2">Github</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
