import React from "react";
import { Container,Row,Col } from "reactstrap";
import { useParams } from "react-router-dom";
import products from "../assets/data/products";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";


const ProductDetails = () => {

  const {id} = useParams()
  const products  = products.find(item=> item.id === id)

  const {imgUrl, productName, price, avgRating, review, description } = 
  product

  return ( 
  <Helmet>
    <CommonSection/>

    <section className="pt-0">
      <container>
        <Row>
          <Col lg='6'>
            <img src={imgUrl} alt="" />
          </Col>
          
          <Col lg='6'>
            <div className="product__details">
              <h2>productName</h2>
              <div className="product__rating">
                <div>
                  <span></span>
                </div>

              </div>
            </div>

          </Col>
        </Row>
      </container>
    </section>
  </Helmet>
  );
  };

export default ProductDetails;

