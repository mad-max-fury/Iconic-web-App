import React from 'react'
import PaginationBtn from '../components/PaginationBtn'
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
          <aside className="filterItems">
            <PaginationBtn />
          </aside>
        </section>


      </main>

    </>
  )
}

export default Shop
