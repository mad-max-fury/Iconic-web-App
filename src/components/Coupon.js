import React from 'react'
import "../styles/Coupon.css"
const Coupon = () => {
  return (
    <>

      <div class="cart-actions">
        <div class="couponWrapper">

          <div class="couponWrapper__couponInnerWrapper">

            <input type="text" name="coupon_code" class="input-text" id="coupon_code" placeholder="Coupon code" /> <button type="submit" class="button" name="apply_coupon" value="Apply coupon">Apply coupon</button>

          </div>

        </div>
        <div class=" order-first ">

          <button type="submit" class="button" name="update_cart" value="Update cart" disabled="" aria-disabled="true">Update cart</button>
        </div>

      </div>
    </>
  )
}

export default Coupon
