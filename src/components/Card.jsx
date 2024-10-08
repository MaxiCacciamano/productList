import React, { useEffect, useState } from 'react'
import data from '../../data.json'

export const Card = () => {
    const [datos, setDatos] = useState(data)
    useEffect(()=>{
     },[])
  return (
    <div>
        {
            datos.map((item, index) => (
                <div key={index}>
                     <h1> {item.name} </h1>
                </div>
            ))
        }
    </div>
  )
}
