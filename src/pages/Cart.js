import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RestaurantItemList from '../components/RestaurantItemList';
import { clearCart } from '../utils/cartSlice';
import { Link } from 'react-router-dom';

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  }

  const subtotal = cartItems.reduce((total, item) => total + (item.card.info.price || item.card.info.defaultPrice || 0) / 100, 0);
  const deliveryCharge = 42;
  const tax = subtotal * 0.1;
  const totalCost = subtotal + deliveryCharge + tax;

  return (
    <div className="min-h-screen font-sans bg-primary-bgColor text-primary-white">
      <div className="max-w-4xl p-6 mx-auto">
        <h1 className="mb-8 text-3xl font-bold text-primary-yellow">Your Cart</h1>
        
        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="p-6 rounded-lg md:col-span-2 bg-primary-grey">
              <RestaurantItemList 
                itemCardsData={cartItems} 
                isCart={true} 
              />
              <button 
                className='w-full px-4 py-2 mt-6 font-semibold transition-colors rounded-full bg-primary-yellow text-primary-dark hover:bg-primary-light' 
                onClick={handleClearCart}
              >
                Clear Cart
              </button>
            </div>
            
            <div className="md:col-span-1">
              <div className="sticky p-6 rounded-lg bg-primary-grey top-6">
                <h2 className="mb-4 text-xl font-semibold">Order Summary</h2>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>₹{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery Fee</span>
                    <span>₹{deliveryCharge.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Taxes & Charges</span>
                    <span>₹{tax.toFixed(2)}</span>
                  </div>
                  <div className="pt-2 mt-2 border-t border-primary-light">
                    <div className="flex justify-between text-base font-semibold">
                      <span>Total</span>
                      <span>₹{totalCost.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                <button className="w-full px-4 py-3 mt-6 font-semibold transition-colors rounded-full bg-primary-yellow text-primary-dark hover:bg-primary-light">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="py-16 text-center">
            <p className="mb-6 text-xl">Your cart is empty. Add some delicious items to get started!</p>
            <Link to="/">
            <button className="px-6 py-3 font-semibold transition-colors rounded-full bg-primary-yellow text-primary-dark hover:bg-primary-light">
              Browse Restaurants
            </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;