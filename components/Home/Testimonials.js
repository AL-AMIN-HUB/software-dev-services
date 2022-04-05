/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "../../styles/Testimonials.module.scss";

const Testimonials = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <section className={`${styles.container_testimonials} container_fluid`}>
        <div className={`${styles.testimonials_grid}`}>
          <div className={styles.form_main}>
            <div className={`${styles.form_container}`}>
              <h2 className={`${styles.head_content}`}>Tell us about Your project</h2>
              <form action="#" onSubmit={handleSubmit}>
                <div>
                  <input className={`${styles.input}`} type="text" placeholder="Name*" required />
                </div>
                <div className={`${styles.input_doable}`}>
                  <div>
                    <input className={`${styles.input}`} required type="email" placeholder="Email*" />
                  </div>
                  <div>
                    <input className={`${styles.input}`} required type="number" placeholder="Phone*" />
                  </div>
                </div>
                <div className={`${styles.input_doable}`}>
                  <div>
                    <select name="budget">
                      <option value="Budget*">Your budget for project*</option>
                      <option value="Budget*">below $ 10k</option>
                      <option value="Budget*">$ 10k - $ 50k</option>
                      <option value="Budget*">$ 50k and more</option>
                    </select>
                  </div>
                  <div>
                    <select name="budget">
                      <option value="I'm interested in">I am interested in</option>
                      <option value="Budget*">Mobile App</option>
                      <option value="Budget*">Web App</option>
                      <option value="Budget*">AR/VR App</option>
                      <option value="Budget*">Blockchain Development</option>
                      <option value="Budget*">Full Stack Development</option>
                    </select>
                  </div>
                </div>
                <div>
                  <textarea className={`${styles.textarea}`} required name="desc" cols="30" rows="3" placeholder="How we can help you?*"></textarea>
                </div>
                <button type="submit" className={styles.form_button}>
                  Get a FREE Quote
                </button>
              </form>
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <h2 className={`${styles.head_content2}`}>Testimonials</h2>
            <div className={styles.testimonials_card}>
              <div>
                <div>
                  <img src="https://i.ibb.co/LxWBnQM/1.webp" alt="" />
                </div>
                <p>
                  We needed to create a proof of concept of a Blockchain-based software for our investor and to speed up the development we placed
                  order at VironIT. We liked the performance and communication level at all steps. I think I’ll get back to you after we’ve get
                  funded. Thanks.
                </p>
                <span>– Jules MJD Maessen, Founder & Sales at VERO Visuals</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
