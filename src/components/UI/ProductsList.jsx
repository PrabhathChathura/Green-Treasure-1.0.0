/*import React from "react";
import ProductCard from "./ProductCard";

const ProductsList  = () => {
    return (
         <>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
    </>
    );

};

export default ProductsList; */


import React from "react";
import { Col } from "reactstrap";
import ProductCard from "./ProductCard";
import armChairImg from "../../assets/images/arm-chair-01.jpg";

const ProductList = () => {
    const products = [
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

    return (
        <>
            {products.map((product, index) => (
                <Col lg="3" md="4" key={index}>
                    <ProductCard
                        image={product.image}
                        title={product.title}
                        description={product.description}
                    />
                </Col>
            ))}
        </>
    );
};

export default ProductList;
