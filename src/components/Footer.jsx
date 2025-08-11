// src/components/Footer.jsx
import React from 'react';

const Footer = () => (
  <footer className="bg-dark text-white text-center py-3 mt-5">
    <div className="container">
      <small>&copy; {new Date().getFullYear()} Carpintería Del Centro. Todos los derechos reservados.</small>
    </div>
  </footer>
);

export default Footer;
