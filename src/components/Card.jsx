import React, { useEffect, useState } from 'react'
import style from '../styles/Home.module.css'
import data from '../../data.json'

export const Card = () => {
    const [datos, setDatos] = useState(data)
    useEffect(()=>{
    },[])
    return (
        <div className={style.todo}>
        {
            datos.map((item, index) => (
                <div key={index} className={style.card}>
                <img src= {item.image.desktop} />
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
        }
    </div>
  )
}
