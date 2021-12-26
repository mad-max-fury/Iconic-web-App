import React from 'react'
import '../styles/Topsell.css'
const MedicalWears = () => {
  return (
    <>
      <div className="topsell">
        <div className="topsell__label">
          <span>MEDICAL WEARS</span><span> see all </span>
        </div>
        <div className="topsell__products__holder">
          <div className="topsell__products__holder__product">
            <div className="image">
              <img src="/images/asset 54.jpeg" alt="" srcSet="" />
            </div>
            <div className="description">
              <div className="product-name">
                <small>Disposable Safety Nose Masks (Pack of 50)</small>
              </div>
              <span className="price">
                &#x20A6; 3,000
              </span>
              <div className="addToCartBtn">
                ADD TO cart
              </div>
            </div>
          </div>
          <div className="topsell__products__holder__product">
            <div className="image">
              <img src="/images/asset 56.jpeg" alt="" srcSet="" />
            </div>
            <div className="description">
              <div className="product-name">
                <small>Disposable Latex Gloves 100Pcs</small>
              </div>
              <span className="price">
                &#8358; 3,000
              </span>
              <div className="addToCartBtn">
                ADD TO cart
              </div>
            </div>
          </div>
          <div className="topsell__products__holder__product">
            <div className="image">
              <img src="/images/MED GOGGLE.jpg" alt="" srcSet="" />
            </div>
            <div className="description">
              <div className="product-name">
                <small>WSGG Medical Goggles, FDA registered, Safety Goggles, Fit Over Glasses, Anti-Fog, Anti-Splash (1
                  pack)</small>
              </div>
              <span className="price">
                &#8358; 15,000
              </span>
              <div className="addToCartBtn">
                ADD TO cart
              </div>
            </div>
          </div>
          <div className="topsell__products__holder__product">
            <div className="image">
              <img src="/images/LAB COAT.jpg" alt="" srcSet="" />
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

export default MedicalWears
