import React from 'react'
import Coupon from './Coupon'
import "../styles/CartItemsTables.css"
const CartItemsTables = () => {
  return (
    <>
      <div class="cart-table-section">


        <table class="shop_table" cellspacing="0">
          <thead>
            <tr>
              <th class="product-remove">&nbsp;</th>
              <th class="product-thumbnail">&nbsp;</th>
              <th class="product-name">Product</th>
              <th class="product-price">Price</th>
              <th class="product-quantity">Quantity</th>
              <th class="product-subtotal">Subtotal</th>
            </tr>
          </thead>
          <tbody>

            <tr class="cart-form__cart-item cart_item">

              <td class="product-remove">
                <a data-gtm4wp_product_id="50522" data-gtm4wp_product_name="Arfak Series &amp; Ivori Simply" data-gtm4wp_product_price="1543000" data-gtm4wp_product_cat="Couple" data-gtm4wp_product_url="https://www.garvinoes.com/cart/" data-gtm4wp_product_variant="" data-gtm4wp_product_stocklevel="" data-gtm4wp_product_brand="" href="https://www.garvinoes.com/cart/?remove_item=9af4aff32283b1e2e93d93948d2f5847&amp;_wpnonce=066970f727" class="remove" aria-label="Remove this item" data-product_id="50522" data-product_sku="">×</a>

              </td>

              <td class="product-thumbnail">
                <a href="https://www.garvinoes.com/product/arfak-series-ivori-simply/"><img width="300" height="300" src="https://www.garvinoes.com/wp-content/uploads/2021/10/ARFAK-SERIES-IVORI-SIMPLY-300x300.jpg" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="" loading="lazy" srcset="https://www.garvinoes.com/wp-content/uploads/2021/10/ARFAK-SERIES-IVORI-SIMPLY-300x300.jpg 300w, https://www.garvinoes.com/wp-content/uploads/2021/10/ARFAK-SERIES-IVORI-SIMPLY-1024x1024.jpg 1024w, https://www.garvinoes.com/wp-content/uploads/2021/10/ARFAK-SERIES-IVORI-SIMPLY-628x628.jpg 628w, https://www.garvinoes.com/wp-content/uploads/2021/10/ARFAK-SERIES-IVORI-SIMPLY-768x768.jpg 768w, https://www.garvinoes.com/wp-content/uploads/2021/10/ARFAK-SERIES-IVORI-SIMPLY-600x600.jpg 600w, https://www.garvinoes.com/wp-content/uploads/2021/10/ARFAK-SERIES-IVORI-SIMPLY-100x100.jpg 100w, https://www.garvinoes.com/wp-content/uploads/2021/10/ARFAK-SERIES-IVORI-SIMPLY.jpg 1080w" sizes="(max-width: 300px) 100vw, 300px" /></a>
              </td>

              <td class="product-name" data-title="Product">
                <a href="https://www.garvinoes.com/product/arfak-series-ivori-simply/">Arfak Series &amp; Ivori Simply</a>
              </td>

              <td class="product-price" data-title="Price">
                <span class="Price-amount amount"><bdi><span class="Price-currencySymbol">&#8358;</span>&nbsp;1.543.000</bdi></span>
              </td>

              <td class="product-quantity" data-title="Quantity">
                <div class="quantity">
                  <label class="screen-reader-text" for="quantity_61967c7aeeb30">Arfak Series &amp; Ivori Simply quantity</label>
                  <input type="button" value="-" class="minus" />
                  <input type="number" id="quantity_61967c7aeeb30" class="input-text qty text" step="1" min="0" max="" name="cart[9af4aff32283b1e2e93d93948d2f5847][qty]" value="1" title="Qty" size="4" placeholder="" inputmode="numeric" />
                  <input type="button" value="+" class="plus" />
                </div>
              </td>

              <td class="product-subtotal" data-title="Subtotal">
                <span class="Price-amount amount"><bdi><span class="Price-currencySymbol">&#8358;</span>&nbsp;1.543.000</bdi></span>
              </td>
            </tr>


            <tr class="cart-form__cart-item cart_item">

              <td class="product-remove">
                <a data-gtm4wp_product_id="1906" data-gtm4wp_product_name="Arfak Leather (Men 43mm)" data-gtm4wp_product_price="885000" data-gtm4wp_product_cat="Men's Watches" data-gtm4wp_product_url="https://www.garvinoes.com/cart/" data-gtm4wp_product_variant="" data-gtm4wp_product_stocklevel="" data-gtm4wp_product_brand="" href="https://www.garvinoes.com/cart/?remove_item=63cd1b6e61c4747987dbae816614f50d&amp;_wpnonce=066970f727" class="remove" aria-label="Remove this item" data-product_id="1906" data-product_sku="">×</a>
              </td>

              <td class="product-thumbnail">
                <a href="https://www.garvinoes.com/product/arfak-leather/"><img width="300" height="300" src="https://www.garvinoes.com/wp-content/uploads/2019/03/1-min-1-2-3-300x300.jpg" /></a>								</td>

              <td class="product-name" data-title="Product">
                <a href="https://www.garvinoes.com/product/arfak-leather/">Arfak Leather (Men 43mm)</a>								</td>

              <td class="product-price" data-title="Price">
                <span class="Price-amount amount"><bdi><span class="Price-currencySymbol">&#8358;</span>&nbsp;885.000</bdi></span>								</td>

              <td class="product-quantity" data-title="Quantity">
                <div class="quantity">
                  <input type="button" value="-" class="minus" />
                  {/* <label class="screen-reader-text" for="quantity_61967c7aef260">Arfak Leather (Men 43mm) quantity</label> */}
                  <input type="number" id="quantity_61967c7aef260" class="input-text qty text" step="1" min="0" max="" name="cart[63cd1b6e61c4747987dbae816614f50d][qty]" value="1" title="Qty" size="4" placeholder="" inputmode="numeric" />
                  <input type="button" value="+" class="plus" />
                </div>
              </td>

              <td class="product-subtotal" data-title="Subtotal">
                <span class="Price-amount amount"><bdi><span class="Price-currencySymbol">&#8358;</span>&nbsp;885.000</bdi></span>								</td>
            </tr>



          </tbody>
        </table>
        <Coupon />
      </div>
    </>
  )
}

export default CartItemsTables
