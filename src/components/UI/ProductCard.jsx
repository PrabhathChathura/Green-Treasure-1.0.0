
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
