import React, { useState, useEffect } from "react";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import "../styles/shop.css";
import ProductsList from "../components/UI/ProductsList";
import useGetData from "../custom-hooks/useGetData";

const Shop = () => {
  const { data: products, loading } = useGetData("products");
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    setProductsData(products);
  }, [products]);

  const handleFilter = (e) => {
    const filterValue = e.target.value;
    if (filterValue === "all") {
      setProductsData(products);
    } else {
      const filteredProducts = products.filter(item => item.category === filterValue);
      setProductsData(filteredProducts);
    }
  };

  const handleSearch = e => {
    const searchTerm = e.target.value.toLowerCase();
    const searchProducts = products.filter(item => 
      item.productName.toLowerCase().includes(searchTerm)
    );
    setProductsData(searchProducts);
  };

  const handleSort = e => {
    const sortValue = e.target.value;
    let sortedProducts = [...productsData];
    if (sortValue === "ascending") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortValue === "descending") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }
    setProductsData(sortedProducts);
  };

  return (
    <Helmet title="Shop">
      <CommonSection title="Products"/>
      <section>
        <Container>
          <Row>
            <Col lg="3" md="6">
              <div className="filter__widget">
                <select onChange={handleFilter}>
                  <option value="all">All Categories</option>
                  <option value="plastic">Plastic</option>
                  <option value="ewaste">E-waste</option>
                  <option value="rubber">Rubber</option>
                  <option value="metal">Metal</option>
                  <option value="paper">Paper</option>
                </select>
              </div>
            </Col>
            <Col lg="3" md="6" className="text-end">
              <div className="filter__widget">
                <select onChange={handleSort}>
                  <option>Sort By</option>
                  <option value="ascending">Price: Low to High</option>
                  <option value="descending">Price: High to Low</option>
                </select>
              </div>
            </Col>
            <Col lg="6" md="12">
              <div className="search__box">
                <input 
                  type="text" 
                  placeholder="Search......" 
                  onChange={handleSearch}
                />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container>
          <Row>
            {loading ? (
              <h1 className="text-center fs-4">Loading...</h1>
            ) : productsData.length === 0 ? (
              <h1 className="text-center fs-4">No products are found!</h1>
            ) : (
              <ProductsList data={productsData} />
            )}
          </Row>
        </Container>
      </section>
    </Helmet> 
  );
}

export default Shop;