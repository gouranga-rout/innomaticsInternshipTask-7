import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <p> Made with &hearts; by <NavLink to="https://www.linkedin.com/in/gourangarout?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="owner">Aaryan</NavLink>
    <br />&copy; 2024 All rights reserved.</p>
    </footer>
  );
};

export default Footer;

