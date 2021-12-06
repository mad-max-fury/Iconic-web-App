// import React from 'react'
import { useEffect } from "react";
import "../styles/SignIn.css"

const SignIn = () => {


  const handleContentLoaded = () => {
    const _ = (selector) => {
      return document.querySelector(selector);
    };
    //showing sign In page

    const modal = _("#signIn");
    modal.style.top = '-100%'
    _('.signInBtn').addEventListener("click", function () {
      modal.animate([
        {
          top: '-100%',
        },
        {
          top: '10%',
        }
      ],
        {
          duration: 500,
          easing: 'ease-in-out',
          direction: 'normal',
          fill: 'forwards'


        })
    })
    _(".SignInCloseBtn").addEventListener("click", function (event) {

      modal.animate([
        {
          top: '-100%',
        },
        {
          top: '10%',
        }
      ],
        {
          duration: 500,
          easing: 'ease-in-out',
          direction: 'reverse',
          fill: 'forwards'
        }
      )



    });

  };

  useEffect(() => {
    console.log("using effect");
    document.addEventListener("DOMContentLoaded", handleContentLoaded);
  }, []);




  return (
    <>
      {/* <!--SIGN IN MODAL--> */}
      <form className="signIn" id="signIn">
        <span className="SignInCloseBtn"><a href="#">&times;</a></span>
        <div className="signIn__heading">
          <h3>Sign In</h3>
        </div>
        <div className="signIn__formInput">
          <input type="text" placeholder="Enter Username or Email" id="Email-or-Username" />
          <input type="password" placeholder="Enter password" id="passwordsignIn" />
        </div>
        <div className="login">
          <a href="#" id="sign-in-btn">
            Sign In
          </a>
        </div>
        <p>forgot password? <span><a href="#">click here</a></span></p>
        <p>OR</p>
        <div className="facebook-login">
          <a href="#">
            continue with Google
          </a>
        </div>
        <p>Don't have an account ? <span><a id="signUpPage" href="#signUp">Sign up here</a></span></p>

      </form>
    </>
  )
}

export default SignIn
