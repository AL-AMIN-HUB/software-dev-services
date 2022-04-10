/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useState, useEffect } from "react";
import styles from "../../styles/Navbar.module.scss";
import { BsPhone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const Navbar = () => {
  const [showBg, setShowBg] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", OnScrollHeader);
  }, []);
  const OnScrollHeader = (e) => {
    if (window.scrollY >= 100) {
      setShowBg(true);
    } else {
      setShowBg(false);
    }
  };
  return (
    <section>
      <section className="top_info">
        <div className="secondary_bg ">
          <div className={`${styles.top_number_email} container_fluid`}>
            {" "}
            <p className={`${styles.top_navbar} primary_color`}>
              {" "}
              <BsPhone /> +(1) 586-276-7347
            </p>
            <p className={`${styles.top_navbar} primary_color`}>
              {" "}
              <AiOutlineMail /> Info@Ts4u.Us
            </p>
          </div>
        </div>
      </section>
      {/* main navbar */}
      <section>
        <nav className={showBg ? "navbar" : "navbar_container"}>
          <div className="container_fluid navbar_main">
            <div className="logo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://i.ibb.co/3vH012W/Screenshot-1-removebg-preview.png" alt="" />
            </div>

            <ul className="nav-links">
              <input type="checkbox" id="checkbox_toggle" />
              <label htmlFor="checkbox_toggle" className="hamburger">
                &#9776;
              </label>

              <div className="menu">
                <li>
                  <a href="/">WHO WE ARE</a>
                </li>

                <li className="services">
                  <a href="/">OUR SERVICES</a>

                  <ul className="dropdown">
                    <li>
                      <a href="/learning-path">Learning Path</a>
                    </li>
                    <li>
                      <a href="/web_developer">Web Developer</a>
                    </li>
                    <li>
                      <a href="/">Dropdown 2</a>
                    </li>
                    <li>
                      <a href="/">Dropdown 3</a>
                    </li>
                    <li>
                      <a href="/">Dropdown 4</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/">PORTFOLIO</a>
                </li>
                <li className="services">
                  <a href="/">TECHNOLOGIES</a>

                  <ul className="dropdown">
                    <li>
                      <a href="/">Dropdown 1 </a>
                    </li>
                    <li>
                      <a href="/">Dropdown 2</a>
                    </li>
                    <li>
                      <a href="/">Dropdown 2</a>
                    </li>
                    <li>
                      <a href="/">Dropdown 3</a>
                    </li>
                    <li>
                      <a href="/">Dropdown 4</a>
                    </li>
                  </ul>
                </li>
                <li className="services">
                  <a href="/">BLOG</a>

                  <ul className="dropdown">
                    <li>
                      <a href="/">Dropdown 1 </a>
                    </li>
                    <li>
                      <a href="/">Dropdown 2</a>
                    </li>
                    <li>
                      <a href="/">Dropdown 2</a>
                    </li>
                    <li>
                      <a href="/">Dropdown 3</a>
                    </li>
                    <li>
                      <a href="/">Dropdown 4</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <button className="primary_bg btn_navbar">HIRE US</button>
                </li>
              </div>
            </ul>
          </div>
        </nav>
      </section>
    </section>
  );
};

export default Navbar;
