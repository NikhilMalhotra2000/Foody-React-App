import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter } from 'react-router-dom';
import ReactBootstrapCarousel from "react-bootstrap-carousel";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css';

function CarouselPage(){



    return(
      <Carousel>
  <Carousel.Item interval={1999}>
    <img
      className="d-block  w-100 "
      src="https://images.unsplash.com/photo-1447078806655-40579c2520d6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Welcome to Foody</h3>
      <p>What are you craving for today ?</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1999}>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1485677959733-60c357f80d3e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Comfort food at it's best!</h3>
      <p>We serve Passion!</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1999}>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1522244451342-a41bf8a13d73?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Deliciousness jumping into the mouth. </h3>
      <p>An oasis of pleasure.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    );
}

export default CarouselPage;