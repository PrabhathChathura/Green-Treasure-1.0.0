import React,{useState} from "react";

import CommonSection from "../components/UI/CommonSection";

import Helmet from "../components/Helmet/Helmet";

import { Container, Row, Col } from "reactstrap";

import "../styles/shop.css";

import products from "../assets/data/products";
import ProductsList from "../components/UI/ProductsList";

const Shop = () => {

 const [productsData, setProductsData] = useState(products)

  const handleFilter = (e) => {
    const filterValue = e.target.value;
    if (filterValue === "plastic") {
      const filteredProducts = products.filter(item => item.category === "plastic");
      setProductsData(filteredProducts);
    }

    if (filterValue === "ewaste") {
      const filteredProducts = products.filter(item => item.category === "ewaste");
      setProductsData(filteredProducts);
    }

    if (filterValue === "rubber") {
      const filteredProducts = products.filter(item => item.category === "rubber");
      setProductsData(filteredProducts);
    }

    if (filterValue === "metal") {
      const filteredProducts = products.filter(item => item.category === "metal");
      setProductsData(filteredProducts);
    }

    if (filterValue === "paper") {
      const filteredProducts = products.filter(item => item.category === "paper");
      setProductsData(filteredProducts);
    }



  };


  const handleSearch = e=>{
    const searchTerm = e.target.value
    const searchProducts = products.filter(item=> item.productName.
      toLowerCase().includes(searchTerm.toLowerCase()))

      setProductsData(searchProducts)
  }

  

  return (
    <Helmet title="Shop">

      <CommonSection title="Products"/>

      <section>
        <Container>
          <Row>
            <Col lg="3" md="3">
              <div className="filter__widget">
                <select onChange={handleFilter}>
                  <option>Filter By Category</option>
                  <option value="plastic">Plastic</option>
                  <option value="ewaste">E-waste</option>
                  <option value="rubber">Rubber</option>
                  <option value="metal">Metal</option>
                  <option value="paper">Paper</option>
                </select>
              </div>
            </Col>
            <Col lg="3" md="3">
              <div className="filter__widget">
                <select>
                  <option>Sort By</option>
                  <option value="ascending">Ascending</option>
                  <option value="descending">Descending</option>
                </select>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="search__box">
                <input 
                type="text" 
                placeholder="Search......" 
                onChange= {handleSearch}
                />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container>
          <Row>
            {
              productsData.length === 0 ? (
                <h1 className="text-center fs-4">No products are found!</h1>
              ) : (
                <ProductsList data={productsData} />
              )
            }
          </Row>
        </Container>
      </section>

    </Helmet> 
  );
}

export default Shop;


