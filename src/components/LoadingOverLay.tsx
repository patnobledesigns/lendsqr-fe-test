import React from "react";
import MoonLoader from "react-spinners/MoonLoader";

const LoadingOverLay = () => {
  return (
    <div className="loading__overlay">
      <div className="loading__overlay-body">
        <MoonLoader color="#6A52FD" speedMultiplier={0.7} size={"70px"} />
      </div>
    </div>
  );
};

export default LoadingOverLay;
