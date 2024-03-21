import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function ProductPage() {
  const {id} = useParams();
  const productUrl = "https://fakestoreapi.com/products/"
  const [product,setProduct] = useState({})

  async function getSingleProduct(){
    const response  = await fetch(productUrl+id)
    const data = await response.json()
    setProduct(data)
  }

  useEffect(()=>{
    getSingleProduct()
  },[id])


  return (
    <div className='flex flex-col md:flex-row mt-12 justify-center items-center max-w-7xl mx-auto'>
      <img className='w-1/3 mx-auto' src={product.image} alt={product.title} />

      <div className='p-8'>
        <h3 className='text-xl font-bold text-teal-500'>{product.title}</h3>
        <p>{product.description}</p>
      </div>
    </div>
  )
}
