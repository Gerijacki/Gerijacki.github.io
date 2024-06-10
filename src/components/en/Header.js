import React from 'react';

const Header = () => {
  return (
    <header className="header" id="home">
        <div className="container">
            <ul className="social-icons pt-3">
                <li className="social-item"><a className="social-link text-light"
                        href="https://x.com/byjacki12?t=8xClF2LnxDgyy8-hA3rsKQ&s=09"><i className="ti-twitter"
                            aria-hidden="true"></i></a></li>
                <li className="social-item"><a className="social-link text-light" href="https://www.instagram.com/byjacki12/"><i
                            className="ti-instagram" aria-hidden="true"></i></a></li>
                <li className="social-item"><a className="social-link text-light" href="https://github.com/Gerijacki"><i
                            className="ti-github" aria-hidden="true"></i></a></li>
                <li className="social-item"><a className="social-link text-light" href="https://tryhackme.com/p/F1ch3u5"><i
                            className="ti-envelope" aria-hidden="true"></i></a></li>
            </ul>
            <div className="header-content">
                <h4 className="header-subtitle">Hello, I'm</h4>
                <h1 className="header-title">Gerard Loriz</h1>
                <h6 className="header-mono">Higher Technician in Multiplatform Applications Development</h6>
            </div>
        </div>
    </header>
  );
}

export default Header;