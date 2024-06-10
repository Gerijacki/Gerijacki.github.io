import React, { useEffect } from 'react';

const Navbar = () => {
    useEffect(() => {
        const languageSelect = document.getElementById('languageSelect');

        const handleLanguageChange = (event) => {
            const selectedLanguage = event.target.value;
            let url;

            switch (selectedLanguage) {
                case 'es':
                    url = '/es';
                    break;
                case 'en':
                    url = '/en';
                    break;
                case 'cat':
                    url = '/cat';
                    break;
                default:
                    url = '/';
            }

            if (url) {
                window.location.assign(url);
            }
        };

        if (languageSelect) {
            languageSelect.addEventListener('change', handleLanguageChange);
        }

        return () => {
            if (languageSelect) {
                languageSelect.removeEventListener('change', handleLanguageChange);
            }
        };
    }, []);

    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-white" data-spy="affix" data-offset-top="510">
            <div className="container">
                <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse mt-sm-20 navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a href="#home" className="nav-link">Inici</a>
                        </li>
                        <li className="nav-item">
                            <a href="#about" className="nav-link">Sobre mi</a>
                        </li>
                        <li className="nav-item">
                            <a href="#resume" className="nav-link">Coneixements</a>
                        </li>
                        <li className="nav-item">
                            <a href="#projectes" className="nav-link">Projectes</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav brand">
                        <img src="/imgs/avatar.jpg" alt="" className="brand-img" />
                        <li className="brand-txt">
                            <h5 className="brand-title">Gerard Loriz</h5>
                            <div className="brand-subtitle">Dissenyador Web | Tècnic informàtic</div>
                        </li>
                    </ul>

                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a href="#about" className="nav-link">Contacte</a>
                        </li>
                    </ul>
                    <div className="language-select-container">
                        <select id="languageSelect" defaultValue="cat">
                            <option value="cat">Català</option>
                            <option value="es">Español</option>
                            <option value="en">English</option>
                        </select>
                        <i className="fas fa-language"></i>

                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
