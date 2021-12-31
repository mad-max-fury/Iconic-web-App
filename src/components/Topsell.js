import React from 'react'
import '../styles/Topsell.css'
const Topsell = (props) => {

  return (
    <>


      <div className="topsell">
        <div className="topsell__label">
          <span>Top Products</span><span> see all </span>
        </div>
        <div className="topsell__products__holder">
          {
            props?.topproducts?.slice(0, 4).map((product) => {
              return <div className="topsell__products__holder__product" key={product.code_num}>
                <div className="image">
                  <img src={product.images[0]} alt="" srcSet="" />
                </div>
                <div className="description">
                  <div className="product-name">
                    <small >{product.name}</small>
                  </div>
                  <span className="price">
                    &#x20A6; {product.price}
                  </span>
                  <div className="addToCartBtn" id={product.code_num}>
                    ADD TO cart
                  </div>
                </div>
              </div>
            })
          }
        </div>
      </div>
    </>
  )
}

export default Topsell
