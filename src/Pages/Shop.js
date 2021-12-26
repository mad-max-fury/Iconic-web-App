import React from 'react'
import ShopWidgets from '../components/ShopWidgets'
import "../styles/shop.css"
import Products from './Products'
const Shop = () => {
  return (
    <>
      <main >

        <section class="mainShop" style={{ height: "fit-content", width: "100%" }}>
          <ShopWidgets />
          <Products />
        </section>


      </main>

    </>
  )
}

export default Shop
