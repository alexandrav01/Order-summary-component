import { useState } from "react";
import icon from "./assets/icon.svg";
import "./price.css";

function Price() {
  return (
    <>
      <div className="price-wrap">

        <div className="inner-wrap">

          <div className="small-wrap">
            <img src={icon} alt="music-icon" className="icon"></img>
            <div className="annual-wrap">
              <div className="annual">Annual Plan </div>
              <div className="price">$59.99/year </div>
            </div>
          </div>

          <div className="change">Change</div>
          
        </div>
      </div>
    </>
  );
}

export default Price;
