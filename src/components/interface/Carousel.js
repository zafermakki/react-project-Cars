import React from 'react'
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import BMW1 from "../../images/BMW.jpg";
import MERCEDES from "../../images/Mercedes.jpg";
import RollsRoys from "../../images/RollsRoys.jpg";
import Audi from "../../images/Audi.jpg";
import Mazda from "../../images/Mazda.jpg";
import Dodg from "../../images/Dodg.jpg";
import Lamborghini from "../../images/lamborghini.jpg";

const CarouselImage = () => {

  return (
   
    <div>
    <Carousel interval={3000} >
            <Carousel.Item>
                    <img
                    style={{height: "600px", objectFit: "cover"}}
                    className="d-block w-100"
                    src={BMW1}
                    alt="First slide"
                    />
            </Carousel.Item>
            <Carousel.Item>
                    <img
                    style={{height: "600px", objectFit: "cover"}}
                    className="d-block w-100"
                    src={MERCEDES}
                    alt="Second slide"
                    />
            </Carousel.Item>
            <Carousel.Item>
                    <img
                    style={{height: "600px", objectFit: "cover"}}
                    className="d-block w-100"
                    src={RollsRoys}
                    alt="Third slide"
                    />
            </Carousel.Item>
            <Carousel.Item>
                    <img
                    style={{height: "600px", objectFit: "cover"}}
                    className="d-block w-100"
                    src={Audi}
                    alt="Third slide"
                    />
            </Carousel.Item>
            <Carousel.Item>
                    <img
                    style={{height: "600px", objectFit: "cover"}}
                    className="d-block w-100"
                    src={Mazda}
                    alt="Third slide"
                    />
            </Carousel.Item>
            <Carousel.Item>
                    <img
                    style={{height: "600px", objectFit: "cover"}}
                    className="d-block w-100"
                    src={Dodg}
                    alt="Third slide"
                    />
            </Carousel.Item>
            <Carousel.Item>
                    <img
                    style={{height: "600px", objectFit: "cover"}}
                    className="d-block w-100"
                    src={Lamborghini}
                    alt="Third slide"
                    />
            </Carousel.Item>
     </Carousel>
     </div>
  )
}

export default CarouselImage;





  


