import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {increment} from '../features/someFeature/someFeatureSlice.js'
import { Card } from '../components/Card.jsx'

export const Home = () => {
  const count = useSelector((state)=> state.someFeature.value)
  const dispatch = useDispatch();
  console.log(count)
  return (
    <>
    <Card/>
    <h2 className={{"color":"white"}}>Counter: {count} </h2>
    <button onClick={()=> dispatch(increment())}>Increment</button>
    </>
  )
}
