import React, { useContext, useEffect, useState } from 'react'
import style from '../styles/Home.module.css'
import data from '../../data.json'
import cart from '../assets/images/icon-add-to-cart.svg'
import { CartContext } from '../CartContext'

export const Card = () => {
    const [products, setProducts] = useState(data)
    const {agregarAlCarrito} = useContext(CartContext)

    useEffect(()=>{
        fetch('../../data.json')
        .then((response)=>response.json())
        .then((data)=>setProducts(data))
        .catch((err)=>console.error('Error al cargar productos', err))
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
                        <img className={style.imgpostre} src= {product.image.desktop} />
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
        {/* {
            datos.map((item, index) => (
                <div key={index} className={style.card}>
                <img src= {item.image.desktop} />
                <div className={style.addcart}>
                <button onClick={agregarAlCarrito}>Add to cart</button>
                </div>
                <div className={style.textocontenedor}>
                    <p> {item.category} </p>
                    <h3> {item.name} </h3>
                    <p 
                     style={{color: 'orange', fontWeight:'bold'}}
                    >
                     ${
                       item.price.toLocaleString('es-Es',{
                        minimumFractionDigits:2,
                        maximumFractionDigits:2
                       })
                    } </p>
                </div>
                </div>
            ))
        } */}
    </div>
  )
}
