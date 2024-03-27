import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard';

export default function HomePage() {
    const allProductsUrl = 'https://fakestoreapi.com/products';
    const [allProducts, setAllProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    

    async function getAllProducts() {
        const response = await fetch(allProductsUrl);
        const data = await response.json();
        setAllProducts(data)
    }
    useEffect(() => {
        getAllProducts()
    }, [])

    const filteredProducts = allProducts.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()))
    return (

        <div>
            <div className='max-w-md mx-auto mt-12'>
                <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search products..." onChange={(e) => { setSearchTerm(e.target.value) }} />
            </div>
            <div className='flex flex-wrap max-w-7xl mx-auto p-8 md:p-6 lg:p-0'>



                {filteredProducts.map((product) => {
                    return (
                        <ProductCard product={product} key={product.id} />
                    )
                })}
            </div>

        </div>

    )
}
