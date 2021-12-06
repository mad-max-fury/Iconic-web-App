import React from 'react'
import "../styles/Range.css"
const Range = () => {
  return (
    <>
      <div className="categories">
        <h3>PRICE RANGES</h3>
        <select className="cate" id="cate">
          <option className="cateItem">ALL</option>
          <option className="cateItem lactive">LOWEST PRICE</option>
          <option className="cateItem">HIGHEST PRICE</option>
          <option className="cateItem">DISCOUNT ITEMS</option>

        </select>
      </div>

    </>
  )
}

export default Range
