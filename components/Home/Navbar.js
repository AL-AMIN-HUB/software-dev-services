/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";
import styles from "../../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <section>
      <section className="top_info">
        <div className="secondary_bg ">
          <div className={`${styles.top_number_email} container_fluid`}>
            {" "}
            <p className={`${styles.top_navbar} primary_color`}> +18774103947</p>
            <p className={`${styles.top_navbar} primary_color`}> info@vironit.com</p>
          </div>
        </div>
      </section>
      {/* main navbar */}
      <section>
        <nav className="navbar container_fluid">
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
              <li>
                <a href="/">CASE STUDIES</a>
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
            </div>
          </ul>
          <div>
            <button className="primary_bg btn_navbar">HIRE US</button>
          </div>
        </nav>
      </section>
    </section>
  );
};

export default Navbar;
