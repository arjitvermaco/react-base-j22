import React from 'react'

export default function CartItem({ product,handleItemDelete,handleQuantityChange }) {

    return (
        <div className='flex gap-12 items-center max-w-xl shadow-xl mt-12 p-6 mx-auto'>
            <img src={product.image} alt={product.title} className='h-32' />
            <div>
                <h2>{product.title}</h2>
                <p className='text-xl font-bold'>${product.price}</p>
                 <select value={product.qty} onChange={(event)=>{
                    handleQuantityChange(product.id,+event.target.value)
                 }} className='border rounded p-2'>
                    {[...Array(10).keys()].map((num)=>{
                        return (
                            <option key={num+1} value={num+1}>
                                {num +1}
                            </option>
                        )
                    })}
                    </select>   
                <button onClick={()=>handleItemDelete(product.id)}>🗑️</button>
            </div>
        </div>
    )
}
