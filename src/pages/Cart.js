import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RestaurantItemList from '../components/RestaurantItemList';
import { clearCart } from '../utils/cartSlice';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";

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
        <h1 className="font-serif text-3xl font-bold text-primary-light">Your Cart</h1>
        
        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-lg md:col-span-2 bg-primary-bgColor">
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
            
            <div className="mt-8 md:col-span-1">
              <div className="sticky p-6 rounded-lg bg-primary-dark top-6">
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
                  <button className="flex items-center justify-center w-full px-5 py-2 mt-6 font-serif transition-all duration-300 border-2 border-transparent cursor-pointer rounded-2xl bg-gradient-to-r from-primary-light to-primary-yellow text-primary-bgColor hover:bg-primary-white hover:text-primary-grey">
                    Proceed to Checkout
                  </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="py-16 text-center">
            <p className="mb-6 text-xl">Your cart is empty. Add some delicious items to get started!</p>
            <Link to="/">
            <button className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white transition-all duration-300 transform rounded-full shadow-md bg-gradient-to-r from-primary-yellow to-yellow-500 hover:from-yellow-500 hover:to-primary-yellow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-yellow hover:-translate-y-2">
  <span>Browse Restaurants</span>
</button>
{/*  */}
<button className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden text-base font-semibold transition duration-300 ease-out transform rounded-full shadow-md bg-gradient-to-r from-primary-yellow to-yellow-500 hover:from-yellow-500 hover:to-primary-yellow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-yellow group hover:-translate-y-2">
  <arrow></arrow>
  <span className="absolute inset-0 flex items-center justify-center w-full h-full duration-300 -translate-x-full text-primary-dark bg-primary-yellow group-hover:translate-x-0 ease">
  <FaArrowRight/>
  </span>
  <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">Browse Restaurants</span>
  <span className="relative invisible">Browse Restaurants</span>
</button>

{/*  */}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;