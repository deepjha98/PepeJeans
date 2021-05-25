import React from "react";
import { BiTimeFive } from "react-icons/bi";
import { FiTruck, FiChevronRight } from "react-icons/fi";
import { AiOutlineBell } from "react-icons/ai";

////////////////////////////////////////////////
const DeliveryFunctions = () => {
  return (
    <div className="delivery">
      <div className="delivery__functions">
        <div className="delivery__functions--common delivery__functions--reschedule">
          <span className="delivery__functions--span">
            <BiTimeFive />{" "}
            <h6 className="delivery__functions--span--text">
              Reschedule The Delivery
            </h6>
          </span>
          <span className="clickable--link">
            <FiChevronRight />
          </span>
        </div>
        <div className="delivery__functions--common delivery__functions--pickup">
          <span className="delivery__functions--span">
            <FiTruck />
            <h6 className="delivery__functions--span--text">
              Pick up from the last Hub / Courier
            </h6>
          </span>
          <span className="clickable--link">
            <FiChevronRight />
          </span>
        </div>
        <div className="delivery__functions--common delivery__functions-updates">
          <span className="delivery__functions--span">
            <AiOutlineBell />
            <h6 className="delivery__functions--span--text">
              Get delivery updates
            </h6>
          </span>
          <span className="clickable--link">
            <FiChevronRight />
          </span>
        </div>
      </div>
    </div>
  );
};
////////////////////////////////////////////////
export default DeliveryFunctions;
