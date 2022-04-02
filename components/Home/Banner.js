import React from "react";
import styles from "../../styles/Banner.module.scss";

const Banner = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className={`${styles.main_banner} custom_text_color1 `}>
      <div className={`${styles.grid_container} container_fluid`}>
        <div className={`${styles.first_content}`}>
          <h2 className={`${styles.head_content}`}>VironIT is a Custom Software Development Company</h2>
          <p style={{ fontSize: "20px", color: "lightgrey" }}>
            We provide custom software development and IT outsourcing services. Our developers build custom software for individuals, startups, and
            small to medium business.
          </p>
        </div>
        <div className={`${styles.form_container}`}>
          <h2 className={`${styles.head_content}`}>
            Need a Custom Software? <br /> Tell us about Your project
          </h2>
          <form action="#" onSubmit={handleSubmit}>
            <div>
              <input className={`${styles.input}`} type="text" placeholder="*Name" required />
            </div>
            <div>
              <input className={`${styles.input}`} required type="email" placeholder="*Email" />
            </div>
            <div>
              <textarea className={`${styles.textarea}`} required name="desc" cols="30" rows="5" placeholder="*Describe your idea"></textarea>
            </div>
            <button type="submit" className={styles.form_button}>
              Get a FREE Quote
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Banner;
