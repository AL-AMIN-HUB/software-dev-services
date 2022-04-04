/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { AiOutlineMail, AiOutlineArrowRight, AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="footer">
      <div className="row_footer container_fluid">
        <div className="col_footer">
          <img className="logo_footer" src="https://i.ibb.co/rwGrHk4/logo.png" alt="" />
          <p>
            VironIT is an international software development company established in 2004. We provide comprehensive services including development of
            mobile applications, web-oriented applications, business software solutions, as well as software integration and updating, support, and
            maintenance of software applications.
          </p>
        </div>
        <div className="col_footer">
          <h3>
            Business areas
            <div className="underline">
              <span></span>
            </div>
          </h3>
          <p> Mobile Application Development</p>
          <p>Web Application Development</p>
          <p>Business Application Development</p>
          <p>VR/AR Application Development</p>
          <p>Blockchain Development</p>
          <p>IoT Software Development</p>

          <p className="email_id"> Info@Ts4u.Us</p>
          <h4> +(1) 586-276-7347</h4>
        </div>
        <div className="col_footer">
          <h3>
            Links{" "}
            <div className="underline">
              <span></span>
            </div>
          </h3>
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Services</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>About Us</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Features</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="col_footer">
          <h3>
            Newsletter{" "}
            <div className="underline">
              <span></span>
            </div>
          </h3>
          <form onSubmit={handleSubmit}>
            <i className="icon_footer">
              {" "}
              <AiOutlineMail />
            </i>
            <input type="email" placeholder="Enter your email id*" required />
            <button type="submit">
              <i className="icon_btn">
                <AiOutlineArrowRight />
              </i>
            </button>{" "}
          </form>

          <div className="social_icons">
            <i className="social_icon">
              <FaFacebookF />
            </i>
            <i className="social_icon">
              <AiOutlineInstagram />
            </i>
            <i className="social_icon">
              <FaLinkedinIn />
            </i>
            <i className="social_icon">
              <FaWhatsapp />
            </i>
          </div>
        </div>
      </div>
      <hr />
      <p className="copyright container_fluid">Software Development team &copy;2022 </p>
    </section>
  );
};

export default Footer;
