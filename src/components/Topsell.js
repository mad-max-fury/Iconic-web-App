import React from 'react'
import '../styles/Topsell.css'
const Topsell = () => {
  return (
    <>
      {/* <!--top sells --> */}

      <div className="topsell">
        <div className="topsell__label">
          <span>Top Products</span><span> see all </span>
        </div>
        <div className="topsell__products__holder">
          <div className="topsell__products__holder__product">
            <div className="image">
              <img src="/images/asset 2.webp" alt="" srcSet="" />
            </div>
            <div className="description">
              <div className="product-name">
                <small>Essentials of Medical Physiology,8th Edition by K. Sembulingam</small>
              </div>
              <span className="price">
                &#x20A6; 7,000
              </span>
              <div className="addToCartBtn">
                ADD TO cart
              </div>
            </div>
          </div>
          <div className="topsell__products__holder__product">
            <div className="image">
              <img src="/images/asset 1.webp" alt="" srcSet="" />
            </div>
            <div className="description">
              <div className="product-name">
                <small>Guyton and Hall Textbook of Medical Physiology ( Guyton Physiology) 14th Edition</small>
              </div>
              <span className="price">
                &#8358; 7,000
              </span>
              <div className="addToCartBtn">
                ADD TO cart
              </div>
            </div>
          </div>
          <div className="topsell__products__holder__product">
            <div className="image">
              <img src="/images/asset 3.webp" alt="" srcSet="" />
            </div>
            <div className="description">
              <div className="product-name">
                <small>Textbook of BIOCHEMISTRY for Medical Students 9th Edition 2019 by DM Vasudevan | Sreekumari S |
                  Kannan Vaidyanathan.</small>
              </div>
              <span className="price">
                &#8358; 7,000
              </span>
              <div className="addToCartBtn">
                ADD TO cart
              </div>
            </div>
          </div>
          <div className="topsell__products__holder__product">
            <div className="image">
              <img src="/images/asset 4.webp" alt="" srcSet="" />
            </div>
            <div className="description">
              <div className="product-name">
                <small>U. Satyanarayana Biochemistry 5th Edition</small>
              </div>
              <span className="price">
                &#8358; 7,000
              </span>
              <div className="addToCartBtn">
                ADD TO cart
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Topsell
