import React from 'react'
import '../styles/Header.css'
import {

  Link
} from 'react-router-dom'
function Header() {

  // window.addEventListener('scroll', () => {


  //   const header = document.getElementsById('main-header')
  //   const scrollPos = window.scrollY;
  //   if (scrollPos > 10) {
  //     header.classList.add('scrolled')

  //   } else {
  //     header.classList.remove('scrolled')

  //   }
  // })
  // const _ = (selector) => {
  //   return document.querySelector(selector);
  // };





  // var listContainer = _("#nav-links");
  // var list = listContainer.getElementsByClassName("nav-link");

  // for (let i = 0; i < list.length; i++) {

  //   list[i].addEventListener("click", function (e) {
  //     // if (!e.target.parentElement.id) logQuick.style.display = 'none'
  //     var current = document.getElementsByClassName("active");

  //     // If there's no active class
  //     if (current.length > 0) {
  //       current[0].className = current[0].className.replace(" active", "");

  //     }

  //     // Add the active class to the current/clicked button
  //     this.className += " active";
  //   });
  // }
  return (
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
          <a className="accountlink" href="#signIn"> Login </a>
        </li>

      </ul>


    </header>
  )
}

export default Header
