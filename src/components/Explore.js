import React from 'react'
import "../styles/Explore.css"
const Explore = (props) => {
  const renderProduct = (products) => {
    return <>
      <div className="explore__products__holder__product">
        <img src={products.images[0]} alt="" srcSet="" />
        <div className="seemore">
          See More
        </div>
      </div>
    </>
  }
  return (
    <>
      {/* <!--EXPLORE --> */}
      <div className="explore">
        <div className="explore__label">
          <span>EXPLORE MEDICAL ACCESSORIES</span>
        </div>
        <div className="explore__products__holder">
          <div className="explore__products__holder__wrapper">
            {
              props?.medicaltools?.slice(0, 2).map(renderProduct)
            }
          </div>
          <div className="explore__products__holder__wrapper">
            {
              props?.medicaltools?.slice(2, 4).map(renderProduct)
            }
          </div>
          <div className="explore__products__holder__wrapper">
            {
              props?.medicaltools?.slice(4, 6).map(renderProduct)
            }
          </div>
          <div className="explore__products__holder__wrapper">
            {
              props?.medicaltools?.slice(6, 8).map(renderProduct)
            }
          </div>
          <div className="explore__products__holder__wrapper">
            {
              props?.medicaltools?.slice(8, 10).map(renderProduct)
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Explore
