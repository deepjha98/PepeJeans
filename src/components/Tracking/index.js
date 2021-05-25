import React from "react";
import {
  RiShareForwardFill,
  RiInformationLine,
  RiArrowDownSLine,
} from "react-icons/ri";

///////////////////////////////

const Tracking = ({ arrivingOn, orderStatus, arrivingFrom }) => {
  return (
    <div className="tracking">
      <div className="tracking__component">
        <div className="tracking__component--top">
          <h4 className="tracking__heading--status">
            Your order is in {orderStatus}
          </h4>
          <h4 className="tracking__heading--date">Arriving on {arrivingOn}</h4>
          <span className="tracking__share">
            <RiShareForwardFill />
            <a href="#header" className="tracking__share--link">
              Share the link
            </a>
          </span>
        </div>
        <div className="tracking__component--bottom">
          <h6 className="tracking__location">Shipped from {arrivingFrom}</h6>
          <span className="tracking__status">
            <RiInformationLine />{" "}
            <h6 className="tracking__status--text">Status of the package </h6>{" "}
            <RiArrowDownSLine />
          </span>
        </div>
      </div>
      <div className="tracking__buttons">
        <a
          href="#header"
          className="tracking__buttons--link tracking__buttons--details"
        >
          View Shipment details
        </a>
        <a
          href="#header"
          className="tracking__buttons--link tracking__buttons--actions"
        >
          Take actions
        </a>
      </div>
    </div>
  );
};
///////////////////////////////
export default Tracking;
