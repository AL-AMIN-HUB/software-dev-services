/* eslint-disable @next/next/no-img-element */
import React from "react";

const Slider = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <div className="wrapper container">
        <div className="img_box">
          <div className="info">
            <img src="https://i.ibb.co/wKnN2h8/rsz-11211306812-h.png" alt="" />
            <p>Please Hover Me</p>
          </div>
          <div className="desc">
            <h1>Details</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, vel. Inventore, at dignissimos animi itaque accusamus</p>
            <div className="btn">
              <button>Download</button>
              <button>Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
