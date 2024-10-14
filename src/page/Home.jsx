import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {increment} from '../features/someFeature/someFeatureSlice.js'
import { Card } from '../components/Card.jsx'
import { Cart } from '../components/Cart.jsx'
import style from '../styles/Home.module.css'

export const Home = () => {
  // const count = useSelector((state)=> state.someFeature.value)
  // const dispatch = useDispatch();
  // console.log(count)
  
  return (
    <div className={style.padre}>
    <div>
    <h1>Desserts</h1>
    <Card  />
    </div>
    <Cart  />
    {/* <h2 className={{"color":"white"}}>Counter: {count} </h2> */}
    {/* <button onClick={()=> dispatch(increment())}>Increment</button> */}
    </div>
  )
}
