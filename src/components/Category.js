import { useState } from 'react'
import "../styles/Category.css"
const Category = ({ setCateValue }) => {
  const [cateParams, setCateParams] = useState('All')
  const handleCateParams = ({ target }) => {
    setCateParams(target.value)
    setCateValue(target.value)
  }
  return (
    <>
      <div className="categories">
        <h3>CATEGORIES</h3>
        <select className="cate" id="cate" value={cateParams} onChange={handleCateParams}>
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
