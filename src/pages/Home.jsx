import React from "react";

import Helmet from "../components/Helmet/Helmet";

import { Container, Row, Col } from "reactstrap";

import heroImg from '../assets/images/hero-img.png'


const Home = () => {
  const year = new Date().getFullYear()
  return (<Helmet title={'Home'}> 

  <section className="hero_section">
    <Container>
      <Row>
        <Col lg='6' md='6'>  
        <div className="hero_content">
          <p className="hero__subtitle"> Trending product in {year}</p>

          <h2>Make Your Interior More Minamalist & Modern </h2>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

          <button className="buy__btn">SHOP NOW</button>


        </div>

      </Col>

      <Col lg='6' md='6'>
        <div className="hero__img">
          <img src={heroImg} alt="hero" />
        </div>  
      </Col>
      </Row>
    </Container>
</section>
</Helmet>
);
  };

export default Home;

