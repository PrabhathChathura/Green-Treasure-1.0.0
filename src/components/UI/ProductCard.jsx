
import React from "react";
import { motion } from "framer-motion";
import "../../styles/product-card.css";

import { col } from "reactstrap";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { cartActions} from "../../redux/slices/cartSlice";



const ProductCard = ({ image, title, description }) => {

const dispatch = useDispatch()

const addToCart = () => {
    dispatch(
        cartActions.addItem({ 
        id: item.id,
        productionName:item-productName,
        price: item-price,
        image: item.imgUrl 
    })
);
 
alert("product added to cart");

};


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
