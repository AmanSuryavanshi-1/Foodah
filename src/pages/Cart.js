import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RestaurantItemList from '../components/RestaurantItemList';
import { clearCart } from '../utils/cartSlice';

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const restaurants = useSelector((store) => store.cart.restaurants);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  }

  // Calculate totals
  // Calculate totals by taking data from redux store
  const subtotal = cartItems.reduce((total, item) => total + (item.card.info.price || item.card.info.defaultPrice || 0) / 100, 0);
  const DeliveryCharge = 5; // You might want to calculate this based on your business logic
  const tax = subtotal * 0.1; // Assuming 10% tax, adjust as needed
  const totalCost = subtotal + DeliveryCharge + tax;

  return (
    <div className="p-4">
      <h1 className="mb-4 text-2xl font-bold">Shopping Cart</h1>
      
      {cartItems.length > 0 ? (
        <>
          <RestaurantItemList 
            itemCardsData={cartItems} 
            isCart={true} 
          /> 
          
          <button 
            className='px-4 py-2 mt-4 rounded bg-primary-yellow' 
            onClick={handleClearCart}
          >
            Clear Cart
          </button>

          <div className="mt-8">
            <p>Subtotal: ₹{subtotal.toFixed(2)}</p>
            <p>Cart Items: {cartItems.length}</p>
            <p>Delivery Charges: ₹{DeliveryCharge.toFixed(2)}</p>
            <p>GST and Restaurant Charges: ₹{tax.toFixed(2)}</p>
            {/* <p>Estimated Delivery Time: {DeliveryTime} minutes</p> */}
            <p className="font-bold">Total Cost: ₹{totalCost.toFixed(2)}</p>
          </div>

          <div className="mt-4">
            <button className="px-4 py-2 mr-2 rounded bg-primary-yellow">Checkout</button>
            <button className="px-4 py-2 rounded bg-primary-light text-primary-dark">Continue Shopping</button>
          </div>
        </>
      ) : (
        <p>Your cart is empty. Add some items to get started!</p>
      )}
    </div>
  );
}

export default Cart;