import React, { useState } from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import StripeCheckout from '../components/StripeCheckout';
import '../styles/checkout.css';
import { useSelector } from "react-redux";

const Checkout = () => {
  // Retrieve cart details from Redux store
  const totalQty = useSelector(state => state.cart.totalQuantity);
  const totalAmount = useSelector(state => state.cart.totalAmount);

  // State to store billing information
  const [billingDetails, setBillingDetails] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    country: ''
  });

  // Update billing details in state when form fields change
  const handleInputChange = (e) => {
    setBillingDetails({
      ...billingDetails,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Helmet title='Checkout'>
      <CommonSection title='Checkout' />
      <section>
        <Container>
          <Row>
            <Col lg='8'>
              <h6 className="B_title mb-4 fw-bold">Billing Information</h6>
              <Form className="billing__form">
                <FormGroup className="form__group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={billingDetails.name}
                    onChange={handleInputChange}
                  />
                </FormGroup>

                <FormGroup className="form__group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={billingDetails.email}
                    onChange={handleInputChange}
                  />
                </FormGroup>

                <FormGroup className="form__group">
                  <input
                    type="number"
                    name="phone"
                    placeholder="Phone number"
                    value={billingDetails.phone}
                    onChange={handleInputChange}
                  />
                </FormGroup>

                <FormGroup className="form__group">
                  <input
                    type="text"
                    name="address"
                    placeholder="Street address"
                    value={billingDetails.address}
                    onChange={handleInputChange}
                  />
                </FormGroup>

                <FormGroup className="form__group">
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={billingDetails.city}
                    onChange={handleInputChange}
                  />
                </FormGroup>

                <FormGroup className="form__group">
                  <input
                    type="text"
                    name="postalCode"
                    placeholder="Postal Code"
                    value={billingDetails.postalCode}
                    onChange={handleInputChange}
                  />
                </FormGroup>

                <FormGroup className="form__group">
                  <input
                    type="text"
                    name="country"
                    placeholder="Country"
                    value={billingDetails.country}
                    onChange={handleInputChange}
                  />
                </FormGroup>
              </Form>
            </Col>
            <Col lg="4">
              <div className="checkout__cart">
                <h6>Total Qty: <span>{totalQty} items</span></h6>
                <h6>Sub Total: <span>Rs. {totalAmount}</span></h6>
                <h6>
                  <span>Shipping: <br />free shipping</span> <span>Rs. 0</span>
                </h6>
                <h4>Total Cost: <span>Rs. {totalAmount}.00</span></h4>
                <StripeCheckout totalAmount={totalAmount} billingDetails={billingDetails} />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;
