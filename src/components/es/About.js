import React from 'react';

const About = () => {
  return (
    <div className="container-fluid">
        <div id="about" className="row about-section">
            <div className="col-lg-4 about-card">
                <h3 className="font-weight-light">¿Quién soy?</h3>
                <p className="mt-20">
                    Me apasiona la informática en todos sus aspectos, especialmente en la creación web, la programación y la ciberseguridad.
                    Aporto una dedicación meticulosa a cada proyecto, desde su concepción hasta su implementación, garantizando tanto su funcionalidad como su seguridad.
                    <br />
                </p>
                <p className="mt-20">
                    Me gusta superar los retos tecnológicos con creatividad y determinación. Con una mentalidad de mejora continua, busco innovar constantemente para proporcionar soluciones informáticas efectivas y seguras. Estoy decidido a mantenerme a la vanguardia de las últimas tendencias tecnológicas, asegurándome de que cada proyecto refleje mi compromiso con la excelencia y la fiabilidad.
                    <br />
                </p>
            </div>
            <div className="col-lg-4 about-card">
                <h3 className="font-weight-light">Información Personal y Contacto</h3>
                <span className="line mb-5"></span>
                <ul className="mt40 info list-unstyled">
                    <li><span>Fecha de nacimiento</span> : 12/12/2005</li>
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
                <h3 className="font-weight-light">Servicios</h3>
                <span className="line mb-5"></span>
                <div className="row">
                    <div className="col-1 text-danger pt-1"><i className="ti-widget icon-lg"></i></div>
                    <div className="col-10 ml-auto mr-3">
                        <h6>Diseño Web</h6>
                        <p className="subtitle">WordPress / HTML / CSS / PHP</p>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-1 text-danger pt-1"><i className="ti-paint-bucket icon-lg"></i></div>
                    <div className="col-10 ml-auto mr-3">
                        <h6>Gestión de servidores</h6>
                        <p className="subtitle">Gestión de redes de ordenadores en entornos empresariales.</p>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-1 text-danger pt-1"><i className="ti-stats-up icon-lg"></i></div>
                    <div className="col-10 ml-auto mr-3">
                        <h6>Aplicaciones Ofimáticas</h6>
                        <p className="subtitle">Word, Excel, PowerPoint, Redes Sociales, etc.</p>
                        <hr />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default About;
