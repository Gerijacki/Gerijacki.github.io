import React, { useEffect } from 'react';

const LoadScripts = () => {
  useEffect(() => {
    const scripts = [
      '/vendors/jquery/jquery-3.4.1.js',
      '/vendors/bootstrap/bootstrap.bundle.js',
      '/vendors/bootstrap/bootstrap.affix.js',
      '/vendors/isotope/isotope.pkgd.js',
      '/js/script.js'
      ];

    const scriptElements = [];

    const loadScript = async (src) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.onload = () => {
          scriptElements.push(script);
          resolve();
        };
        script.onerror = () => reject(new Error(`Failed to load script ${src}`));
        document.body.appendChild(script);
      });
    };

    const loadAllScripts = async () => {
      try {
        for (const src of scripts) {
          await loadScript(src);
        }
      } catch (error) {
        console.error('Error loading scripts:', error);
      }
    };

    loadAllScripts();

    return () => {
      scriptElements.forEach(script => script.remove());
    };
  }, []);

  return null;
};

export default LoadScripts;
