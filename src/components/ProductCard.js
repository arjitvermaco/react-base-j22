import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard({ product }) {
    return (

       
        <Link to={`/product/${product.id}`} className='w-1/2 mt-8 md:w-1/3 lg:w-1/4 shadow-md rounded-md p-4'>
            <img src={product.image} className='w-1/2 mx-auto' />
            <h3>{product.title}</h3>
            <div className='flex justify-between mt-8'>
                <p className='text-xl text-teal-700'>${product.price}</p>

                <p className="bg-teal-500 px-4 py-1 text-sm rounded-full">{product.rating.rate}</p>
            </div>
        </Link>
    )
}
