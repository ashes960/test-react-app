import React from "react";
import { Carousel } from "react-responsive-carousel";

const imageLinkArray = [
  "./images/1.jpeg",
  "./images/2.jpeg",
  "./images/3.jpeg",
  "./images/4.jpg"
];

const HomePageCarousel = () => (
  <Carousel
    autoPlay={true}
    infiniteLoop={true}
    useKeyboardArrows={true}
    showThumbs={false}
    stopOnHover={false}
  >
    {imageLinkArray.map(imageLink => (
      <div key={imageLinkArray.indexOf(imageLink) + 1}>
        <img src={imageLink} className="img_carousel" />
      </div>
    ))}
  </Carousel>
);

export default HomePageCarousel;
