import React from 'react';
import '../styles/container.css';

const Container = ({children}) =>{
    return(
        <>
        <div className='carousel__container'>
            {children}
        </div>
        </>
    );
}

export default Container;