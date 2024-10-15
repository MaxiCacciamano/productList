import React, { useContext } from 'react';
import style from '../styles/Home.module.css';
import remove from '../assets/images/icon-remove-item.svg';
import pastel from '../assets/images/illustration-empty-cart.svg';
import { CartContext } from '../CartContext';

export const Cart = () => {
  const { carrito, eliminarDelCarrito } = useContext(CartContext);

  // Calcula el precio total del carrito
  const precioTotal = carrito.reduce((total, producto) => total + (producto.price * producto.quantity), 0);
  
  // Formatea el total a dos decimales
  const decimales = precioTotal.toLocaleString('es-Es', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });

  // Calcula la cantidad total de productos
  const cantidadTotal = carrito.reduce((total, producto) => total + producto.quantity, 0);

  return (
    <div className={style.cart}>
      <h2 style={{ color: 'hsl(14, 86%, 42%)' }}>Your cart({cantidadTotal})</h2>
      {
        carrito.length === 0 ? (
          <div style={{ textAlign: 'center' }}>
            <img className={style.pastel} src={pastel} alt="Carrito vacío" />
            <p>Your added items will appear here</p>
          </div>
        ) : (
          <ul>
            {
              carrito.map((producto) => (
                <li key={producto.id} className={style.product}>
                  <div>
                    <p style={{ fontWeight: '600' }}>{producto.name}</p>
                    <div style={{ display: 'flex' }}>
                      <p style={{ color: 'hsl(14, 86%, 42%)', fontWeight: 'bold', marginRight: '10px' }}>
                        {producto.quantity}x
                      </p>
                      <p style={{ color: 'hsl(14, 25%, 72%)' }}>
                        {"@ $"}{producto.price} &nbsp;&nbsp;&nbsp;${producto.price * producto.quantity}
                      </p>
                    </div>
                  </div>
                  <div style={{ alignContent: 'center' }}>
                    <img 
                      style={{ width: '35%', border: '1px solid black', borderRadius: '50%', padding: '4px', cursor: 'pointer' }} 
                      onClick={() => eliminarDelCarrito(producto)} 
                      src={remove} 
                      alt="Eliminar producto" 
                    />
                  </div>
                </li>
              ))
            }
          </ul>
        )
      }
      {
        carrito.length > 0 && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <p style={{textAlign:'center', alignContent:'center'}}>Order total</p>
              <h3>${decimales}</h3>
            </div>
            <button className={style.confirm}>Confirm order</button>
          </div>
        )
      }
    </div>
  );
}
