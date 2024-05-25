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
                                        <CountUp start={1400} end={1500} duration={4} />
                                        <p>+</p>
                                    </span>
                                    <span className="stat_label">Brands</span>
                                </div>

                                <div className="stat_box">
                                    <span className="stat_number">
                                        <CountUp start={300} end={500} duration={4} />
                                        <p>+</p>
                                    </span>
                                    <span className="stat_label">Outlets</span>
                                </div>

                                <div className="stat_box">
                                    <span className="stat_number">
                                        <CountUp start={11400} end={12500} duration={4} />
                                        <p>+</p>
                                    </span>
                                    <span className="stat_label">Customers</span>
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
