import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './home.css';

function Home() {
  return (
    <Carousel>
      <Carousel.Item interval={1000} className={classes.item}>
        <img
          className="d-block w-100" // Add Bootstrap classes for image responsiveness
          src={require('../../src/pages/assets/img/23.jpg')}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 style={{ fontSize: '40px' }}><strong>Fly to cities with FAST Airways</strong></h3>
          <p>Be there at the World Cup 2024 with FAST Airways and cheer your team to victory.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500} className={classes.item}>
        <img
          className="d-block w-100" // Add Bootstrap classes for image responsiveness
          src={require('../../src/pages/assets/img/22.jpg')}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3 style={{ fontSize: '40px' }}><strong>Discover the wonders of the world</strong></h3>
          <p>Journey with us on a unique adventure to discover the world.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500} className={classes.item}>
        <img
          className="d-block w-100" // Add Bootstrap classes for image responsiveness
          src={require('../pages/assets/img/airplane5.jpeg')}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3 style={{ fontSize: '40px' }}><strong>Extra legroom, extra space, extra easy</strong></h3>
          <p>Pick from a choice of extras to make flying with us even more comfortable and convenient.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Home; 