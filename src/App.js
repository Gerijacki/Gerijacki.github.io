import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useParams } from 'react-router-dom';
import LoadScripts from './components/cat/Loadscripts';
import LoadingAnimation from './components/cat/Loading';
import './assets/themify-icons/css/themify-icons.css';
import './assets/css/style.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/:lang" element={<LanguageWrapper />} />
        <Route path="*" element={<Navigate to="/cat" />} />
      </Routes>
    </Router>
  );
};

const LanguageWrapper = () => {
  const { lang } = useParams();

  let componentsPath;
  switch (lang) {
    case 'en':
      componentsPath = './components/en';
      break;
    case 'es':
      componentsPath = './components/es';
      break;
    case 'ca':
    default:
      componentsPath = './components/cat';
      break;
  }

  const Header = React.lazy(() => import(`${componentsPath}/Header`));
  const Navbar = React.lazy(() => import(`${componentsPath}/Navbar`));
  const About = React.lazy(() => import(`${componentsPath}/About`));
  const Resume = React.lazy(() => import(`${componentsPath}/Resume`));
  const Projects = React.lazy(() => import(`${componentsPath}/Projects`));
  const Footer = React.lazy(() => import(`${componentsPath}/Footer`));

  return (
    // <React.Suspense fallback={<LoadingAnimation />}>

    <React.Suspense fallback={<LoadingAnimation />}>
      <div className="App">
        <Header />
        <Navbar />
        <About />
        <Resume />
        <Projects />
        <Footer />
        <LoadScripts />
      </div>
    </React.Suspense>
  );
};

export default App;
