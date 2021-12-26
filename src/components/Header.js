import React from 'react'
import '../styles/Header.css'
import {
  Link
} from 'react-router-dom'
import SignIn from './SignIn'
import SignUp from './SignUp'
function Header() {


  return (
    <>
      <header className="main-header" id="main-header">
        <div className="logo">
          <a href="#">
            <img src="/images/media_16275151701056725651.jpg" alt="" srcSet="" />
          </a>
        </div>


        <input type="checkbox" id="menu-btn" className="menu-btn" />
        <label htmlFor="menu-btn" className="menu-icon">
          <span className="menu-icon__line"></span>
        </label>


        <ul className="nav-links" id="nav-links">

          <li className="nav-link">
            <Link to="/shop">Shop</Link>
          </li>



          <li className="nav-link">
            <a href="#">About</a>
          </li>

          <li className="nav-link">
            <Link to="/Cart"><i className="fas fa-shopping-cart fa-1x"></i> <span>cart</span></Link>
          </li>
          <li className="nav-link signInBtn" id="account">
            <Link className="accountlink" to="#signIn"> Login </Link>
          </li>

        </ul>

        <SignIn />
        <SignUp />
      </header>

    </>
  )
}

export default Header
