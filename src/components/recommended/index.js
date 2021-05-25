import React from "react";
import SingleProduct from "./singleProductCard";
import { recommendedData } from "./data";
//////////////////////////////////////////
const Recommended = () => {
  return (
    <div className="recommended">
      <div className="recommended--title">
        <h6 className="recommended--title--text">You may also like</h6>
      </div>
      <div className="recommended__products">
        {recommendedData.map((product, index) => (
          <SingleProduct product={product} key={index} />
        ))}
      </div>
    </div>
  );
};

//////////////////////////////////////////
export default Recommended;
