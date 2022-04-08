/* eslint-disable @next/next/no-img-element */
import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { RiNumber1, RiNumber2, RiNumber3, RiNumber4, RiNumber5, RiNumber6, RiNumber7, RiNumber8, RiNumber9 } from "react-icons/ri";
import { AiOutlineBars } from "react-icons/ai";

const Developer = () => {
  return (
    <div>
      <h2 style={{ textAlign: "center", color: "rgba(0,0,0,0.7)" }} className="header_content_main">
        Your Learning Path
      </h2>
      <VerticalTimeline layout={"1 - column - left"}>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ color: "#000" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          iconStyle={{ background: "#02a27a", color: "#fff" }}
          icon={<RiNumber1 />}
        >
          <h3 className="vertical-timeline-element-title learning_path_title">HTML and CSS: Learn the Basics of Web Development</h3>
          <p className="vertical-timeline-element-subtitle learning_sub_title">
            HTML and CSS is a match made in heaven. Learn how to create the structure for your website and to spice things up with eye-catching
            styles!
          </p>
          <div className="learning_path">
            <div>
              <img
                style={{ width: "100%", height: "100%", margin: "10px 0" }}
                src="https://i.ibb.co/6WL2W9v/coding-for-beginners-space-doggos.jpg"
                alt=""
              />{" "}
            </div>
            <div>
              <div className="learning_path_inside">
                <p className="learning_sub_title">
                  <small>BitDegree Foundation VSI ©</small>
                </p>
                <div className="sub_path">
                  <p>
                    {" "}
                    <small>
                      {" "}
                      <AiOutlineBars className="icon_path" /> 17 Lecture
                    </small>
                  </p>
                  <img src="https://i.ibb.co/HCRXjVG/bitdegree-small.png" alt="" />
                </div>
              </div>
              <h2>Introducing Coding for Beginners: an HTML and CSS Online Course</h2>
              <p className="learning_sub_title">
                <small>Introducing Coding for Beginners: an HTML and CSS Online Course</small>
              </p>
              <button className="custom_bg path_btn">See Your Learning Path</button>
            </div>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ color: "#000" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          iconStyle={{ background: "#02a27a", color: "#fff" }}
          icon={<RiNumber2 />}
        >
          <h3 className="vertical-timeline-element-title learning_path_title">Add Responsive Design to Your Web App</h3>
          <p className="vertical-timeline-element-subtitle learning_sub_title">
            You cannot avoid mobile devices. Therefore, you need to learn the steps of making your site responsive: capable of adapting to different
            screens.
          </p>
          <div className="learning_path">
            <div>
              <img
                style={{ width: "100%", height: "100%", margin: "10px 0" }}
                src="https://i.ibb.co/3y7V2JY/file-371-k-ZFJTLrg-Bwudl5xb.jpg"
                alt=""
              />{" "}
            </div>
            <div>
              <div className="learning_path_inside">
                <p className="learning_sub_title">
                  <small>BitDegree Foundation VSI ©</small>
                </p>
                <div className="sub_path">
                  <p>
                    {" "}
                    <small>
                      {" "}
                      <AiOutlineBars className="icon_path" /> 17 Lecture
                    </small>
                  </p>
                  <img src="https://i.ibb.co/HCRXjVG/bitdegree-small.png" alt="" />
                </div>
              </div>
              <h2>A Responsive Web Design Course: Find Out How to Create a Responsive Website</h2>
              <p className="learning_sub_title">
                <small>Learn how to make website mobile friendly with a responsive web design tutorial step by step!</small>
              </p>
              <button className="custom_bg path_btn">See Your Learning Path</button>
            </div>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ color: "#000" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          iconStyle={{ background: "#02a27a", color: "#fff" }}
          icon={<RiNumber3 />}
        >
          <h3 className="vertical-timeline-element-title learning_path_title">HTML and CSS: Learn the Basics of Web Development</h3>
          <p className="vertical-timeline-element-subtitle learning_sub_title">
            HTML and CSS is a match made in heaven. Learn how to create the structure for your website and to spice things up with eye-catching
            styles!
          </p>
          <div className="learning_path">
            <div>
              <img
                style={{ width: "100%", height: "100%", margin: "10px 0" }}
                src="https://i.ibb.co/6WL2W9v/coding-for-beginners-space-doggos.jpg"
                alt=""
              />{" "}
            </div>
            <div>
              <div className="learning_path_inside">
                <p className="learning_sub_title">
                  <small>BitDegree Foundation VSI ©</small>
                </p>
                <div className="sub_path">
                  <p>
                    {" "}
                    <small>
                      {" "}
                      <AiOutlineBars className="icon_path" /> 17 Lecture
                    </small>
                  </p>
                  <img src="https://i.ibb.co/HCRXjVG/bitdegree-small.png" alt="" />
                </div>
              </div>
              <h2>Introducing Coding for Beginners: an HTML and CSS Online Course</h2>
              <p className="learning_sub_title">
                <small>Introducing Coding for Beginners: an HTML and CSS Online Course</small>
              </p>
              <button className="custom_bg path_btn">See Your Learning Path</button>
            </div>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ color: "#000" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          iconStyle={{ background: "#02a27a", color: "#fff" }}
          icon={<RiNumber4 />}
        >
          <h3 className="vertical-timeline-element-title learning_path_title">HTML and CSS: Learn the Basics of Web Development</h3>
          <p className="vertical-timeline-element-subtitle learning_sub_title">
            HTML and CSS is a match made in heaven. Learn how to create the structure for your website and to spice things up with eye-catching
            styles!
          </p>
          <div className="learning_path">
            <div>
              <img
                style={{ width: "100%", height: "100%", margin: "10px 0" }}
                src="https://i.ibb.co/6WL2W9v/coding-for-beginners-space-doggos.jpg"
                alt=""
              />{" "}
            </div>
            <div>
              <div className="learning_path_inside">
                <p className="learning_sub_title">
                  <small>BitDegree Foundation VSI ©</small>
                </p>
                <div className="sub_path">
                  <p>
                    {" "}
                    <small>
                      {" "}
                      <AiOutlineBars className="icon_path" /> 17 Lecture
                    </small>
                  </p>
                  <img src="https://i.ibb.co/HCRXjVG/bitdegree-small.png" alt="" />
                </div>
              </div>
              <h2>Introducing Coding for Beginners: an HTML and CSS Online Course</h2>
              <p className="learning_sub_title">
                <small>Introducing Coding for Beginners: an HTML and CSS Online Course</small>
              </p>
              <button className="custom_bg path_btn">See Your Learning Path</button>
            </div>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ color: "#000" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          iconStyle={{ background: "#02a27a", color: "#fff" }}
          icon={<RiNumber5 />}
        >
          <h3 className="vertical-timeline-element-title learning_path_title">HTML and CSS: Learn the Basics of Web Development</h3>
          <p className="vertical-timeline-element-subtitle learning_sub_title">
            HTML and CSS is a match made in heaven. Learn how to create the structure for your website and to spice things up with eye-catching
            styles!
          </p>
          <div className="learning_path">
            <div>
              <img
                style={{ width: "100%", height: "100%", margin: "10px 0" }}
                src="https://i.ibb.co/6WL2W9v/coding-for-beginners-space-doggos.jpg"
                alt=""
              />{" "}
            </div>
            <div>
              <div className="learning_path_inside">
                <p className="learning_sub_title">
                  <small>BitDegree Foundation VSI ©</small>
                </p>
                <div className="sub_path">
                  <p>
                    {" "}
                    <small>
                      {" "}
                      <AiOutlineBars className="icon_path" /> 17 Lecture
                    </small>
                  </p>
                  <img src="https://i.ibb.co/HCRXjVG/bitdegree-small.png" alt="" />
                </div>
              </div>
              <h2>Introducing Coding for Beginners: an HTML and CSS Online Course</h2>
              <p className="learning_sub_title">
                <small>Introducing Coding for Beginners: an HTML and CSS Online Course</small>
              </p>
              <button className="custom_bg path_btn">See Your Learning Path</button>
            </div>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ color: "#000" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          iconStyle={{ background: "#02a27a", color: "#fff" }}
          icon={<RiNumber6 />}
        >
          <h3 className="vertical-timeline-element-title learning_path_title">HTML and CSS: Learn the Basics of Web Development</h3>
          <p className="vertical-timeline-element-subtitle learning_sub_title">
            HTML and CSS is a match made in heaven. Learn how to create the structure for your website and to spice things up with eye-catching
            styles!
          </p>
          <div className="learning_path">
            <div>
              <img
                style={{ width: "100%", height: "100%", margin: "10px 0" }}
                src="https://i.ibb.co/6WL2W9v/coding-for-beginners-space-doggos.jpg"
                alt=""
              />{" "}
            </div>
            <div>
              <div className="learning_path_inside">
                <p className="learning_sub_title">
                  <small>BitDegree Foundation VSI ©</small>
                </p>
                <div className="sub_path">
                  <p>
                    {" "}
                    <small>
                      {" "}
                      <AiOutlineBars className="icon_path" /> 17 Lecture
                    </small>
                  </p>
                  <img src="https://i.ibb.co/HCRXjVG/bitdegree-small.png" alt="" />
                </div>
              </div>
              <h2>Introducing Coding for Beginners: an HTML and CSS Online Course</h2>
              <p className="learning_sub_title">
                <small>Introducing Coding for Beginners: an HTML and CSS Online Course</small>
              </p>
              <button className="custom_bg path_btn">See Your Learning Path</button>
            </div>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ color: "#000" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          iconStyle={{ background: "#02a27a", color: "#fff" }}
          icon={<RiNumber7 />}
        >
          <h3 className="vertical-timeline-element-title learning_path_title">HTML and CSS: Learn the Basics of Web Development</h3>
          <p className="vertical-timeline-element-subtitle learning_sub_title">
            HTML and CSS is a match made in heaven. Learn how to create the structure for your website and to spice things up with eye-catching
            styles!
          </p>
          <div className="learning_path">
            <div>
              <img
                style={{ width: "100%", height: "100%", margin: "10px 0" }}
                src="https://i.ibb.co/6WL2W9v/coding-for-beginners-space-doggos.jpg"
                alt=""
              />{" "}
            </div>
            <div>
              <div className="learning_path_inside">
                <p className="learning_sub_title">
                  <small>BitDegree Foundation VSI ©</small>
                </p>
                <div className="sub_path">
                  <p>
                    {" "}
                    <small>
                      {" "}
                      <AiOutlineBars className="icon_path" /> 17 Lecture
                    </small>
                  </p>
                  <img src="https://i.ibb.co/HCRXjVG/bitdegree-small.png" alt="" />
                </div>
              </div>
              <h2>Introducing Coding for Beginners: an HTML and CSS Online Course</h2>
              <p className="learning_sub_title">
                <small>Introducing Coding for Beginners: an HTML and CSS Online Course</small>
              </p>
              <button className="custom_bg path_btn">See Your Learning Path</button>
            </div>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ color: "#000" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          iconStyle={{ background: "#02a27a", color: "#fff" }}
          icon={<RiNumber8 />}
        >
          <h3 className="vertical-timeline-element-title learning_path_title">HTML and CSS: Learn the Basics of Web Development</h3>
          <p className="vertical-timeline-element-subtitle learning_sub_title">
            HTML and CSS is a match made in heaven. Learn how to create the structure for your website and to spice things up with eye-catching
            styles!
          </p>
          <div className="learning_path">
            <div>
              <img
                style={{ width: "100%", height: "100%", margin: "10px 0" }}
                src="https://i.ibb.co/6WL2W9v/coding-for-beginners-space-doggos.jpg"
                alt=""
              />{" "}
            </div>
            <div>
              <div className="learning_path_inside">
                <p className="learning_sub_title">
                  <small>BitDegree Foundation VSI ©</small>
                </p>
                <div className="sub_path">
                  <p>
                    {" "}
                    <small>
                      {" "}
                      <AiOutlineBars className="icon_path" /> 17 Lecture
                    </small>
                  </p>
                  <img src="https://i.ibb.co/HCRXjVG/bitdegree-small.png" alt="" />
                </div>
              </div>
              <h2>Introducing Coding for Beginners: an HTML and CSS Online Course</h2>
              <p className="learning_sub_title">
                <small>Introducing Coding for Beginners: an HTML and CSS Online Course</small>
              </p>
              <button className="custom_bg path_btn">See Your Learning Path</button>
            </div>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ color: "#000" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          iconStyle={{ background: "#02a27a", color: "#fff" }}
          icon={<RiNumber9 />}
        >
          <h3 className="vertical-timeline-element-title learning_path_title">HTML and CSS: Learn the Basics of Web Development</h3>
          <p className="vertical-timeline-element-subtitle learning_sub_title">
            HTML and CSS is a match made in heaven. Learn how to create the structure for your website and to spice things up with eye-catching
            styles!
          </p>
          <div className="learning_path">
            <div>
              <img
                style={{ width: "100%", height: "100%", margin: "10px 0" }}
                src="https://i.ibb.co/6WL2W9v/coding-for-beginners-space-doggos.jpg"
                alt=""
              />{" "}
            </div>
            <div>
              <div className="learning_path_inside">
                <p className="learning_sub_title">
                  <small>BitDegree Foundation VSI ©</small>
                </p>
                <div className="sub_path">
                  <p>
                    {" "}
                    <small>
                      {" "}
                      <AiOutlineBars className="icon_path" /> 17 Lecture
                    </small>
                  </p>
                  <img src="https://i.ibb.co/HCRXjVG/bitdegree-small.png" alt="" />
                </div>
              </div>
              <h2>Introducing Coding for Beginners: an HTML and CSS Online Course</h2>
              <p className="learning_sub_title">
                <small>Introducing Coding for Beginners: an HTML and CSS Online Course</small>
              </p>
              <button className="custom_bg path_btn">See Your Learning Path</button>
            </div>
          </div>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Developer;
