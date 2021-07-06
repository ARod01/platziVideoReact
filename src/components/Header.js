import React from 'react';
import { Link } from 'react-router-dom';

import Platzi from  '../assets/logo-platzi-video-BW2.png';
import '../styles/header.css';


const Header = ({children}) =>{
    return(
        <>
        <header className="header">
            <Link to="/platzivideo">
                <img className="header__img" src={Platzi} alt="Platzi Video" />
            </Link>
            {children}
        </header>
        </>
    );
}

export default Header;