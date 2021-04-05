import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import one from './images/banner/one.jpg'
import two from './images/banner/two.jpg'
import three from './images/banner/three.jpg'
import four from './images/banner/four.jpg'
import five from './images/banner/five.jpg'
import six from './images/banner/six.jpg'
import seven from './images/banner/seven.jpg'
import eight from './images/banner/eight.jpg'
import nine from './images/banner/nine.jpg'
import ten from './images/banner/ten.jpg'
import eleven from './images/banner/eleven.jpg'
import twelve from './images/banner/twelve.jpg'

const ImageGallery = () =>{


    return(

        <div>

            <Container>
            <Row>
                <Col xs={6} md={3}><Image src={one} thumbnail /></Col>
                <Col xs={6} md={3}><Image src={two} thumbnail /></Col>
                <Col xs={6} md={3}><Image src={three} thumbnail /></Col>
                <Col xs={6} md={3}><Image src={four} thumbnail /></Col>
            </Row>
            </Container>
            <br></br><br></br>

            <Container>
            <Row>
                <Col xs={6} md={3}><Image src={five} thumbnail /></Col>
                <Col xs={6} md={3}><Image src={six} thumbnail /></Col>
                <Col xs={6} md={3}><Image src={seven} thumbnail /></Col>
                <Col xs={6} md={3}><Image src={eight} thumbnail /></Col>
            </Row>
            </Container>
            <br></br><br></br>

            <Container>
            <Row>
                <Col xs={6} md={3}><Image src={nine} thumbnail /></Col>
                <Col xs={6} md={3}><Image src={ten} thumbnail /></Col>
                <Col xs={6} md={3}><Image src={eleven} thumbnail /></Col>
                <Col xs={6} md={3}><Image src={twelve} thumbnail /></Col>
            </Row>
            </Container>
            <br></br><br></br>





        </div>


             
);
}

export default ImageGallery;