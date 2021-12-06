import React from 'react'
import "../styles/Footer.css"

const Footer = () => {
  return (

    <footer id="footer">
      <div class="howItWork">
        <img src="/images/asset 74.png" alt="" srcset="" />
        <img src="/images/asset 75.png" alt="" srcset="" />
        <img src="/images/asset 76.png" alt="" srcset="" />
        <img src="/images/asset 77.png" alt="" srcset="" />

      </div>

      <div class="wrapperFirst">
        <div class="logo">
          <a href="#">
            <img src="/images/media_16275151701056725651.jpg" alt="" srcSet="" />
          </a>
        </div>
        <div class="quickLink">
          <div class="heading">QUICK LINK</div>
          <ul>
            <li>About</li>
            <li>Shop</li>
            <li>Blog</li>
            <li>Privacy & Policy</li>
          </ul>
        </div>
        <div>
          <div class="heading">CONTACT US</div>
          <p>Usmanu Danfodiyo University, Sokoto, Sokoto state.</p>
          <p>+2348108241407</p>
        </div>
        <div>
          <div class="heading">FOLLOW US</div>
          <div class="social-icon">
            <img src="/images/Facebook icon.png" alt="Facebook-icon" />
            <img src="/images/twitter icon.png" alt="twitter-icon" />
            <img src="/images/Instagram icon.png" alt="Instagram-icon" />
          </div>

        </div>

      </div>
      <div class="wrapperLast">
        <div class="copyright">
          Copyright &copy; 2021, IconicMedNeeds. All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
