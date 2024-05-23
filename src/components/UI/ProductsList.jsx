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
            description: "Comprehensive programs for paper, plastics, glass, and metals. Help reduce waste and promote sustainability."
        },
        {
            image: armChairImg,
            title: "Waste Collection",
            description: "Services for residential, commercial, and industrial clients. Timely and efficient waste management solutions."
        },
        {
            image: armChairImg,
            title: "Consulting Services",
            description: "Expert advice to develop sustainable waste management strategies. Identify opportunities for waste reduction and recycling improvement."
        },
        {
            image: armChairImg,
            title: "Waste Auditing",
            description: "Expert auditing services to assess waste generation, composition, and disposal practices. Detailed analysis to identify areas for improvement and optimize waste management strategies."
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
