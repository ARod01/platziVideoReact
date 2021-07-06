import React from 'react';
import '../styles/carousel.css'


const Carousel = ({children, title}) =>{
    return (
        <>
        <h3 className="categories__title">{title}</h3>
        <div className='carousel'>
            {children}
        </div>
        </>
    );
}

export default Carousel;