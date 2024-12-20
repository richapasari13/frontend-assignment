import React from "react";

const ErrorPage = ({ caption, imgUrl }) => {
  return (
    <figure>
      <img src={imgUrl} alt={caption} width={300} />
      <figcaption>{caption}</figcaption>
    </figure>
  );
};

export default ErrorPage;
