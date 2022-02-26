import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import  Carousel from 'react-material-ui-carousel';
// import one from '../Assets/one.jpg';
// import two from '../Assets/two.jpg';
// import three from '../Assets/three.jpg';
// import four from '../Assets/four.jpg';

function CarouselComponent(props)
{
    const imagesPool = [
        { src : '../Assets/one.jpg' },
        { src : '../Assets/two.jpg' },
        { src: '../Assets/three.jpg'},
        { src: '../Assets/four.jpg'}
    ];

    return (
            <Carousel>
                {imagesPool.map(( imgSrc, index ) => (<img src={imgSrc.src} key={index} alt="Imgaes can't be displayed, whyyyyy !!!???" />))}
           </Carousel>
    )};


export default CarouselComponent