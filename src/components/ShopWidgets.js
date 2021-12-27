import Category from "./Category"
import PaginationBtn from "./PaginationBtn"
import Range from "./Range"

import "../styles/ShopWidget.css"
import Search from "./Search"
const ShopWidgets = ({ setSearchValue, setCateValue, setMinPrice, setMaxPrice }) => {
  return (
    <>
      <aside className="filterItems">
        <Search setSearchValue={setSearchValue} />
        <Range setMinPrice={setMinPrice} setMaxPrice={setMaxPrice} />

        <Category setCateValue={setCateValue} />

      </aside>

    </>
  )
}

export default ShopWidgets
