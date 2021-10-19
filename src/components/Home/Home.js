import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../images/header/national-cancer-institute-1c8sj2IO2I4-unsplash.jpg';
import banner2 from '../../images/header/22223.jpg';
import banner3 from '../../images/header/666.jpg';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
          <div>
          <Carousel variant="dark">
  <Carousel.Item>
    <img
      className="d-block w-100 h-80"
      src={banner1}
      alt="First slide"
    />
    <Carousel.Caption className="text-white">
      <h5>Drink-Hospital-Ltd</h5>
      <p>Welcome To Drink Hospital Ltd</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner2}
      alt="Second slide"
    />
    <Carousel.Caption className="text-white">
      <h5>Drink-Hospital-Ltd</h5>
      <p>My Hospital All Time Doctors</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner3}
      alt="Third slide"
    />
    <Carousel.Caption className="text-white">
      <h5>Drink-Hospital-Ltd</h5>
      <p>My Hospital All Time Open in Emergency </p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
          </div>
          <Services></Services>
            
        </div>
    );
};

export default Home;