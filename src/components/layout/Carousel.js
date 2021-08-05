import React from "react";
import Carousel from "react-grid-carousel";
 import carousl from "../styles/carousl.css";
 import $ from 'jquery';
 


 

const Carousel1 = () => {
  

//   var slides = document.querySelectorAll(".slide");
// var dots = document.querySelectorAll(".dot");
// var index = 0;


// function prevSlide(n){
//   index+=n;
//   console.log("prevSlide is called");
//   changeSlide();
// }

// function nextSlide(n){
//   index+=n;
//   changeSlide();
// }

// changeSlide();

// function changeSlide(){
    
//   if(index>slides.length-1)
//     index=0;
  
//   if(index<0)
//     index=slides.length-1;
  
  
  
//     for(let i=0;i<slides.length;i++){
//       slides[i].style.display = "none";
      
//       dots[i].classList.remove("active");
      
      
//     }
    
//     slides[index].style.display = "block";
//     dots[index].classList.add("active");

  

// }



  

  return (
      // <Carousel cols={3} rows={1} gap={10} loop>
      //   <Carousel.Item>
      //     <img width="100%" src="https://wallpaperaccess.com/full/1154374.jpg" />
      //   </Carousel.Item>
      //   <Carousel.Item>
      //     <img width="100%" src="https://wallpapercave.com/wp/wp4516338.jpg" />
      //   </Carousel.Item>
      //   <Carousel.Item>
      //     <img
      //       width="100%"
      //       height="100%"
      //       src="https://media.istockphoto.com/photos/rural-landscape-sunset-panorama-picture-id487300412?k=6&m=487300412&s=170667a&w=0&h=V2OFI_UQyTNBC1VUwClkSpe1uQLs_ch_mFTOBnAzEgE="
      //     />
      //   </Carousel.Item>
      //   <Carousel.Item>
      //     <img width="100%" src="https://wallpaperaccess.com/full/1154374.jpg" />
      //   </Carousel.Item>
      //   <Carousel.Item>
      //     <img width="100%" src="https://wallpapercave.com/wp/wp4516338.jpg" />
      //   </Carousel.Item>
      //   <Carousel.Item>
      //     <img width="100%" src="https://wallpaperaccess.com/full/1154374.jpg" />
      //   </Carousel.Item>
      // </Carousel>

      
     
      






      // <div>
      // <div id="slider">  
      //   <div class="slide" style={{background:'red'}}>
      //     <img src="https://img.fotocommunity.com/peacefull-95e65145-d050-4957-9ddc-85dd60689d45.jpg?height=500" >
      //       </img>
      //   </div>
        
      //   <div class="slide" style={{background:'coral'}}>
      //      <img src="https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/2/sunset-storm-haystack-rock-canon-beach-oregon-coast-tl-mair.jpg" >
      //        </img>
      //   </div>
       
      //   <div class="slide" style={{background:'crimson'}}>
      //     <img src=" https://render.fineartamerica.com/images/images-profile-flow/400/images-medium-large-5/1-tourists-at-eiffel-tower-paris-panoramic-images.jpg" >
      //       </img>
      //   </div>
        
      //   <div class="slide" style={{background:'#6edf10'}}>
      //     <img src="https://dmasia.travel/wp-content/uploads/2019/09/vit3-1000x350.jpg" >
      //       </img>
      //   </div>
        
      
      //   <span class="controls" onclick="prevSlide(-1)" id="left-arrow"><i class="fa fa-arrow-left" aria-hidden="true"></i>
      // </span>
      //   <span class="controls" id="right-arrow" onclick="nextSlide(1)"><i class="fa fa-arrow-right" aria-hidden="true"></i>
      // </span>
      // </div>
      //   <div id="dots-con">
      //  <span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="dot"></span>
      //  </div>
      //  </div>
      
       



      // <div id="slider">
			// 		  <figure>
			// 			    <img src="https://cdn.wallpapersafari.com/67/5/3Rezuw.jpg"></img>
			// 			    <img src="https://i.pinimg.com/originals/22/41/19/224119dd1f959bbd537b731d26af5142.jpg"></img>
			// 			    <img src="https://i0.wp.com/countrysquire.co.uk/wp-content/uploads/2020/05/ssassew.jpg?fit=1332%2C850&ssl=1"></img>
			// 		  </figure>
			// 	</div>


<div>
<h1>Farmer's Friend</h1>

<p>If we grow more food, there will be enough food to feed everyone</p>
    <div div className="carousel">
<section id= "slider">

  
  <input type= "radio" name="slider" id= "slide-1-radio" checked />
  <input type= "radio" name="slider" id= "slide-2-radio" />
  <input type= "radio" name="slider" id= "slide-3-radio" />
  
  <div class= "slides">
    <div class= "slide">
      <a href= "#"><img src= "https://www.fairobserver.com/wp-content/uploads/2019/02/Farmer-suicides-Indian-farmers-Indian-news-India-1.jpg" alt="slide-1" /></a>
    </div>
    <div class= "slide">
      <a href= "#"><img src= "https://images.outlookindia.com/public/uploads/articles/2019/12/7/paddy_farmer20140730_571_855.jpg" alt="slide-1" /></a>
    </div>
    <div class= "slide">
      <a href= "#"><img src= "https://images.outlookindia.com/public/uploads/articles/2019/12/7/paddy_farmer20140730_571_855.jpg" alt="slide-1" /></a>
    </div>
  </div>
 
  <div class="prev-arrow arrow">
    <label for= "slide-1-radio" id= "prev-1-arrow">
       <i class= "fa fa-arrow-left"></i> 
      <span class= "thumb">
         <img src= "http://res.cloudinary.com/hurricane10/image/upload/v1499938951/banner-2_gl3fir.jpg" alt="slide-1-thumb" /> 
      </span>
    </label>
    <label for= "slide-2-radio" id= "prev-2-arrow">
      <i class= "fa fa-arrow-left"></i>
      <span class= "thumb">
        <img src= "http://res.cloudinary.com/hurricane10/image/upload/v1499939039/banner-4_gdy1qw.jpg" alt="slide-2-thumb" />
      </span>
    </label>
    <label for= "slide-3-radio" id= "prev-3-arrow">
      {/* <i class= "fa fa-arrow-left"></i> */}
      <span class="material-icons brand-icon">
arrow_right_alt
</span>
      <span class= "thumb">
        {/* <img src= "http://res.cloudinary.com/hurricane10/image/upload/v1499939087/banner-1_rlnwku.jpg" alt="slide-3-thumb" /> */}
      </span>
    </label>
  </div>
  
  <div class="next-arrow arrow">
    <label for= "slide-1-radio" id= "next-1-arrow">
      {/* <i class= "fa fa-arrow-right"></i> */}
      <span class= "thumb">
        <img src= "http://res.cloudinary.com/hurricane10/image/upload/v1499938951/banner-2_gl3fir.jpg" alt="slide-1-thumb" />
      </span>
    </label>
    <label for= "slide-2-radio" id= "next-2-arrow">
      {/* <i class= "fa fa-arrow-right"></i> */}
      {/* <i className="material-icons brand-icon" >arrow_left_alt</i>  */}
      <span class="material-icons brand-icon">
arrow_right_alt
</span>

      
      <span class= "thumb">
        {/* <img src= "http://res.cloudinary.com/hurricane10/image/upload/v1499939039/banner-4_gdy1qw.jpg" alt="slide-2-thumb" /> */}
      </span>
    </label>
    <label for= "slide-3-radio" id= "next-3-arrow">
      <i class= "fa fa-arrow-right"></i>
      <span class= "thumb">
        <img src= "http://res.cloudinary.com/hurricane10/image/upload/v1499939087/banner-1_rlnwku.jpg" alt="slide-3-thumb" />
      </span>
    </label>
  </div>
  
</section>
</div>
</div>



      
   

 
  );
};
export default Carousel1;
