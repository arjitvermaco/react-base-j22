import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyChocoCake, buyPineAppleCake, buyVanillaCake } from '../store/CakeSlice'

export default function Cake() {
    const cake = useSelector((state) => state.cake)
    const dispatch = useDispatch()
    console.log("Cake Data", cake)

    return (
        <div>
            <h3>Choco Cakes In Store : {cake.chocoCake}</h3>
            <button onClick={() => { dispatch(buyChocoCake()) }}>Buy Choco Cake</button>


            <h3>Vanilla Cakes In Store : {cake.vanillaCake}</h3>
            <button onClick={() => { dispatch(buyVanillaCake()) }}>Buy vanilla Cake</button>

            <h3>Pineapple Cakes In Store : {cake.pineappleCake}</h3>
            <button onClick={() => { dispatch(buyPineAppleCake()) }}>Buy Pineapple Cake</button>


        </div>
    )
}
