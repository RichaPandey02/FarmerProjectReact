// import React from "react";
// import Carousel from "react-bootstrap/Carousel";
// const Carousel1 = () => {
//   return (
//         <>
//         <div id="carousel-example-2" class="carousel slide carousel-fade" data-ride="carousel"/>

//     <ol class="carousel-indicators">
//       <li data-target="#carousel-example-2" data-slide-to="0" class="active"></li>
//       <li data-target="#carousel-example-2" data-slide-to="1"></li>
//       <li data-target="#carousel-example-2" data-slide-to="2"></li>
//     </ol> 

//     <div class="carousel-inner" role="listbox">
//       <div class="carousel-item active">
//         <div class="view">
//           <img class="d-block w-100" src="https://wallpaperaccess.com/full/1154374.jpg"style={{height:500}} alt="First slide"/>
//           <div class="mask rgba-black-light"></div>
//         </div>
//         <div class="carousel-caption">
//           <h3 class="h3-responsive">Wlecome to Farmer's Friend</h3>
//           <p>A Farmer is a magician who produces money from the mud-"Thomas Jefferson"</p>
//         </div>
//       </div>
//       <div class="carousel-item">

//         <div class="view">
//           <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg" alt="Second slide"/>
//           <div class="mask rgba-black-strong"></div>
//         </div>
//         <div class="carousel-caption">
//           <h3 class="h3-responsive">We are here to help you</h3>
//           <p>“No race can prosper until it learns there is as much dignity in tilling a field as in writing a poem.” – Booker T. Washington</p>
//         </div>
//       </div>
//       <div class="carousel-item">

//         <div class="view">
//           <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg" alt="Third slide"/>
//           <div class="mask rgba-black-slight"></div>
//         </div>
//         <div class="carousel-caption">
//           <h3 class="h3-responsive">Agriculture is our wisest pursuit</h3>
//           <p>“When tillage begins, other arts follow. The farmers, therefore, are the founders of human civilization.” – Daniel Webster</p>
//         </div>
//       </div>
//     </div>

//     <a class="carousel-control-prev" href="#carousel-example-2" role="button" data-slide="prev">
//       <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//       <span class="sr-only"></span>
//     </a>
//     <a class="carousel-control-next" href="#carousel-example-2" role="button" data-slide="next">
//       <span class="carousel-control-next-icon" aria-hidden="true"></span>
//       <span class="sr-only"></span>
//     </a>
//         </>







    // <div style={{ display: "block", width: 1550 }}>
    //   <Carousel>
    //     <Carousel.Item interval={2500}>
    //       <img
    //         className="d-block w-100"
    //         src="https://wallpaperaccess.com/full/1154374.jpg"
    //         alt="Image One"
    //       />
    //       <Carousel.Caption>
    //         <h3>Wlecome to Farmer's Friend</h3>
    //         <p>
    //           “No race can prosper until it learns there is as much dignity in
    //           tilling a field as in writing a poem.”
    //         </p>
    //       </Carousel.Caption>
    //     </Carousel.Item>
    //     <Carousel.Item interval={500}>
    //       <img
    //         className="d-block w-100"
    //         src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
    //         alt="Image Two"
    //       />
    //       <Carousel.Caption>
    //         <h3>Agriculture is our wisest pursuit</h3>
    //         <p>
    //           “When tillage begins, other arts follow. The farmers, therefore,
    //           are the founders of human civilization.” – Daniel Webster
    //         </p>
    //       </Carousel.Caption>
    //        </Carousel.Item>
           
    //   </Carousel>
    // </div>



//   );
// };
// export default Carousel1;






 import React from 'react'
import Carousel from 'react-grid-carousel'

const Carousel1 = () => {
   return (
     <Carousel cols={3} rows={1} gap={10} loop>
       <Carousel.Item>
         <img width="100%" src="https://wallpaperaccess.com/full/1154374.jpg" />
       </Carousel.Item>
       <Carousel.Item>
        <img width="100%" src="https://wallpapercave.com/wp/wp4516338.jpg" />
       </Carousel.Item>
       <Carousel.Item>
        <img width="100%" height="100%" src="https://media.istockphoto.com/photos/rural-landscape-sunset-panorama-picture-id487300412?k=6&m=487300412&s=170667a&w=0&h=V2OFI_UQyTNBC1VUwClkSpe1uQLs_ch_mFTOBnAzEgE=" />
      </Carousel.Item>
      <Carousel.Item>
         <img width="100%" src="https://wallpaperaccess.com/full/1154374.jpg" />
       </Carousel.Item>
       <Carousel.Item>
        <img width="100%" src="https://wallpapercave.com/wp/wp4516338.jpg" />
       </Carousel.Item>
       <Carousel.Item>
        <img width="100%" src="https://wallpaperaccess.com/full/1154374.jpg" />
      </Carousel.Item>
     
     </Carousel>
   )
}
export default Carousel1;
