import React from 'react'

import "../styles/Subtotal.css"
const SubTotal = () => {
  return (
    <>
      <div class="cart_totals ">

        <div class="cart-totals-inner">
          <h2>Cart totals</h2>

          <table cellspacing="0" class="shop_table ">

            <tbody className="subtotal-table">
              <tr class="cart-subtotal">
                <th>Subtotal</th>
                <td data-title="Subtotal"><span class="Price-amount amount"><bdi><span class="Price-currencySymbol">&#8358;</span>&nbsp;3.971.000</bdi></span></td>
              </tr>



              <tr class="fee">
                <th>Unique Number</th>
                <td data-title="Unique Number"><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">&#8358;</span>&nbsp;387</bdi></span></td>
              </tr>



              <tr class="order-total">
                <th>Total</th>
                <td data-title="Total"><strong><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">&#8358;</span>&nbsp;3.971.387</bdi></span></strong> </td>
              </tr>


            </tbody>
          </table>

          <div class="proceed-to-checkout">

            <a href="" class="checkout-button ">
              Proceed to checkout</a>
          </div>

        </div>
        {/* <!--.cart-totals-inner--> */}
      </div>
    </>
  )
}

export default SubTotal
