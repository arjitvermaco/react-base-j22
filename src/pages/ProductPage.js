import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import AppContext from '../context/AppContext';
import toast from 'react-hot-toast';

export default function ProductPage() {
  const {id} = useParams();
  const appContext = useContext(AppContext)
  const productUrl = "https://fakestoreapi.com/products/"
  const [product,setProduct] = useState({})

  console.log(appContext)

  async function getSingleProduct(){
    const response  = await fetch(productUrl+id)
    const data = await response.json()
    setProduct(data)
  }

  useEffect(()=>{
    getSingleProduct()
  },[id])

  const addItemToCart = ()=>{
  const exisitingProductIndex = appContext.cartItems.findIndex(item => item.id === product.id);
  console.log(exisitingProductIndex)
  if(exisitingProductIndex >=0){

    const updatedCartItems = [...appContext.cartItems];

    console.log(updatedCartItems[exisitingProductIndex])

    updatedCartItems[exisitingProductIndex] = {
      ...updatedCartItems[exisitingProductIndex],
      qty:updatedCartItems[exisitingProductIndex].qty +1
    }

    appContext.setCartItems(updatedCartItems);
    toast.success(`${product.title} quantity updated in cart 🛒`);
  }else{
    appContext.setCartItems([...appContext.cartItems,{...product,qty:1}])
    toast.success(`${product.title} added to cart`)
  }
  }

  return (
    <div className='flex flex-col md:flex-row mt-12 justify-center items-center max-w-7xl mx-auto'>
      <img className='w-1/3 mx-auto' src={product.image} alt={product.title} />

      <div className='p-8'>
        <h3 className='text-xl font-bold text-teal-500'>{product.title}</h3>
        <p>{product.description}</p>

        <div className='flex justify-between items-center mt-12'>
          <p className='text-3xl font-bold'>${product.price}</p>
          <p className='bg-teal-500 px-4 py-1 rounded-lg'>{product?.rating?.rate}</p>
        </div>

        <button onClick={addItemToCart} className='w-full mt-8 bg-teal-500 py-2 rounded-md hover:bg-teal-700 transition-all hover:text-white'>Add To Cart</button>
      </div>
    </div>
  )
}
