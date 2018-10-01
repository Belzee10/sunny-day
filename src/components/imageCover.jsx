import React from "react";

const ImageCover = props => {
  function handleImageUrl() {
    let imageName = "";
    const { theme } = props;
    if (theme === "green") imageName = "normal.png";
    else if (theme === "orange") imageName = "hot.jpg";
    else if (theme === "blue") imageName = "cold.jpg";
    return `url("${process.env.PUBLIC_URL}/img/${imageName}")`;
  }
  return (
    <div
      style={{ backgroundImage: handleImageUrl() }}
      className="col-lg-4 cover"
    >
      <div className="mask" />
    </div>
  );
};

export default ImageCover;
