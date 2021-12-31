import React, { Component } from 'react';
import "../styles/Hero.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

const Hero = (props) => {


  const settings = {
    dots: false,
    infinite: false,
    autoplayspeed: 1000,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    prevArrow: false,
    nextArrow: false,
    autoplay: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          infinite: true,
        }
      }
    ]
  };
  return (
    <Slider
      {...settings}
      className="slider__main"
      style={{
        display: 'flex',
        gap: "1rem !important",

        border: "1px blue solid"
      }}
    >
      {
        props?.medicalbooks?.map((book, i) => {
          return <>
            <div className={`slideholder${i + 1} holder`} style={{ margin: "0 .5rem" }}>
              <div className="slider__main__slide">
                <div className="slider__main__slide__image">
                  <img src={book.image} alt="" srcSet="" />

                </div>
                <div className="slider__main__slide__description">
                  <div className="title">
                    <h1>{book.title}</h1>
                    <small>{book.authors}</small>

                  </div>
                  <div className="rating">   <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i> <span className="rating__Amount">1304 </span></div>
                  <p className="detailText">{book.description}</p>
                  <div className="addToCart">
                    Add to Cart
                  </div>
                </div>
              </div>
            </div>
          </>
        })
      }
    </Slider>





  )

}

export default Hero
