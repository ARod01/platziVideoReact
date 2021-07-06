import React from 'react';
import Header from '../components/Header';
import Usermenu from '../components/Usermenu';
import Search from '../components/Search';
import Carousel from '../components/Corousel';
import Container from '../components/Container';
import CarouselItem from '../components/Carousel-item';

const Platzivideo = () =>{
    return(
        <>
            <Header >
               <Usermenu /> 
            </Header>
            <Search />
            <Carousel title="Mi lista">
                <Container>
                    <CarouselItem image="https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                    <CarouselItem image="https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                </Container>
            </Carousel>
            <Carousel title="Tendencias">
                <Container>
                    <CarouselItem image="https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                    <CarouselItem image="https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                </Container>
            </Carousel>
            <Carousel title="Originales de platzi Video">
                <Container>
                    <CarouselItem image="https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                    <CarouselItem image="https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                </Container>
            </Carousel>
        </>
    );
}

export default Platzivideo;