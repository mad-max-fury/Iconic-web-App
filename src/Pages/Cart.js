import React from 'react'
import CartItemsTables from '../components/CartItemsTables'
import SubTotal from '../components/SubTotal'
import "../styles/cate.css"
const Cart = () => {
  return (
    <>
      <main className="cate">
        <CartItemsTables />
        <SubTotal />
      </main>

    </>
  )
}

export default Cart
