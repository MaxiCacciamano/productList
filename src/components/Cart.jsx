import React, { useContext, useEffect, useState } from 'react';
import style from '../styles/Home.module.css';
import remove from '../assets/images/icon-remove-item.svg';
import { CartContext } from '../CartContext';


export const Cart = ({}) => {
  const {carrito,setCarrito, agregarAlCarrito ,eliminarDelCarrito, exist} = useContext(CartContext)

  return (
    <div className={style.cart}>
      <h2>Your cart</h2>
      {
        carrito.length === 0 ?(
          <p>Carrito vacio</p>
        ):(
          <ul>
            {
          carrito.map((producto, index)=>(
            <li key={producto.id} className={{}}>
              <div className={style.product}>
                  <p>{producto.name}</p>
                  <p style={{color:'hsl(14, 86%, 42%)', fontWeight:'bold'}}>{producto.quantity}x</p> <p style={{color:'hsl(14, 25%, 72%)'}}>{"@"}{producto.price}{"  "}{producto.price * producto.quantity}</p>  
             </div>
              <div>
                  <img onClick={(()=>eliminarDelCarrito(producto))} src={remove}/>
              </div>
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
