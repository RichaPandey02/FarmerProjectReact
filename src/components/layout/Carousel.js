import React from "react";
import Carousel from "react-grid-carousel";
 import carousl from "../styles/carousl.css";

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
          <img
            width="100%"
            height="100%"
            src="https://media.istockphoto.com/photos/rural-landscape-sunset-panorama-picture-id487300412?k=6&m=487300412&s=170667a&w=0&h=V2OFI_UQyTNBC1VUwClkSpe1uQLs_ch_mFTOBnAzEgE="
          />
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






   
  );
};
export default Carousel1;
