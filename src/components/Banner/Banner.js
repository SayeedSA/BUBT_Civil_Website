import React from "react";
import "./Banner.css";
import { Carousel } from "react-bootstrap";

const Banner = () => {
  return (
    <div className="Carousel-inner">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
           
            src="https://bubt.edu.bd/assets/frontend/slider_image/slider_1.jpeg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h2 style={{ color: "red", backgroundColor: "white" }}>
              What Civil Engineering means
            </h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://bubt.edu.bd/assets/frontend/slider_image/slider_2.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h2 style={{ color: "red", backgroundColor: "white" }}>
              Environmental Engineering
            </h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://bubt.edu.bd/assets/frontend/slider_image/slider_3.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h2 style={{ color: "red", backgroundColor: "white" }}>
              Survey and Foundation Engineering
            </h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://bubt.edu.bd/assets/frontend/slider_image/slider_4.jpg"
            alt="Fourth slide"
          />

          <Carousel.Caption>
            <h2 style={{ color: "red", backgroundColor: "white" }}>
              Geotechnical Engineering
            </h2>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
