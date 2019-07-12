import React from "react";

const imageLinkArray = [
  "./images/1.jpeg",
  "./images/2.jpeg",
  "./images/3.jpeg",
  "./images/4.jpg"
];

const HomePageImages = props => (
  <div>
    {imageLinkArray.map(imageLink => (
      <img
        src={imageLink}
        className="img_normal"
        key={imageLinkArray.indexOf(imageLink) + 1}
        onClick={() => props.handleImagePick(imageLink)}
      />
    ))}
  </div>
);

export default HomePageImages;
