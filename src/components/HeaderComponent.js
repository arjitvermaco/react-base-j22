import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function HeaderComponent() {

  const categoryUrl = "https://fakestoreapi.com/products/categories"

  const [allCategories, setAllCategories] = useState([]);

  async function getAllCategories() {
    const response = await fetch(categoryUrl);
    const data = await response.json();
    setAllCategories(data)
  }

  useEffect(() => {
    getAllCategories()
  }, [])

  return (
    <header className='px-12 bg-black h-14 flex justify-between items-center text-white'>
      <Link to="/">  <img src='https://fakestoreapi.com/icons/logo.png' alt='Logo Image' className='h-8' />
</Link>
      <div className='flex gap-8 '>
        {allCategories.map((item) => {
          return (
            <Link to={`category/${item}`} key={item} className='capitalize'>
              {item}
            </Link>
          )
        })}
        <Link to='/cart' >Cart</Link>
      </div>
    </header>
  )
}
