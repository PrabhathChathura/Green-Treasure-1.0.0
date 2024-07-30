import React from "react";

import { Link } from "react-router-dom";

import {motion} from 'framer-motion';

import Helmet from "../components/Helmet/Helmet";

import { Container, Row, Col } from "reactstrap";

import heroImg from '../assets/images/hero-img.png'

import Services from "../services/Services";

import Hero from "../Hero/Hero";

import "../styles/home.css";

import ServicesList from "../components/UI/ServicesList";


import Testimonials from "../Hero/Testimonials";

import useGetData from "../custom-hooks/useGetData";

import BrandSwiper from "../components/UI/BrandSwiper";


const Home = () => {

  const { data: products, loading } = useGetData('products');


  const year = new Date().getFullYear()
  return (
    <Helmet title={'Home'}>
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <p className="hero__subtitle"> Top Waste Management Solution of {year}</p>

                <h2>Unveiling Sustainability Through Gamification</h2>

                <p>Welcome to Green Treasure, your premier waste management 
                  service dedicated to preserving the environment while providing
                  top-notch waste solutions. At Green Treasure, we believe that every piece 
                  of waste is an opportunity to make a positive impact on our planet.</p>

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
            <ServicesList />
          </Row>
        </Container>
      </section>



    <section className="Testimonial">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__titles">Testimonials</h2>
            </Col> 

            <Testimonials/>
            
          </Row>
        </Container>
      </section>


      <section className="brand-swiper-section">
        <Container>
          <Row>
            <Col lg="12">
              <BrandSwiper />
            </Col>
          </Row>
        </Container>
      </section>
      

    </Helmet>
  );
  };



export default Home;

