import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import  { Carousel }  from 'react-responsive-carousel';
import one from '../Assets/one.jpg';
import two from '../Assets/two.jpg';
import three from '../Assets/three.jpg';
import four from '../Assets/four.jpg';


function CarouselComponent() {

    return (
                <div className="carousel-wrapper">
                    <Carousel infiniteLoop useKeyboardArrows autoPlay>
                        <div>
                        <img 
                            src={one}
                            alt="one"
                        />
                        </div>
                        

                       <div> 
                        <img 
                            src={two} 
                            alt="two"
                        />
                        </div>

                        <div>
                        <img 
                            src={three} 
                            alt="three"
                        />
                        </div>

                        <div>
                        <img 
                            src={four} 
                            alt="four"
                        />
                        </div>
                        </Carousel>
                </div>
            );
        }

     export default CarouselComponent()