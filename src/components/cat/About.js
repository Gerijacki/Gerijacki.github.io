import React from 'react';

const About = () => {
  return (
    <div className="container-fluid">
        <div id="about" className="row about-section">
            <div className="col-lg-4 about-card">
                <h3 className="font-weight-light">Qui soc?</h3>
                <p className="mt-20">
                    M'apassiona la informàtica en tots els seus aspectes, especialment en la creació web, la programació
                    i la ciberseguretat.
                    Aporto una dedicació meticulosa a cada
                    projecte, des de la seva concepció fins a la seva implementació, garantint tant la seva
                    funcionalitat com la seva seguretat.
                    <br />
                </p>
                <p className="mt-20">
                    M'agrada superar els reptes tecnològics amb creativitat i determinació. Amb una mentalitat de
                    millora contínua, busco innovar constantment per proporcionar solucions informàtiques efectives i
                    segures. Estic decidit a mantenir-me a l'avantguarda de les últimes tendències tecnològiques,
                    assegurant-me que cada projecte reflecteixi el meu compromís amb l'excel·lència i la fiabilitat.
                    <br />
                </p>
            </div>
            <div className="col-lg-4 about-card">
                <h3 className="font-weight-light">Informació Personal i Contacte</h3>
                <span className="line mb-5"></span>
                <ul className="mt40 info list-unstyled">
                    <li><span>Data de naixement</span> : 12/12/2005</li>
                    <li><span>Email</span> : gerijackidev@gmail.com</li>
                </ul>
                <ul className="social-icons pt-3">
                    <li className="social-item"><a className="social-link"
                            href="https://x.com/byjacki12?t=8xClF2LnxDgyy8-hA3rsKQ&s=09"><i className="ti-twitter"
                                aria-hidden="true"></i></a></li>
                    <li className="social-item"><a className="social-link" href="https://www.instagram.com/byjacki12/"><i
                                className="ti-instagram" aria-hidden="true"></i></a></li>
                    <li className="social-item"><a className="social-link" href="https://github.com/Gerijacki"><i
                                className="ti-github" aria-hidden="true"></i></a></li>
                    <li className="social-item"><a className="social-link" href="https://tryhackme.com/p/F1ch3u5"><i
                                className="ti-envelope" aria-hidden="true"></i></a></li>
                </ul>
            </div>
            <div className="col-lg-4 about-card">
                <h3 className="font-weight-light">Serveis</h3>
                <span className="line mb-5"></span>
                <div className="row">
                    <div className="col-1 text-danger pt-1"><i className="ti-widget icon-lg"></i></div>
                    <div className="col-10 ml-auto mr-3">
                        <h6>Disseny Web</h6>
                        <p className="subtitle">Wordpress / Html / Css / PHP</p>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-1 text-danger pt-1"><i className="ti-paint-bucket icon-lg"></i></div>
                    <div className="col-10 ml-auto mr-3">
                        <h6>Gestió de servidors</h6>
                        <p className="subtitle">Gestió de xarxes d'ordinadors en entorns empresarials.</p>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-1 text-danger pt-1"><i className="ti-stats-up icon-lg"></i></div>
                    <div className="col-10 ml-auto mr-3">
                        <h6>Aplicacions Ofimàtiques</h6>
                        <p className="subtitle">Word, Excel, PowerPoint, Xarxes Socials, etc.</p>
                        <hr />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default About;
