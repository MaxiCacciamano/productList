import React from 'react';
import style from '../styles/Home.module.css';
import { useSelector } from 'react-redux';

export const Cart = ({name, price}) => {
  return (
    <div className={style.cart}>
      <h2>Your Cart</h2>
      <p> {} </p> 
      <p> {price} </p>
      <button>Confirm order</button>
    </div>
  )
}
