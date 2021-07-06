import React from 'react';
import play from '../assets/play-icon.png';
import plus from '../assets/plus-icon.png';

import '../styles/carousel-item.css';

const CarouselItem = (props) =>{
    return(
        <>
        <div className="carousel-item">
            <img className="carousel-item__img" src={props.image} alt='imagen del carusel' />
            <div className="carousel-item__details">
                <div>
                    <img className="carousel-item__details--img" src={play} alt="Play Icon" /> 
                    <img className="carousel-item__details--img" src={plus} alt="Plus Icon" /> 
                </div>
                <p className="carousel-item__details--title">Título descriptivo</p>
                <p className="carousel-item__details--subtitle">2019 16+ 114 minutos</p>
            </div>
        </div>
        </>
    );
}

export default CarouselItem;