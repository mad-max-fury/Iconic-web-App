import React, { Component } from 'react';
import "../styles/Hero.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

class Hero extends Component {

  render() {
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

        <div className="slideholder1 holder" >
          <div className="slider__main__slide">
            <div className="slider__main__slide__image">
              <img src="/images/asset 85.jpeg" alt="" srcSet="" />

            </div>
            <div className="slider__main__slide__description">
              <div className="title">
                <h1>The Anatomical Basis of Clinical Practice </h1>
                <small>by Henry Gray </small>

              </div>
              <div className="rating">   <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i> <span className="rating__Amount">1304 </span></div>
              <p className="detailText">
                In 1858, Drs. Henry Gray and Henry Vandyke Carter created a book for their surgical colleagues that
                established an
                enduring standard among anatomical texts. After more than 150 years of continuous publication, Gray’s
                Anatomy remains
                the definitive, comprehensive reference on the subject, offering ready access to the information you
                need to ensure
                safe, effective practice.


              </p>
              <div className="addToCart">
                Add to Cart
              </div>
            </div>
          </div>
        </div>

        <div className="slideholder2 holder">
          <div className="slider__main__slide">
            <div className="slider__main__slide__image">
              <img src="/images/asset 1.jpeg" alt="" srcSet="" />

            </div>
            <div className="slider__main__slide__description">
              <div className="title">
                <h1>System of Orthopaedics and trauma </h1>
                <small>by Apley & Solomon's </small>
              </div>
              <div className="rating">   <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i> <span className="rating__Amount">1518 </span></div>
              <p className="detailText">
                Now in its Tenth Edition and in continuous publication since 1959, Apley & Solomon's System of
                Orthopaedics and Trauma
                is one of the world's leading textbooks of orthopaedic surgery. Relied upon by generations of
                orthopaedic
                trainees the
                book remains true to the teaching principles of the late Alan Apley and his successor Professor Louis
                Solomon.
              </p>
              <div className="addToCart">
                Add to Cart
              </div>
            </div>
          </div>
        </div>

        <div className="slideholder3 holder">
          <div className="slider__main__slide">
            <div className="slider__main__slide__image">
              <img src="/images/asset 8.jpeg" alt="" srcSet="" />

            </div>
            <div className="slider__main__slide__description">
              <div className="title">
                <h1>The Merck Manual of Diagnosis and Therapy</h1>
                <small>by Robert E. Porter </small>
              </div>
              <div className="rating">   <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i> <span className="rating__Amount">630</span></div>
              <p className="detailText">
                Back by popular demand! The world's most widely used medical reference is now in its 20th edition. The
                Merck Manual of
                Diagnosis and Therapy now in its 20th edition has been thoroughly updated and thoughtfully expanded with
                a new larger
                trim size to include 40% new and revised content. Including 36 new chapters with more than 200 new
                tables, and numerous
                new figures.
              </p>
              <div className="addToCart">
                Add to Cart
              </div>
            </div>
          </div>
        </div>


        <div className="slideholder4 holder">
          <div className="slider__main__slide">
            <div className="slider__main__slide__image">
              <img src="/images/asset 82.jpeg" alt="" srcSet="" />

            </div>
            <div className="slider__main__slide__description">
              <div className="title">
                <h1>Inderbir Singh's Human Embryology</h1>
                <small>V Subhadra Devi</small>
              </div>
              <div className="rating">   <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i> <span className="rating__Amount">204 </span></div>
              <p className="detailText">
                Beginning with an overview of genetics, the female reproductive system, fertilisation, and early
                development of the
                embryo, the following sections each examine the development of a different embryonic system.

                The genetic and molecular aspects of each system are presented in tabular format and clinical
                correlations are
                highlighted in separate boxes to enhance learning.
              </p>
              <div className="addToCart">
                Add to Cart
              </div>
            </div>
          </div>
        </div>


        <div className="slideholder5 holder">
          <div className="slider__main__slide">
            <div className="slider__main__slide__image">
              <img src="/images/asset 62.jpeg" alt="" srcSet="" />

            </div>
            <div className="slider__main__slide__description">
              <div className="title">
                <h1> Oxford Concise Medical Dictionary </h1>
                <small>Edited by Elizabeth Martin </small>
              </div>
              <div className="rating">   <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i> <span className="rating__Amount">2205 </span></div>
              <p className="detailText">
                This best selling illustrated dictionary contains nearly 12,000 entries covering all aspect of medical
                science

                Written by a team of medical experts,the entries are up to date,accessible and concise.Indispensable for
                student of
                medica science,those working in the medical and allied professions, and as home reference
              </p>
              <div className="addToCart">
                Add to Cart
              </div>
            </div>
          </div>
        </div>

      </Slider>





    )
  }
}

export default Hero
