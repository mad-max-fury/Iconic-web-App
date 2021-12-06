import Category from "./Category"
import PaginationBtn from "./PaginationBtn"
import Range from "./Range"

import "../styles/ShopWidget.css"
import Search from "./Search"
const ShopWidgets = () => {
  return (
    <>
      <aside className="filterItems">
        <Search />
        <Range />

        <Category />

      </aside>

    </>
  )
}

export default ShopWidgets
