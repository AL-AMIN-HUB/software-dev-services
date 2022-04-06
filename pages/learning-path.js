/* eslint-disable @next/next/no-img-element */
import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { AiOutlineArrowDown } from "react-icons/ai";

const learning = () => {
  return (
    <section>
      <div className="main_container">
        <div className="container_fluid learningPath_main">
          <div className="col_learning1">
            <h3>1 STEP</h3>
            <h2>GET YOUR BASICS RIGHT</h2>
            <p>
              Begin your journey in DevOps and Cloud Computing by setting your basics right. These courses help you clear your basics in Linux,
              networking, applications, build and release procedures.
            </p>
            <div className="icon_scroll">
              <div className="icon_learning1">
                <AiOutlineArrowDown className="item_icon2" />
              </div>
              <div>
                <p className="text_icon">
                  scroll to <span>STEP 2</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col_learning2">
            <div className="col_svg">
              <div>
                <img src="https://i.ibb.co/HXZ92XY/path1.png" alt="" />
              </div>

              <button type="submit" className="btn_learning_path">
                CONTAINERS
              </button>
            </div>
            <div className="item_svg3">
              <img src="https://i.ibb.co/vvS6FWv/path2.png" alt="" />
            </div>
            <div className="item_svg4">
              <img src="https://i.ibb.co/D1m4K1J/download.png" alt="" />
            </div>
            <button type="submit" className="btn_learning_path2">
              AUTOMATION
            </button>
            <div>
              <div className="img_main">
                <img src="https://i.ibb.co/hBLz7XR/basic-top.png" alt="" />
              </div>
              <div className="item_desc">
                <div>
                  <p>Course</p>
                  <h2>
                    DevOps Pre- <br /> Requisites
                  </h2>
                </div>
                <div>
                  <BsArrowRightShort className="item_icon" />
                </div>
              </div>
            </div>
          </div>
          <div className="col_learning3">
            <div className="col_svg2">
              <img src="https://i.ibb.co/MBYz6Xr/path3.png" alt="" />
            </div>
            <div>
              <div className="img_main2">
                <img src="https://i.ibb.co/VjgTVjR/linux-01.png" alt="" />
              </div>
              <div className="item_desc">
                <div>
                  <p>Course</p>
                  <h2>Linux Basics</h2>
                </div>
                <div>
                  <BsArrowRightShort className="item_icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container_fluid second_path_learning">
        <div className="col_learning1">
          <h3>2 STEP</h3>
          <h2>BEGINNERS</h2>
          <p>Start your DevOps journey by learning the basics of popular DevOps tools along with real scenarios and practice labs.</p>
        </div>
        <div className="col_learning5">
          <div>
            <img className="img_path2" src="https://i.ibb.co/Qp2z6jx/git-course-bg.png" alt="" />
          </div>
          <div>
            <div className="item_path">
              <p>Course</p>
              <h4>Git for Beginners</h4>
            </div>
          </div>
          <div className="path_5">
            <img src="https://i.ibb.co/BrRsj23/download-2.png" alt="" />
          </div>
          <div className="path_6">
            <img src="https://i.ibb.co/SsVv7DV/download-1.png" alt="" />
          </div>
        </div>
        <div className="col_learning6">
          <div>
            <img style={{ width: "100%" }} className="img_path2" src="https://i.ibb.co/X3kmCGJ/SHELL-1.png" alt="" />
          </div>
          <div>
            <div className="item_path">
              <p>Course</p>
              <h4>Shell Scripts for Beginners</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default learning;
