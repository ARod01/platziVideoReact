import React from 'react';
import { useState, useEffect } from 'react';

import Header from '../components/Header';
import Usermenu from '../components/Usermenu';
import Search from '../components/Search';
import Carousel from '../components/Corousel';
import Container from '../components/Container';
import CarouselItem from '../components/Carousel-item';

const Platzivideo = () =>{  
    const [videos, setVideos] = useState({mylist:[], trends:[], originals:[]});

    useEffect(() =>{
        fetch('http://localhost:3000/initialState')
            .then(response => response.json())
            .then(data => setVideos(data));  
    },[]);

    console.log(`${videos.trends.length} de trends`);

    return(
        <>
            <Header >
               <Usermenu /> 
            </Header>
            <Search />
            {videos.mylist.length > 0 &&
                <Carousel title="Tendencias">
                    <Container>
                        <CarouselItem />
                    </Container>
                </Carousel>                
            }
            <Carousel title="Tendencias">
                <Container>
                    { videos.trends.map(item =>
                        <CarouselItem key={item.id} {...item}/>
                    ) }
                </Container>
            </Carousel>
            <Carousel title="Originales de platzi Video">
                <Container>
                { videos.originals.map(item =>
                        <CarouselItem key={item.id} {...item}/>
                    ) }
                </Container>
            </Carousel>
        </>
    );
}

export default Platzivideo;