import React from 'react'
import '../layout/Footer.css'
const Footer=()=>{
    return(
    <div>

<section id="contact" style={{resize:"both"}} >
    <h1 className="section-heading mb50px">
        <span>
            <i className="far fa-address-card"></i>
        </span>
        <span> About Us </span>
    </h1>
    <div id="contact-container">

        <div id="contact-form-container" >
          <app-chatbot></app-chatbot >

        </div>
        <div id="my-details-container" style={{height:"inherit"}}>

            <h3> Get In touch </h3>
            <p> Farmers are the backbone of our society. They are the ones who provide us all the food that we eat. ... Thus Farmers are the most important people in the world.. </p>

            <h3> My Address </h3>
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
</section>


    </div>
    )
}
export default Footer