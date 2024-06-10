import React from 'react';

const Projects = () => {
  return (
    <section className="section" id="projectes">
    <div className="container">
        <h2 className="mb-5 pb-4"><span className="text-danger">Els meus</span> projectes</h2>
        <div className="row">
        <div className="col-md-4 col-sm-6">
                <div className="card mb-5">
                   <div className="card-header has-icon">
                        <i className="ti-bar-chart text-danger" aria-hidden="true"></i>
                    </div>
                    <div className="card-body px-4 py-3">
                        <h5 className="mb-3 card-title text-dark">CF PBB LA ROCA</h5>
                        <p className="subtitle">Desenmvolupament de la pàgina web oficial del <em> Club de futbol Penya blanca i blava la roca</em><br /><a href="https://cfpbblaroca.com">Web</a></p>
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
                        <p className="subtitle">Xarxa social enfocada a una <em> intranet escolar </em>. Permet comunicar novetats
                            als alumnes, parlar entre si i fer grups amb els professors.<br /><a
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
                        <p className="subtitle">Projecte de GitHub sobre com fer un servidor de phishing basat en l'eina
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
                        <p className="subtitle">Script d'autoconfiguració d'un servidor Linux per un entorn
                            domèstic.<br /><a href="https://github.com/Gerijacki/Home_server">Github</a></p>
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
                        <p className="subtitle">Aplicació d'utilitats bàsiques pel dia a dia feta amb Python.<br /><a
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
                        <p className="subtitle">Aquest repositori serveix com a centre centralitzat per a diversos
                            materials relacionats amb la ciberseguretat, inclosos scripts, recursos i
                            informació.<br /><a href="https://github.com/Gerijacki/Cyber_Startupv2">Github</a></p>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</section>
);

}

export default Projects;
