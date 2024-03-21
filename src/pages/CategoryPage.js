import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard';

export default function CategoryPage() {
  const categoryUrl = "https://fakestoreapi.com/products/category/";
  const [allProducts,setAllProducts] = useState([])
  let {id} = useParams()
  console.log(id)

  async function getProductsFromCategory(){
    const response  = await fetch(categoryUrl+id);
    const data = await response.json()
    setAllProducts(data)
  }

  useEffect(()=>{
    getProductsFromCategory()
  },[id])
  return (
    <div className='flex flex-wrap max-w-7xl mx-auto p-8 md:p-6 lg:p-0'>
    {allProducts.map((product)=>{
        return(
          <ProductCard product={product} key={product.id}/>
        )
    })}
</div>
  )
}
