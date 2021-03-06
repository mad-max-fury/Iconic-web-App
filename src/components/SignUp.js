import { useEffect } from 'react'
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import "../styles/SignUp.css"
const SignUp = () => {
  const handleContentLoaded = () => {
    const _ = (selector) => {
      return document.querySelector(selector);
    };
    const modal = _("#signIn");
    const signUpPageLink = _('#signUpPage')
    _("#signUp").style.right = '-200%'
    //showing signUp page

    signUpPageLink.addEventListener("click", function (event) {


      modal.animate([
        {
          left: '0%',
        },
        {
          left: '-200%',
        }
      ],
        {
          duration: 500,
          easing: 'ease-in-out',
          direction: 'normal',
          fill: 'forwards'
        }
      )

      _("#signUp").animate([
        {
          right: '-200%',
        },
        {
          right: '0%',
        }
      ],
        {
          duration: 500,
          easing: 'ease-in-out',
          direction: 'normal',
          fill: 'forwards'
        }
      )



    });
    _('.SignUpCloseBtn').addEventListener("click", function (event) {


      modal.animate([
        {
          left: '0%',
        },
        {
          left: '-200%',
        }
      ],
        {
          duration: 500,
          easing: 'ease-in-out',
          direction: 'reverse',
          fill: 'forwards'
        }
      )

      _("#signUp").animate([
        {
          right: '-200%',
        },
        {
          right: '0%',
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
    _('#signInLink').addEventListener("click", function (event) {


      modal.animate([
        {
          left: '0%',
        },
        {
          left: '-200%',
        }
      ],
        {
          duration: 500,
          easing: 'ease-in-out',
          direction: 'reverse',
          fill: 'forwards'
        }
      )

      _("#signUp").animate([
        {
          right: '-200%',
        },
        {
          right: '0%',
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

    handleContentLoaded()
  }, []);

  return ReactDOM.createPortal(
    <>

      {/* <!--SIGN UP MODAL--> */}
      <form className="signUp" id="signUp">
        <span className="SignUpCloseBtn">&times;</span>
        <div className="signUp__heading">
          <h3>register</h3>
        </div>
        <div className="signUp__formInput">
          <input type="email" placeholder="Enter email" id="signUpEmail" />
          <input type="text" id="first_name" placeholder="First Name" />
          <input type="text" id="last_name" placeholder="last Name" />
          <input type="text" id="middle_name" placeholder="Middle Name" />
          <input type="number" placeholder="+234" id="phone" />
          <input type="password" placeholder="Enter password" id="password" />
        </div>

        <div className="signIns">
          <div className="sign-up">
            <a href="#" id="sign-up-btn">
              Sign Up
            </a>
          </div>
          <div>- OR -</div>
          <div className="signUp__choices">
            <div className="signUp__choices__google">
              <button> Sign Up google</button>
            </div>
          </div>
        </div>
        <p>By proceeding, you are agreeing to our <span><a href="#">Terms & condditions</a></span> and <span><a
          href="#">Privacy Policy</a></span></p>
        <p>Already a user ? <span><Link id="signInLink" to="#signIn">Sign In here</Link></span></p>

      </form>
    </>,
    document.getElementById("portal")

  )
}

export default SignUp
