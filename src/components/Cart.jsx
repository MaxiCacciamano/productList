import React, { useContext, useEffect, useState } from 'react';
import style from '../styles/Home.module.css';
import { CartContext } from '../CartContext';


export const Cart = ({}) => {
  const {carrito,setCarrito, agregarAlCarrito ,eliminarDelCarrito, exist} = useContext(CartContext)

  return (
    <div className={style.cart}>
      {
        carrito.length === 0 ?(
          <p>Carrito vacio</p>
        ):(
          <ul>
            {
          carrito.map((producto, index)=>(
            <li key={producto.id} className={{}}>
             {producto.name} <br/>
             {producto.quantity}x {"@"}{producto.price}{"  "}{producto.price * producto.quantity} 
             
            </li>
          ))
            }
          </ul>
        )
      }
      {
        carrito.length > 0 &&( 
          <h3> Total: ${carrito.reduce((total, producto)=>total + (producto.price * producto.quantity), 0)}</h3>
        )
      }
      <button>Confirm order</button>
    </div>
  )
}
