import React from "react";
import "./footer.css";
import { Container, Row, Col, ListGroup, ListGroupItem  } from "reactstrap";
import { Link } from "react-router-dom";

const Footer = () => {

const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4">
            <div className="logo">
              <div>
              <h1 style={{ color: 'white' }}>Green Treasure</h1>
              </div>
            </div>
            <p className="footer__text mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </Col>

          <Col lg="3">
            <div className="footer__quick-links">
              <h4 className="quick__links__title">Useful Links</h4>
              <ListGroup>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="/shop">Shop</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="/Cart">Cart</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="/login">Login</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="/Shop">Shop</Link>
                </ListGroupItem>


              </ListGroup>
            </div>
          </Col>

          <Col lg="4">
          <div className="footer__quick-links">
              <h4 className="quick__links__title">Contact</h4>
               <ListGroup className="footer__contact">

                <ListGroupItem className="ps-0 border-0 d-flex 
                align-items-center gap-2">
                  <span><i class="ri-map-pin-line"></i></span>
                  <p>University of kelaniya, Dalugama</p>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0 d-flex 
                align-items-center gap-2">
                  <span><i class="ri-customer-service-2-line"></i></span>
                  <p>+94 112 987 789</p>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0 d-flex 
                align-items-center gap-2">
                <span><i class="ri-mail-line"></i></span>
                  <p>greentreasureLK@gmail.com</p>
                </ListGroupItem>        

              </ListGroup>
            </div>
          </Col>
          <Col lg="12">
            <p className="footer__copy-right">Copyright {year}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
