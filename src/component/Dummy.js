import React from 'react'
import {  useSelector } from 'react-redux'

export default function Dummy() {
    const cake = useSelector((state)=> state.cake)

  return (
    <div>Dummy Component

        {cake.vanillaCake}


    </div>
  )
}
