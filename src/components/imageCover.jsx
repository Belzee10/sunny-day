import React from "react";

const ImageCover = props => {
  function handleImageUrl() {
    let imageUrl = "";
    const { theme } = props;
    if (theme === "green") imageUrl = "normal.png";
    else if (theme === "orange") imageUrl = "hot.jpg";
    else if (theme === "blue") imageUrl = "cold.jpg";
    return `url("${process.env.PUBLIC_URL}img/${imageUrl}")`;
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
