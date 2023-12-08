import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from '../CartItem';
import s from './index.module.css'
import { clearCartAction } from '../../store/reducer/cartReducer';
import { sendOrder } from '../../request/products_req';


export default function Cart() {

  const cart_state = useSelector(state => state.cart);


  useEffect(() => {
    localStorage.setItem('local_cart', JSON.stringify(cart_state))}, [cart_state]);
  
  const dispatch = useDispatch(); 

  const total = cart_state.reduce((acc, { price, discont_price, count }) => {
	const totalPrice = discont_price ? discont_price : price  
	return acc + totalPrice * count} , 0)


	const [phoneNumber, setPhoneNumber] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
	  const phonePattern = /^(?:\+49|0)[1-9][0-9]*$/


	  console.log(phoneNumber);
if (phonePattern.test(phoneNumber)) {
  alert('Your order is being prepared for shipment');
  return;
}
    
    //   
	
	sendOrder()
	e.target.reset()
  };


  return (    
    <div className={s.cart_cont}>
    <h1 className={s.title_cart}>Shopping cart</h1>
    
    <div>
      <div className={s.cart_cont}>       
        {cart_state.length > 0
          ? cart_state.map((el) => <CartItem key={el.id} {...el} />)
          : <h3 className={s.empty}>Your cart is empty.</h3>}
   
     
       {cart_state.length > 0 && (
        <form onSubmit={handleSubmit} className={s.order}>
          <h2>Order details</h2>
          <p>Total {total.toFixed(2)}$</p>
          <div className={s.pfon_ord}>
            <input
              type="number"
              placeholder="Phone number"
              name="phone"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
          />
            <button type="submit">Order</button>
          </div>
        </form>                
          )}
        </div>
      </div>
      
         {cart_state.length > 0 && (
        <div className={s.clear_btn} onClick={() => dispatch(clearCartAction())}>
          Clear cart
        </div>
      )}
      
    </div>
  );
}