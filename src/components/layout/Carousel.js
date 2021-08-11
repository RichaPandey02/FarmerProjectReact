//Carousel for Home Page......

import React from "react";
import Carousel from "react-grid-carousel";
import carousl from "../styles/carousl.css";
import $ from "jquery";

const Carousel1 = () => {
  return (
    <div>
      <h1>Farmer's Friend</h1>
      <p>if we grow more food, there will be enough food to feed everyone</p>
      <div div className="carousel">
        <section id="slider" className="carousel-slider">
          <input type="radio" name="slider" id="slide-1-radio" checked />
          <input type="radio" name="slider" id="slide-2-radio" />
          <input type="radio" name="slider" id="slide-3-radio" />

          <div className="slides">
            <div className="slide">
              <a href="#">
                <img
                  src="https://pbs.twimg.com/profile_images/1195420542196568064/Rk6QLKCu.jpg"
                  alt="slide-1"
                />
              </a>
            </div>
            <div className="slide">
              <a href="#">
                <img
                  src="https://i1.wp.com/www.nationofchange.org/wp-content/uploads/2017/03/2012721101822590734_20.jpg?fit=800%2C450&ssl=1"
                  alt="slide-1"
                />
              </a>
            </div>
            <div className="slide">
              <a href="#">
                <img
                  src="https://images.outlookindia.com/public/uploads/articles/2019/12/7/paddy_farmer20140730_571_855.jpg"
                  alt="slide-1"
                />
              </a>
            </div>
          </div>

          <div className="prev-arrow arrow">
            <label for="slide-1-radio" id="prev-1-arrow">
              <i className="fa fa-arrow-left"></i>
              <span className="thumb">
                <img
                  src="http://res.cloudinary.com/hurricane10/image/upload/v1499938951/banner-2_gl3fir.jpg"
                  alt="slide-1-thumb"
                />
              </span>
            </label>
            <label for="slide-2-radio" id="prev-2-arrow">
              <i className="fa fa-arrow-left"></i>
              <span className="thumb">
                <img
                  src="http://res.cloudinary.com/hurricane10/image/upload/v1499939039/banner-4_gdy1qw.jpg"
                  alt="slide-2-thumb"
                />
              </span>
            </label>
            <label for="slide-3-radio" id="prev-3-arrow">
              {/* <i class= "fa fa-arrow-left"></i> */}
              <span className="material-icons brand-icon">arrow_right_alt</span>
              <span className="thumb">
                {/* <img src= "http://res.cloudinary.com/hurricane10/image/upload/v1499939087/banner-1_rlnwku.jpg" alt="slide-3-thumb" /> */}
              </span>
            </label>
          </div>

          <div className="next-arrow arrow">
            <label for="slide-1-radio" id="next-1-arrow">
              {/* <i class= "fa fa-arrow-right"></i> */}
              <span className="thumb">
                <img
                  src="http://res.cloudinary.com/hurricane10/image/upload/v1499938951/banner-2_gl3fir.jpg"
                  alt="slide-1-thumb"
                />
              </span>
            </label>
            <label for="slide-2-radio" id="next-2-arrow">
              {/* <i class= "fa fa-arrow-right"></i> */}
              {/* <i className="material-icons brand-icon" >arrow_left_alt</i>  */}
              <span className="material-icons brand-icon">arrow_right_alt</span>

              <span class="thumb">
                {/* <img src= "http://res.cloudinary.com/hurricane10/image/upload/v1499939039/banner-4_gdy1qw.jpg" alt="slide-2-thumb" /> */}
              </span>
            </label>
            <label for="slide-3-radio" id="next-3-arrow">
              <i class="fa fa-arrow-right"></i>
              <span class="thumb">
                <img
                  src="http://res.cloudinary.com/hurricane10/image/upload/v1499939087/banner-1_rlnwku.jpg"
                  alt="slide-3-thumb"
                />
              </span>
            </label>
          </div>
        </section>
      </div>{" "}
    </div>
  );
};
export default Carousel1;
