/*import React from "react";
import productImg from "../../assets/images/arm-chair-01.jpg";
import { motion } from "framer-motion";
import "../../styles/product-card.css";
import { Col } from "reactstrap";

const ProductCard  = () => {
    return (

        <Col lg='3' md='4'>

<div className="product__item">
        <div className="product__img">
            <motion.img whileHover={{ scale: 0.9 }} src={productImg} alt="" />  
        </div>
        <div className="p-2 product__info">
        <h3 className="product__name">Modern Armchair</h3>
        <span>Chair</span>
        </div> 
        <div className="product__card-bottom d-flex align-items-center 
        justify-content-between p-2">
            <span className="price">$299 </span>
        </div>
    </div>
        
        </Col>
   
    );

};

export default ProductCard; */


import React from "react";
import { motion } from "framer-motion";
import "../../styles/product-card.css";

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

export default ProductCard;
