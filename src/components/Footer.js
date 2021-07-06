import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/footer.css';

const Footer = () =>(
    <>
    <footer className="footer">
        <Link to="#" className="link">Declaración de privacidad </Link>
        <Link to="#" className="link">Centro de ayuda  </Link>
        <Link to="#" className="link">Terminos de uso  </Link>
  </footer>
    </>
)

export default Footer;