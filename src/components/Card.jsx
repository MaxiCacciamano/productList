import React, { useContext, useEffect, useState } from 'react'
import style from '../styles/Home.module.css'
import data from '../../data.json'
import cart from '../assets/images/icon-add-to-cart.svg'
import { CartContext } from '../CartContext'

export const Card = () => {
    const [products, setProducts] = useState(data)
    const {agregarAlCarrito} = useContext(CartContext)
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768)



    useEffect(()=>{
        const handleResize = () =>{
            setIsMobile(window.innerWidth < 768)
          };

        fetch('../../data.json')
        .then((response)=>response.json())
        .then((data)=>setProducts(data))
        .catch((err)=>console.error('Error al cargar productos', err))
        window.addEventListener('resize', handleResize)
        return ()=> window.removeEventListener('resize', handleResize)
    })

    return (
        <div className={style.todocard}>
         {
            products.length === 0 ? (
                <h1>No se encontraron productos</h1>
            ):
            (
                products.map((product)=>(
                <div key={product.id} className={style.card}>
                {isMobile ? (
                    <img className={style.imgpostre} src={product.image.mobile} alt="Mobile" />
                  ) : (
                    <img className={style.imgpostre} src= {product.image.desktop} alt="Desktop"/> 
                )
                }
                <div className={style.addcart}>
                <button onClick={()=>agregarAlCarrito(product)}><img className={style.imgcart} src={cart}/><p>Add to cart</p></button>
                </div>
                <div className={style.textocontenedor}>
                    <p style={{ color:'grey', lineHeight:'0'}}> {product.category} </p>
                    <p> {product.name} </p>
                    <p 
                     style={{color: 'hsl(14, 86%, 42%)', fontWeight:'bold', lineHeight:'0'}}
                    >
                     ${
                       product.price.toLocaleString('es-Es',{
                        minimumFractionDigits:2,
                        maximumFractionDigits:2
                       })
                    } </p>
                </div>
                    </div>
                ))
            )
         }   
    </div>
  )
}
