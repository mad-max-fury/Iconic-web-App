import { useState, useEffect } from 'react'
import ShopWidgets from '../components/ShopWidgets'
import "../styles/shop.css"
import Products from './Products'
const Shop = () => {
  const [searchValue, setSearchValue] = useState('')
  const [cateValue, setCateValue] = useState('')
  const [MinPrice, setMinPrice] = useState(0.00)
  const [MaxPrice, setMaxPrice] = useState(2000000)
  return (
    <>
      <main >

        <section class="mainShop" style={{ height: "fit-content", width: "100%" }}>
          <ShopWidgets setSearchValue={setSearchValue} setCateValue={setCateValue} setMinPrice={setMinPrice} setMaxPrice={setMaxPrice} />
          <Products searchValue={searchValue} category={cateValue} minprice={MinPrice} maxprice={MaxPrice} />
        </section>


      </main>

    </>
  )
}

export default Shop
