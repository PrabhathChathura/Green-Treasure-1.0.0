// src/components/ServicesList.js

import React from "react";
import { Col } from "reactstrap";
import { motion } from "framer-motion";
import "../../styles/services-list.css";  // Import the new CSS file
import armChairImg from "../../assets/images/arm-chair-01.jpg";

const services = [
    {
        image: armChairImg,
        title: "Recycling Programs",
        description: "Our comprehensive recycling programs cover paper, plastics, glass, and metals. Join us in reducing waste and promoting sustainability for a greener future."
    },
    {
        image: armChairImg,
        title: "Waste Collection",
        description: "We offer reliable waste collection services for residential, commercial, and industrial clients. Let us provide you with timely and efficient waste management solutions to keep your environment clean."
    },
    {
        image: armChairImg,
        title: "Consulting Services",
        description: "Get expert advice from our team to develop sustainable waste management strategies. We'll help you identify opportunities for waste reduction and recycling improvement to minimize environmental impact."
    },
    {
        image: armChairImg,
        title: "Waste Auditing",
        description: "Our waste auditing services involve expert assessment of waste generation, composition, and disposal practices. Receive detailed analysis and actionable insights to optimize your waste management strategies."
    }
];

const ProductCard = ({ image, title, description }) => {
    return (
        <div className="product__item">
            <div className="product__img">
                <motion.img whileHover={{ scale: 0.9 }} src={image} alt={title} />
            </div>
            <div className="p-2 product__info">
                <h3 className="product__name">{title}</h3> 
                <p className="product__description">{description}</p>
            </div>
        </div>
    );
};

const ServicesList = () => {
    return (
        <>
            {services.map((service, index) => (
                <Col lg="3" md="4" key={index}>
                    <ProductCard
                        image={service.image}
                        title={service.title}
                        description={service.description}
                    />
                </Col>
            ))}
        </>
    );
};

export default ServicesList;
