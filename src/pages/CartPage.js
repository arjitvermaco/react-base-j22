import React, { useContext } from 'react'
import AppContext from '../context/AppContext'
import CartItem from '../components/CartItem';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function CartPage() {
  const appContext = useContext(AppContext);

  let { cartItems } = appContext;

  if (cartItems.length === 0) {
    return (
      <div className='max-w-xl mx-auto mt-12 shadow-lg p-6'>
        <p>No Items In Cart!! Go To <Link to="/">Homepage</Link></p>
      </div>
    )
  }

  const cartTotal = cartItems.reduce((acc, item) => {
    return acc + (item.price) * (item.qty)
  }, 0)

  const handleItemDelete = (id) => {
    const newCart = cartItems.filter((item)=>{
      return (
        item.id !== id
      )
    })
    appContext.setCartItems(newCart)
    toast.success("Item deleted Successfully")
  }

  const handleQuantityChange = (id,newQty)=>{
    const updatedCartItems = cartItems.map((item)=>{
      if(item.id === id){
        return {...item,qty:newQty}
      }
      return item
    })

    appContext.setCartItems(updatedCartItems);
    toast.success("Quanity Updated Successfully")
  }
  return (
    <div className='max-w-xl mx-auto'>
      <h1>Cart Total :{cartTotal} </h1>

      {cartItems.map((item) => {
        return (
          <CartItem product={item} handleItemDelete={handleItemDelete} handleQuantityChange={handleQuantityChange} key={item.id} />
        )
      })}
    </div>
  )
}
