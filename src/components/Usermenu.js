import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css'
import User from '../assets/user-icon.png';

const Usermenu = () =>(
    <>
    <div className="header__menu">
        <div className="header__menu--profile">
            <img src={User} alt="" />
            <p>Perfil</p>
        </div>
        <ul>
            <li><Link to="/">Cuenta</Link></li>
            <li><Link to="#">Cerrar Sesión</Link></li>
        </ul>
    </div>
    </>
);

export default Usermenu;