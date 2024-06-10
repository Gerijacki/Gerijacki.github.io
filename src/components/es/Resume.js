import React from 'react';

const Resume = () => {
  return (
    <section className="section" id="resumen">
      <div className="container">
        <h2 className="mb-5"><span className="text-danger">Mi</span> Resumen</h2>
        <div className="row">
          <div className="col-md-6 col-lg-4">
            <div className="card">
              <div className="card-header">
                <div className="mt-2">
                  <h4>Experiencia</h4>
                  <span className="line"></span>
                </div>
              </div>
              <div className="card-body">
                <h6 className="title text-danger">Desarrollo de aplicaciones multiplataforma en una empresa del sector farmacéutico.</h6>
                <p className="subtitle">04/2024 - Actualidad | Becario (Dual)</p>
                <hr />
                <h6 className="title text-danger">Técnico informático en una escuela pública.</h6>
                <p className="subtitle">10/2022 - 06/2023 | Becario</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="card">
              <div className="card-header">
                <div className="mt-2">
                  <h4>Estudios</h4>
                  <span className="line"></span>
                </div>
              </div>
              <div className="card-body">
                <h6 className="title text-danger">Ciclo superior de desarrollo de aplicaciones multiplataforma.</h6>
                <p className="subtitle">09/2023 - Actualidad | DAM</p>
                <hr />
                <h6 className="title text-danger">Ciclo medio de sistemas microinformáticos y redes.</h6>
                <p className="subtitle">09/2021 - 05/2023 | SMX</p>
                <hr />
                <h6 className="title text-danger">Educación Secundaria Obligatoria. Itinerario Tecnológico.</h6>
                <p className="subtitle">09/2017 - 07/2021 | ESO</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <div className="card-header">
                <div className="pull-left">
                  <h4 className="mt-2">Herramientas</h4>
                  <span className="line"></span>
                </div>
              </div>
              <div className="card-body pb-2">
                <h6>Web (HTML / CSS / PHP / Laravel / Nodejs)</h6>
                <div className="progress mb-3">
                  <div className="progress-bar bg-danger" role="progressbar" style={{ width: '83%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <h6>Java</h6>
                <div className="progress mb-3">
                  <div className="progress-bar bg-danger" role="progressbar" style={{ width: '50%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <h6>Sistemas Operativos (Linux / bash / active directory)</h6>
                <div className="progress mb-3">
                  <div className="progress-bar bg-danger" role="progressbar" style={{ width: '80%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <h6>Python</h6>
                <div className="progress mb-3">
                  <div className="progress-bar bg-danger" role="progressbar" style={{ width: '85%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <h6>Ofimática y redes sociales</h6>
                <div className="progress mb-3">
                  <div className="progress-bar bg-danger" role="progressbar" style={{ width: '95%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <div className="pull-left">
                  <h4 className="mt-2">Idiomas</h4>
                  <span className="line"></span>
                </div>
              </div>
              <div className="card-body pb-2">
                <h6>Inglés (B2)</h6>
                <div className="progress mb-3">
                  <div className="progress-bar bg-danger" role="progressbar" style={{ width: '50%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <h6>Catalán (Nativo)</h6>
                <div className="progress mb-3">
                  <div className="progress-bar bg-danger" role="progressbar" style={{ width: '99%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <h6>Castellano</h6>
                <div className="progress mb-3">
                  <div className="progress-bar bg-danger" role="progressbar" style={{ width: '80%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
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
