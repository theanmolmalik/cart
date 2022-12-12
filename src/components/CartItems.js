import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import { useSelector } from "react-redux";
const CartItems = () => {
  const cartItems=useSelector(state=>state.cart.itemsList);
  let isCartEmpty = !(typeof cartItems !== 'undefined' && cartItems.length === 0);
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        {!isCartEmpty && cartItems.map((item)=>(
          <li key={item.id}>
          <CartItem 
            id={item.id} 
            quantity={item.quantity} 
            price={item.price} 
            total={item.totalPrice} 
            name={item.name} 
          />
          </li>
        ))}
        <li>
          
        </li>
      </ul>
    </div>
  );
};

export default CartItems;
