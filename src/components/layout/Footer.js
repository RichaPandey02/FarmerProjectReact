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
              >
                {/* Footer text 1 */}
              </h5>
              <p style={{ color: "white" }}>
                Farmers are the backbone of our society. They are the ones who
                provide us all the food that we eat. ... Thus Farmers are the
                most important people in the world..
              </p>
            </div>

            <hr class="clearfix w-100 d-md-none pb-3" />

            <div class="col-md-6 mb-md-0 mb-3">
              <h5
                class="text-uppercase font-weight-bold"
                style={{ color: "white" }}
              >
                {/* Footer text 2 */}
              </h5>
               {/* <p style={{ color: "white" }}>
                {" "}
                Farmers are the backbone of our society. They are the ones who
                provide us all the food that we eat. ... Thus Farmers are the
                most important people in the world...
              </p>  */}
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

        {/* <div class="footer-copyright text-center py-3">
       richapandey0297@gmail.com
          <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
        </div> */}
      </footer>
    </div>
  );
};
export default Footer;
