import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import RestaurantItemList from '../components/RestaurantItemList';
import { clearCart } from '../utils/cartSlice';

const Cart = () => {
  const cartItems =  useSelector((store)=> store.cart.items);
  // const total = useSelector((store)=> store.cart.total);

  const dispatch = useDispatch();
  const handleClearCart = () =>{
    dispatch(clearCart());
  }

  return (
    <div>
      <h1>Shopping Cart</h1>
      <RestaurantItemList itemCardsData={cartItems}></RestaurantItemList>
        <button className='bg-primary-yellow' 
          onClick = {handleClearCart}
        >
          Clear Cart  </button>

      <p>Total: $60</p>
      <button>Checkout</button>
      <button>Empty Cart</button>
      <button>Continue Shopping</button>
      <p>Cart Items: 3</p>
      <p>Shipping Cost: $5</p>
      <p>Tax: $2.50</p>
      <p>Total Cost: $67.50</p>
    </div>
  )
}

export default Cart