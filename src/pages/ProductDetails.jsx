import React, { useState, useRef, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { useParams } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import "../styles/product-details.css";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { cartActions } from "../redux/slices/cartSlice";
import { toast } from "react-toastify";

import { db } from '../firebase.config';
import { doc, getDoc, collection, query, where, getDocs, addDoc } from 'firebase/firestore';
import useGetData from "../custom-hooks/useGetData";
import useAuth from "../custom-hooks/useAuth";

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const [tab, setTab] = useState("desc");
  const reviewUser = useRef('');
  const reviewMsg = useRef('');
  const dispatch = useDispatch();
  const [rating, setRating] = useState(null);
  const { id } = useParams();
  const { data: products } = useGetData("products");
  const { currentUser } = useAuth();
  const [hasPurchased, setHasPurchased] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [avgRating, setAvgRating] = useState(0);

  useEffect(() => {
    const getProduct = async () => {
      const docRef = doc(db, 'products', id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setProduct(docSnap.data());
      } else {
        console.log("No product found!");
      }
    };

    const checkPurchase = async () => {
      if (currentUser) {
        const purchasesRef = collection(db, 'purchases');
        const q = query(purchasesRef, 
          where('userId', '==', currentUser.uid),
          where('productId', '==', id)
        );
        const querySnapshot = await getDocs(q);
        setHasPurchased(!querySnapshot.empty);
      }
    };

    const fetchReviews = async () => {
      const reviewsRef = collection(db, 'reviews');
      const q = query(reviewsRef, where('productId', '==', id));
      const querySnapshot = await getDocs(q);
      const fetchedReviews = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setReviews(fetchedReviews);

      if (fetchedReviews.length > 0) {
        const totalRating = fetchedReviews.reduce((sum, review) => sum + review.rating, 0);
        setAvgRating(totalRating / fetchedReviews.length);
      }
    };

    getProduct();
    checkPurchase();
    fetchReviews();
  }, [id, currentUser]);

  const { 
    imgUrl,
    productName, 
    price, 
    description,
    shortDesc,
    category
  } = product;

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!currentUser) {
      toast.error("You must be logged in to submit a review");
      return;
    }

    if (!hasPurchased) {
      toast.error("You need to purchase this product to leave a review");
      return;
    }

    if (!rating) {
      toast.error("Please select a rating");
      return;
    }

    const reviewObj = {
      userId: currentUser.uid,
      productId: id,
      userName: currentUser.displayName || reviewUser.current.value || "Anonymous",
      text: reviewMsg.current.value,
      rating,
      createdAt: new Date()
    };

    try {
      await addDoc(collection(db, "reviews"), reviewObj);
      toast.success('Review submitted');
      reviewMsg.current.value = "";
      setRating(null);
      const reviewsRef = collection(db, 'reviews');
      const q = query(reviewsRef, where('productId', '==', id));
      const querySnapshot = await getDocs(q);
      const fetchedReviews = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setReviews(fetchedReviews);

      if (fetchedReviews.length > 0) {
        const totalRating = fetchedReviews.reduce((sum, review) => sum + review.rating, 0);
        setAvgRating(totalRating / fetchedReviews.length);
      }
    } catch (error) {
      toast.error('Error submitting review');
    }
  };

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        image: imgUrl,
        productName,
        price,
      })
    );
    toast.success("Product added successfully");
  };

  return (
    <Helmet title={productName}>
      <CommonSection title={productName} />
      <section className="product-details-section">
        <Container>
          <div className="product-details-row">
            <div className="product-image-wrapper">
              <img src={imgUrl} alt={productName} className="product-image" />
            </div>
            <div className="product-details">
              <h2 className="product-name">{productName}</h2>
              <div className="product-rating">
                <span className="rating">
                  <i className="ri-star-s-fill"></i>
                </span>
                <span className="rating-number">{avgRating.toFixed(1)}</span>
              </div>
              <div className="product-meta">
                <span className="product-price">Rs. {price}</span>
                <span className="product-category">Category: {category}</span>
              </div>
              <p className="product-short-desc">{shortDesc}</p>
              <motion.button 
                whileTap={{scale: 1.2}} 
                className="add-to-cart-btn" 
                onClick={addToCart}>
                Add to Cart
              </motion.button>
            </div>
          </div>
        </Container>
        <section>
          <Container>
            <Row>
              <Col lg='12'>
                <div className="product-tabs">
                  <button 
                    className={`tab-btn ${tab === "desc" ? "active__tab" : ""}`}
                    onClick={() => setTab('desc')}>
                    Description
                  </button>
                  <button 
                    className={`tab-btn ${tab === "rev" ? "active__tab" : ""}`}
                    onClick={() => setTab('rev')}>
                    Reviews ({reviews.length})
                  </button>
                </div>
                {tab === 'desc' ? (
                  <div className="tab-content">
                    <p className="product-description">{description}</p>
                  </div>
                ) : (
                  <div className="tab-content">
                    <div className="review-wrapper">
                      <ul className="review-list">
                        {reviews.map((item) => (
                          <li key={item.id} className="review-item">
                            <h6 className="review-username">{item.userName}</h6>
                            <span className="review-rating">
                              {item.rating} <i className="ri-star-s-fill"></i>
                            </span>
                            <p className="review-text">{item.text}</p>
                          </li>
                        ))}
                      </ul>
                      {currentUser ? (
                        hasPurchased ? (
                          <div className="review-form">
                            <h4>Leave your experience</h4>
                            <form onSubmit={submitHandler}>
                              <div className="form-group">
                                <input 
                                  type="text" 
                                  placeholder="Enter name"
                                  ref={reviewUser}
                                  required
                                />
                              </div>
                              <div className="form-group rating__group">
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <motion.span 
                                    key={star}
                                    whileTap={{scale: 1.2}} 
                                    onClick={() => setRating(star)}>
                                    {star} <i className={`ri-star-${rating >= star ? 'fill' : 'line'}`}></i>
                                  </motion.span>
                                ))}
                              </div>
                              <div className="form-group">
                                <textarea 
                                  ref={reviewMsg}
                                  rows={4}
                                  placeholder="Review message ..." 
                                  required
                                />
                              </div>
                              <motion.button 
                                whileTap={{scale: 1.2}} 
                                type="submit" 
                                className="buy__btn">
                                Submit
                              </motion.button>
                            </form>
                          </div>
                        ) : (
                          <p>You need to purchase this product to leave a review.</p>
                        )
                      ) : (
                        <p>Please log in to leave a review.</p>
                      )}
                    </div>
                  </div>
                )}
              </Col>
            </Row>
          </Container>
        </section>
      </section>
    </Helmet>
  );
};

export default ProductDetails;



