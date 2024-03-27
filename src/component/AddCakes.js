import React from 'react'
import { useDispatch } from 'react-redux'
import { addVanillaCake } from '../store/CakeSlice'

export default function AddCakes() {
    const dispatch = useDispatch()
  return (
    <div>

        <h3>Add Cakes to Store</h3>
        <button onClick={()=>{dispatch(addVanillaCake(5))}}>Add 5 Vanilla cakes</button>
        <button onClick={()=>{dispatch(addVanillaCake(10))}}>Add 10 Vanilla cakes</button>
    </div>
  )
}
