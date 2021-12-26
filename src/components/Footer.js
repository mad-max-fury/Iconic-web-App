import React from 'react'
import "../styles/Footer.css"

const Footer = () => {
  return (

    <footer id="footer">
      <div className="howItWork">
        <img src="/images/asset 74.png" alt="" srcSet="" />
        <img src="/images/asset 75.png" alt="" srcSet="" />
        <img src="/images/asset 76.png" alt="" srcSet="" />
        <img src="/images/asset 77.png" alt="" srcSet="" />

      </div>

      <div className="wrapperFirst">
        <div className="logo">
          <a href="#">
            <img src="/images/media_16275151701056725651.jpg" alt="" srcSet="" />
          </a>
        </div>
        <div className="quickLink">
          <div className="heading">QUICK LINK</div>
          <ul>
            <li>About</li>
            <li>Shop</li>
            <li>Blog</li>
            <li>Privacy & Policy</li>
          </ul>
        </div>
        <div>
          <div className="heading">CONTACT US</div>
          <p>Usmanu Danfodiyo University, Sokoto, Sokoto state.</p>
          <p>+2348108241407</p>
        </div>
        <div>
          <div className="heading">FOLLOW US</div>
          <div className="social-icon">
            <img src="/images/Facebook icon.png" alt="Facebook-icon" />
            <img src="/images/twitter icon.png" alt="twitter-icon" />
            <img src="/images/Instagram icon.png" alt="Instagram-icon" />
          </div>

        </div>

      </div>
      <div className="wrapperLast">
        <div className="copyright">
          Copyright &copy; 2021, IconicMedNeeds. All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
