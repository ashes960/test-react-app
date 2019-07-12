import React from "react";
import HomePageCarousel from "./HomePageCarousel";
import HomePageImages from "./HomePageImages";
import ImageModal from "./ImageModal";

class HomePage extends React.Component {
  state = {
    imageLink: ""
  };

  handleImagePick = imageLink => {
    console.log("ImageLink: ", imageLink);
    this.setState(() => ({ imageLink }));
  };

  handleCloseModal = () => {
    this.setState(() => ({ imageLink: "" }));
  };

  render() {
    return (
      <div>
        {/* <h1>Home Page</h1> */}
        <HomePageCarousel />
        <div className="about-us">
          <div className="container">
            <h3>What is this page about?</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        <div className="picture">
          <div className="container">
            <h3>Pictures -</h3>
            <HomePageImages handleImagePick={this.handleImagePick} />
          </div>
        </div>
        <div>
          <ImageModal
            imageLink={this.state.imageLink}
            handleCloseModal={this.handleCloseModal}
          />
        </div>
      </div>
    );
  }
}

export default HomePage;
