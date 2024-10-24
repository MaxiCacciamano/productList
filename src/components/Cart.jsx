import React, { useContext, useEffect, useState } from 'react';
import style from '../styles/Home.module.css';
import remove from '../../public/assets/images/icon-remove-item.svg';
import pastel from '../../public/assets/images/illustration-empty-cart.svg';
import carbon from '../../public/assets/images/icon-carbon-neutral.svg';
import { CartContext } from '../CartContext';
import  {Modal}  from './Modal';

export const Cart = () => {
  const { carrito, eliminarDelCarrito, setearCarrito } = useContext(CartContext);
  const [isModalOpen, setIsModlaOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)


  useEffect(()=>{
      const handleResize = () =>{
          setIsMobile(window.innerWidth < 768)
        };
      })

  const handleOpen = () => setIsModlaOpen(true)
  const handleClose = () => setIsModlaOpen(false)

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
                <li key={producto.id} className={style.product} style={{alignItems:'center'}}>
                  <div>
                    <p style={{ fontWeight: '600' }}>{producto.name}</p>
                    <div style={{ display: 'flex' }}>
                      <p style={{ color: 'hsl(14, 86%, 42%)', fontWeight: 'bold', marginRight: '10px' }}>
                        {producto.quantity}x
                      </p>
                      <p style={{ color: 'hsl(14, 25%, 72%)' }}>
                        {`@ $${producto.price.toLocaleString('es-Es', {
                           minimumFractionDigits: 2,
                           maximumFractionDigits: 2
                         })}`} &nbsp;&nbsp;&nbsp;${(producto.price * producto.quantity).toLocaleString('es-Es', {
                         minimumFractionDigits: 2,
                         maximumFractionDigits: 2
                       })}
                      </p>
                    </div>
                  </div>
                  <div style={{ alignContent: 'center' }}>
                    <img 
                      style={{ width: '35%', border: '1px solid hsl(14, 25%, 72%)', borderRadius: '50%', padding: '4px', cursor: 'pointer' }} 
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
            <div style={{ display: 'flex', alignItems:'center' ,justifyContent: 'space-between' }}>
              <p style={{textAlign:'center'}}>Order total</p>
              <h3>${decimales}</h3>
            </div>
            <div style={{display:'flex',marginBottom:'20px' ,backgroundColor:'antiquewhite', padding:'10px' ,borderRadius:'8px'}}>
               <img style={{alignItems:'center', alignContent:'center', margin:'0 auto'}} src= {carbon} />
               <p style={{textAlign:'center', alignContent:'center', alignItems:'center', margin:'10px', fontSize:'0.8rem'}}>  This is a <span style={{fontWeight:'650', fontSize:'0.1 rem'}}>carbon-neutral </span>delivery</p>
            </div>
            <button onClick={handleOpen} className={style.confirm}>Confirm order</button>
          </div>
        )
      }
            <Modal isOpen={isModalOpen} onClose={handleClose} >
            <div style={{}}>
                  <h1 style={{margin:'10px'}}>Order Confirmed</h1>
                  <p style={{textAlign:'center'}}>We hope you enjoy your food!</p>
            </div>
                <div style={{backgroundColor:'hsl(20, 50%, 98%)',padding:'10px',margin:'15px'}}>
               {
                  <ul>
                    {
                carrito.map((producto) => (
                <li key={producto.id} style={{justifyContent:'center', width:'', margin:'0 auto', marginTop:'30px'}}>
                  {isMobile ? (
                    <img className={style.imgpostre} style={{ height:'40px' , borderRadius:'5px'}} src={producto.image.mobile} alt="Mobile" />
                  ) : (
                    <img className={style.imgpostre} style={{width:'20%', borderRadius:'5px'}} src= {producto.image.desktop} alt="Desktop"/> 
                )
                }
                  <div style={{display:'flex', flexDirection:'column', padding:'5px'}}>
                    <p style={{ fontWeight: '600' }}>{producto.name}</p>
                    <div style={{ display:'flex',marginTop:'auto' }}>
                    
                      <p style={{ color: 'hsl(14, 86%, 42%)', fontWeight: 'bold', marginRight: '10px' }}>
                        {producto.quantity}x
                      </p>
                      <p style={{ color: 'hsl(14, 25%, 72%)' }}>
                        {`@ $ ${producto.price.toLocaleString('es-Es', {
                           minimumFractionDigits: 2,
                           maximumFractionDigits: 2
                         })}`}
                      </p>
                      
                    </div>
                  </div>
                      <p style={{alignContent:'center', alignItems:'center', marginLeft:'auto'}}>
                        {`$
                         ${(producto.price * producto.quantity).toLocaleString('es-Es', {
                         minimumFractionDigits: 2,
                         maximumFractionDigits: 2
                       })}`}  
                      </p>
                </li>
              ))      
                    }
                  </ul>     
               }
               <div style={{ display: 'flex', justifyContent: 'space-between', margin:'20px', alignItems:'center' }}>
                  <p style={{textAlign:'center', alignContent:'center'}}>Order total</p>
                  <h3>${decimales}</h3>
               </div>
               </div>
               <button onClick={()=>setearCarrito()} style={{width:'90%'}} className={style.confirm}>Start new Order</button>
            </Modal>
    </div>
  );
}
