import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import  Carousel from 'react-material-ui-carousel';
import { Paper, Button } from "@mui/material";
import one from '../Assets/one.jpg';
import two from '../Assets/two.jpg';
import three from '../Assets/three.jpg';
import four from '../Assets/four.jpg';

function CarouselComponent(props)
{
    var items = [
        {  
            photo: {one},
            name: "Finally a social network for elderly",
            description: "Probably the most random thing you have ever seen!"

        },
        {
            photo: {two},
            name: "Random Name #2",
            description: "Hello World!"
        },
        {
            photo: {three},
            name: "Random Name #2",
            description: "Hello World!"
        },
        {
            photo: {four},
            name: "Random Name #2",
            description: "Hello World!"
        }
    ]

    return (
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <Paper>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
};

export default CarouselComponent