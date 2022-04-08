/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from "react";

const WebDeveloper = () => {
  return (
    <div>
      <header>
        <div className="main_header container_fluid_webDeveloper">
          <div>
            <h2 className="header_content_main">Web Developer</h2>
            <p className="header_desc">We've created a learning path so you can spend time learning instead of searching.</p>
            <button className="custom_bg header_btn">See Your Learning Path</button>
          </div>
          <div className="header_img">
            <img src="https://i.ibb.co/kJZ7Y99/file-233931-Cw-Vuw-FBB4b-Cf1-Um-C.jpg" alt="" />
          </div>
        </div>
      </header>
    </div>
  );
};

export default WebDeveloper;
