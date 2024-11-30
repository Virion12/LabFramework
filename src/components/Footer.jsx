import React from 'react';
import logo from '../assets/wsei-logo.png'

const Footer = () => {
  return (
    <footer className="text-center py-3 mt-auto bg-light">
      <div>
      <p className="mt-2"><img src={logo} alt="Logo" width="50" />  Author: Dominik Gorassini-idziak  </p>  
        
      </div>
    </footer>
  );
};

export default Footer;