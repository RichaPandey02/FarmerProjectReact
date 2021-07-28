import React from "react";
import "../layout/Footer.css";
const Footer = () => {
  return (
    <div className="fit">
      <footer class="page-footer font-small teal pt-4">
        <div class="container-fluid text-center text-md-left">
          <div class="row">
            <div class="col-md-6 mt-md-0 mt-3">
              <h5
                class="text-uppercase font-weight-bold"
                style={{ color: "white" }}
              ></h5>
              <p style={{ color: "white" }}>
                Farmers are the backbone of our society. They are the ones who
                provide us all the food that we eat. ... Thus Farmers are the
                most important people in the world..😊😉😉
              </p>

              <img
                src="https://indiaforensic.com/certifications/wp-content/uploads/2017/01/agriculture.jpg"
                style={{ height: "110px", width: "300px" }}
              />
            </div>

            <hr class="clearfix w-100 d-md-none pb-3" />

            <div class="col-md-6 mb-md-0 mb-3">
              <h5
                class="text-uppercase font-weight-bold"
                style={{ color: "white" }}
              ></h5>

              <div className="my-details-info-container">
                <i className="fas fa-map-marker-alt"></i>
                <h5>Get In touch</h5>
                <span>Farmers Friend 👩‍👩‍👧</span>
              </div>
              <div className="my-details-info-container">
                <i className="fas fa-map-marker-alt"></i>
                <span>Kanpur, Uttar Pradesh</span>
              </div>

              <div className="my-details-info-container">
                <i className="fas fa-mobile-alt"></i>
                <span>9999999999</span>
              </div>
              <div className="my-details-info-container">
                <i className="far fa-envelope"></i>
                <span>richapandey0297@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
