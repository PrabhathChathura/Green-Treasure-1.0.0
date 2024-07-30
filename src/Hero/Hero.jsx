import React from "react";
import { Container, Row, Col } from "reactstrap";
import './Hero.css';
import CountUp from 'react-countup';

const Hero = () => {
    return (
        <section id="hero" className="hero-section">
            <div className="hero-background">
                <Container>
                    <Row>
                        <Col lg="12" className="text-center">
                            <div className="hero_stats">
                                <div className="stat_box">
                                    <span className="stat_number">
                                        <CountUp start={10} end={75} duration={7} />
                                        <p>+</p>
                                    </span>
                                    <span className="stat_label">Waste Categories</span>
                                </div>

                                <div className="stat_box">
                                    <span className="stat_number">
                                        <CountUp start={50} end={200} duration={7} />
                                        <p>+</p>
                                    </span>
                                    <span className="stat_label">Partner Organizations</span>
                                </div>

                                <div className="stat_box">
                                    <span className="stat_number">
                                        <CountUp start={5000} end={10000} duration={7} />
                                        <p>+</p>
                                    </span>
                                    <span className="stat_label">Kilograms Recycled Annually</span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    );
};

export default Hero;
