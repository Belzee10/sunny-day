import React, { Component } from "react";

class ImageCover extends Component {
  handleImageUrl() {
    let imageUrl = "";
    const { theme } = this.props;
    if (theme === "green") imageUrl = "normal.png";
    else if (theme === "orange") imageUrl = "hot.jpg";
    else if (theme === "blue") imageUrl = "cold.jpg";
    return `url("${process.env.PUBLIC_URL}img/${imageUrl}")`;
  }

  render() {
    return (
      <div
        style={{ backgroundImage: this.handleImageUrl() }}
        className="col-lg-4 cover"
      >
        <div className="mask" />;
      </div>
    );
  }
}

export default ImageCover;
