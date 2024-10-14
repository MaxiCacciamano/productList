import React, { useContext, useEffect, useState } from 'react';
import style from '../styles/Home.module.css';
import { CartContext } from '../CartContext';


export const Cart = ({}) => {
  const {carrito, eliminarDelCarrito} = useContext(CartContext)

  return (
    <div className={style.cart}>
      {
        carrito.length === 0 ?(
          <p>Carrito vacio</p>
        ):(
          carrito.map((producto, index)=>(
            <li key={producto}>
              {producto.name} - ${producto.price}
            </li>
          ))
        )
      }
      {
        carrito.length > 0 ?(
          <h3>Total ${carrito.reduce((total, producto)=>total + producto.price, 0)}</h3>
        ):
        (
          <p></p>
        )
      }
      <button>Confirm order</button>
    </div>
  )
}
