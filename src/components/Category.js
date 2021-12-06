import React from 'react'
import "../styles/Category.css"
const Category = () => {
  return (
    <>
      <div className="categories">
        <h3>CATEGORIES</h3>
        <select className="cate" id="cate">
          <option className="cateItem lactive">All</option>
          <option className="cateItem">BOOKS</option>
          <option className="cateItem">MEDICAL TOOLS</option>
          <option className="cateItem">MEDICAL WEARS</option>

        </select>
      </div>
    </>
  )
}

export default Category
