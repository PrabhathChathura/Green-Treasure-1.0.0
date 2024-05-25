import React from "react";

import { Link } from "react-router-dom";

import {motion} from 'framer-motion';

import Helmet from "../components/Helmet/Helmet";

import { Container, Row, Col } from "reactstrap";

import heroImg from '../assets/images/hero-img.png'

import Services from "../services/Services";

import Hero from "../Hero/Hero";

import "../styles/home.css";

import ProductsList from "../components/UI/ProductsList";

import Testimonials from "../Hero/Testimonials";


const Home = () => {
  const year = new Date().getFullYear()
  return (
    <Helmet title={'Home'}>
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <p className="hero__subtitle"> Trending product in {year}</p>

                <h2>Make Your Interior More Minamalist & Modern </h2>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem 
                  ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor
                  sit amet, consectetur adipiscing elit</p>

                <motion.button whileTap={{ scale: 1.2 }} className="buy__btn">
                  <Link to="/shop">SHOP NOW</Link>
                </motion.button>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="hero" style={{ width: '100%', height: 'auto', maxWidth: '100%' }} />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Services />

      <Hero />

      
      <section className="our_services">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Our Services</h2>
            </Col> 
            <ProductsList />
          </Row>
        </Container>
      </section>



    <section className="Testimonial">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Testimonials</h2>
            </Col> 

            <Testimonials/>
            
          </Row>
        </Container>
      </section>


    
      

    </Helmet>
  );
  };



export default Home;

