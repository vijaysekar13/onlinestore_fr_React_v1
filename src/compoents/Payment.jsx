import React from 'react'

export const Payment = () => {
  const [quantity, setQuantity] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState('creditCard');

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value));
  };

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleAddToCart = () => {
    // Add your logic here to add the item to the cart
    console.log(`Added ${quantity} item(s) to cart with payment method ${paymentMethod}`);
  };

  return (
    <div>
    <label>Quantity:</label>
    <input type="number" value={quantity} onChange={handleQuantityChange} />

    <label>Payment Method:</label>
    <select value={paymentMethod} onChange={handlePaymentMethodChange}>
      <option value="creditCard">Credit Card</option>
      <option value="paypal">PayPal</option>
      <option value="bankTransfer">Bank Transfer</option>
    </select>

    <button onClick={handleAddToCart}>Add to Cart</button>
  </div>
);
};
export default Payment
