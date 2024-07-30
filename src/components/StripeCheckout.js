import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import { collection, addDoc } from 'firebase/firestore'; 
import { db } from '../firebase.config'; 
import { useSelector } from 'react-redux';

const stripePromise = loadStripe('pk_test_51Pggd8A2sMLF3u8TBYNwAee2YiYG8phsgFkYra6JwVXh3jwehv7ZJjd2wIHKiUjc3YJzDV1tucPw8EY1VVoIXwLv00BbVAn0fk');

const StripeCheckout = ({ billingDetails }) => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const handleCheckout = async () => {
    try {
      // Save billing details to Firestore
      const billingCollectionRef = collection(db, 'billingDetails');
      await addDoc(billingCollectionRef, billingDetails);
      console.log('Billing details saved successfully');
      
      // Create Stripe checkout session
      const stripe = await stripePromise;
      const response = await axios.post('http://localhost:4242/create-checkout-session', {
        cartItems,
        billingDetails,
      });

      const sessionId = response.data.id;
      const { error } = await stripe.redirectToCheckout({ sessionId });

      if (error) {
        console.error('Stripe checkout error:', error);
      }
    } catch (error) {
      console.error('Error during checkout:', error);
    }
  };

  return (
    <button className="buy__btn auth__btn w-100" onClick={handleCheckout}>
      Place the order
    </button>
  );
};

export default StripeCheckout;