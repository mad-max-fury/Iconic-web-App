import React from 'react'
import '../styles/Topsell.css'
const Topsell = () => {
  return (
    <>
      {/* <!--top sells --> */}

      <div class="topsell">
        <div class="topsell__label">
          <span>Top Products</span><span> see all </span>
        </div>
        <div class="topsell__products__holder">
          <div class="topsell__products__holder__product">
            <div class="image">
              <img src="/images/asset 2.webp" alt="" srcset="" />
            </div>
            <div class="description">
              <div class="product-name">
                <small>Essentials of Medical Physiology,8th Edition by K. Sembulingam</small>
              </div>
              <span class="price">
                &#x20A6; 7,000
              </span>
              <div class="addToCartBtn">
                ADD TO cart
              </div>
            </div>
          </div>
          <div class="topsell__products__holder__product">
            <div class="image">
              <img src="/images/asset 1.webp" alt="" srcset="" />
            </div>
            <div class="description">
              <div class="product-name">
                <small>Guyton and Hall Textbook of Medical Physiology ( Guyton Physiology) 14th Edition</small>
              </div>
              <span class="price">
                &#8358; 7,000
              </span>
              <div class="addToCartBtn">
                ADD TO cart
              </div>
            </div>
          </div>
          <div class="topsell__products__holder__product">
            <div class="image">
              <img src="/images/asset 3.webp" alt="" srcset="" />
            </div>
            <div class="description">
              <div class="product-name">
                <small>Textbook of BIOCHEMISTRY for Medical Students 9th Edition 2019 by DM Vasudevan | Sreekumari S |
                  Kannan Vaidyanathan.</small>
              </div>
              <span class="price">
                &#8358; 7,000
              </span>
              <div class="addToCartBtn">
                ADD TO cart
              </div>
            </div>
          </div>
          <div class="topsell__products__holder__product">
            <div class="image">
              <img src="/images/asset 4.webp" alt="" srcset="" />
            </div>
            <div class="description">
              <div class="product-name">
                <small>U. Satyanarayana Biochemistry 5th Edition</small>
              </div>
              <span class="price">
                &#8358; 7,000
              </span>
              <div class="addToCartBtn">
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
