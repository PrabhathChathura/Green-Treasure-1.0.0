const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51Pggd8A2sMLF3u8T3VoXJRY2F4fAtqKoKUOg0dY29xmMt82KyNuLa0hirGYsSxBtWJs3nd8CrUvWxLM9aEoaHqRi00Oq7dCEwX');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/create-checkout-session', async (req, res) => {
  const { cartItems, billingDetails } = req.body;
  
  try {
    const lineItems = cartItems.map((item, index) => {
      if (!item.productName) {
        throw new Error(`Missing product name for item at index ${index}`);
      }
      if (!item.price || isNaN(item.price)) {
        throw new Error(`Invalid price for item "${item.productName}" at index ${index}`);
      }
      return {
        price_data: {
          currency: 'lkr',
          product_data: {
            name: item.productName,
            images: item.imgUrl ? [item.imgUrl] : undefined,
          },
          unit_amount: Math.round(item.price * 100), // Convert to cents
        },
        quantity: item.quantity || 1,
      };
    });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: 'http://localhost:3000/success',
      cancel_url: 'http://localhost:3000/cancel',
      customer_email: billingDetails.email,
    });

    res.json({ id: session.id });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    res.status(400).json({ error: error.message });
  }
});

app.listen(4242, () => console.log('Server running on port 4242'));