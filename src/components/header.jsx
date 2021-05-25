import React from "react";
import HeaderImg from "../resources/HeaderImg.png";
/////////////////////////////////
const TopHeader = () => {
  return (
    <div id="header" className="header">
      <div className="img__container">
        <img src={HeaderImg} alt="PepeJeans" className="img__container--img" />
      </div>
    </div>
  );
};
//////////////////////////////////
export default TopHeader;
