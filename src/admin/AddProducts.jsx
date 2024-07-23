import React from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";

const AddProducts = () => {
  return ( <section>
    <Container>
      <Row>
        <Col lg="12">
        <h4 className="mb-5">
          Add Product
        </h4>
        <Form>

          <FormGroup className="form__group">
            <span>Product title</span>
            <input type="text" placeholder="...." />
          </FormGroup>

          <FormGroup className="form__group">
            <span>Short Description</span>
            <input type="text" placeholder="...." />
          </FormGroup>

          <FormGroup className="form__group">
            <span>Description</span>
            <input type="text" placeholder="...." />
          </FormGroup>

          <div className="d-flex align-items-center 
          justify-content-between gap-5">

          <FormGroup className="form__group" w-50>
            <span>Price</span>
            <input type="number" placeholder="Rs1000" />
          </FormGroup>

          <FormGroup className="form__group w-50">
            <span>Category</span>
            <select className="w-100 p-2">
              <option value="chair">Plastic</option>
              <option value="ewaste">E-waste</option>
              <option value="rubber">Rubber</option>
              <option value="metal">Metal</option>
              <option value="paper">Paper</option>
            

            </select>
          </FormGroup>
          </div>

          <div>

          <FormGroup className="form__group">
            <span>Product Image</span>
            <input type="file" />
          </FormGroup>

          </div>

          <button className="buy__btn">Add Product</button>

        </Form>
        </Col>
      </Row>
    </Container>
  </section>
)
}

export default AddProducts;