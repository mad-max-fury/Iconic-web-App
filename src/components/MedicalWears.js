import React from 'react'
import '../styles/Topsell.css'
const MedicalWears = (props) => {
  return (
    <>
      <div className="topsell">
        <div className="topsell__label">
          <span>MEDICAL WEARS</span><span> see all </span>
        </div>
        <div className="topsell__products__holder">
          {
            props?.medicalwears?.map((product) => {
              return <>
                <div className="topsell__products__holder__product">
                  <div className="image">
                    <img src={product.images[0]} alt="" srcSet="" />
                  </div>
                  <div className="description">
                    <div className="product-name">
                      <small>{product.name}</small>
                    </div>
                    <span className="price">
                      &#x20A6; {product.price}
                    </span>
                    <div className="addToCartBtn">
                      ADD TO cart
                    </div>
                  </div>
                </div>
              </>
            })
          }
        </div>
      </div>
    </>
  )
}

export default MedicalWears
