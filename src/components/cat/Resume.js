import React from 'react';

const Resume = () => {
  return (
    <section className="section" id="resume">
    <div className="container">
        <h2 className="mb-5"><span className="text-danger">El Meu</span> Resum</h2>
        <div className="row">
            <div className="col-md-6 col-lg-4">
                <div className="card">
                    <div className="card-header">
                        <div className="mt-2">
                            <h4>Experiència</h4>
                            <span className="line"></span>
                        </div>
                    </div>
                    <div className="card-body">
                        <h6 className="title text-danger">Desenvolupament d'aplicacións multiplataforma en una empresa del sector
                            farmacèutic.</h6>
                        
                        <p className="subtitle">04/2024 - Actualment | Becari(Dual)</p>
                        <hr />
                        <h6 className="title text-danger">Tècnic informàtic en una escola pública.</h6>
                        
                        <p className="subtitle">10/2022 - 06/2023 | Becari</p>
                        {/* <hr />
                        <h6 className="title text-danger">2015 - 2016</h6>
                        <p>UX Designer</p>
                        <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum recusandae, cupiditate ullam dolor ratione repellendus.aliquid repudiandae saepe!.</p> */}
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-lg-4">
                <div className="card">
                    <div className="card-header">
                        <div className="mt-2">
                            <h4>Estudis</h4>
                            <span className="line"></span>
                        </div>
                    </div>
                    <div className="card-body">
                        <h6 className="title text-danger">Cicle superior de desenvolupament d'aplicacions multiplataforma.</h6>
                        
                        <p className="subtitle">09/2023 - Actualment | DAM</p>
                        <hr />
                        <h6 className="title text-danger">Cicle mitjà de sistemes microinformàtics i xarxes.</h6>
                        
                        <p className="subtitle">09/2021 - 05/2023 | SMX</p>
                        <hr />
                        <h6 className="title text-danger">Educació Secundària Obligatòria. Itinerari Tecnològic.</h6>
                        
                        <p className="subtitle">09/2017 - 07/2021 | ESO</p>

                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="card">
                    <div className="card-header">
                        <div className="pull-left">
                            <h4 className="mt-2">Eines</h4>
                            <span className="line"></span>
                        </div>
                    </div>
                    <div className="card-body pb-2">
                        <h6>Web (HTML / CSS / PHP / Laravel / Nodejs)</h6>
                        <div className="progress mb-3">
                            <div className="progress-bar bg-danger" role="progressbar" style={{ width: '83%' }}
                                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <h6>Java</h6>
                        <div className="progress mb-3">
                            <div className="progress-bar bg-danger" role="progressbar" style={{ width: '50%' }}
                                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <h6>Sistemes Operatius (Linux / bash / active directory)</h6>
                        <div className="progress mb-3">
                            <div className="progress-bar bg-danger" role="progressbar" style={{ width: '80%' }}
                                aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <h6>Python</h6>
                        <div className="progress mb-3">
                            <div className="progress-bar bg-danger" role="progressbar" style={{ width: '85%' }}
                                aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <h6>Ofimàtica i xarxes socials</h6>
                        <div className="progress mb-3">
                            <div className="progress-bar bg-danger" role="progressbar" style={{ width: '95%' }}
                                aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <div className="pull-left">
                            <h4 className="mt-2">Idiomes</h4>
                            <span className="line"></span>
                        </div>
                    </div>
                    <div className="card-body pb-2">
                        <h6>Anglès (B2)</h6>
                        <div className="progress mb-3">
                            <div className="progress-bar bg-danger" role="progressbar" style={{ width: '50%' }}
                                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <h6>Català (Materna)</h6>
                        <div className="progress mb-3">
                            <div className="progress-bar bg-danger" role="progressbar" style={{ width: '99%' }}
                                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <h6>Castellà</h6>
                        <div className="progress mb-3">
                            <div className="progress-bar bg-danger" role="progressbar" style={{ width: '80%' }}
                                aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
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
