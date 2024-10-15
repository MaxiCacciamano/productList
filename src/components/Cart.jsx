import React, { useContext, useEffect, useState } from 'react';
import style from '../styles/Home.module.css';
import remove from '../assets/images/icon-remove-item.svg';
import { CartContext } from '../CartContext';


export const Cart = ({}) => {
  const {carrito,setCarrito, agregarAlCarrito ,eliminarDelCarrito, exist} = useContext(CartContext)

  const precioTotal = carrito.reduce((total, producto)=>(total + (producto.price * producto.quantity)), 0)
  const decimales = <h3> ${precioTotal.toLocaleString('es-Es', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })} </h3>

  return (
    <div className={style.cart}>
      <h2 style={{color:'hsl(14, 86%, 42%)'}}>Your cart</h2>
      {
        carrito.length === 0 ?(
          <p>Carrito vacio</p>
        ):(
          <ul>
            {
          carrito.map((producto, index)=>(
            <li key={producto.id} className={{}}>
              <div className={style.product}>
                  <p style={{fontWeight:'600'}}>{producto.name}</p>
                  <div style={{display:'flex'}}>
                  <p style={{color:'hsl(14, 86%, 42%)', fontWeight:'bold', marginRight:'10px'}}>{producto.quantity}x</p> &nbsp;&nbsp;<p style={{color:'hsl(14, 25%, 72%)'}}>{"@"}${producto.price}&nbsp;&nbsp;&nbsp;${ producto.price * producto.quantity}</p>  
                  </div>
             </div>
              <div style={{alignContent:'center'}}>
                  <img onClick={(()=>eliminarDelCarrito(producto))} src={remove}/>
              </div>
            </li>
          ))
            }
          </ul>
        )
        
      }
      <div style={{display:'flex', justifyContent:'space-between'}}>
          <p style={{alignContent:'center', alignItems:'center'}}> Total</p> 
          {
            carrito.length > 0 &&( 
              <h3>{decimales}</h3>
              
            )
          }
      </div>
      <button className={style.confirm}>Confirm order</button>
    </div>
  )
}
