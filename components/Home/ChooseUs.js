/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "../../styles/ChooseUs.module.scss";

const ChooseUs = () => {
  return (
    <section className={`${styles.main_container} container_fluid`}>
      <div className={`${styles.first_content} `}>
        <h2 className={`${styles.head_content}`}>Why should you choose us as your Software development company?</h2>
        <p className={`${styles.text_content}`}>
          VironIT is a custom software development company with 15 years of experience. Our company is also a <br /> member of High Tech Park, which
          allows IT entities to take advantage of lower costs and less stringent <br /> regulations inside the country.
        </p>
      </div>
      {/* main  */}
      <div className={styles.grid_container}>
        <div className={styles.grid_item}>
          <div>
            <h2>600+</h2>
          </div>
          <div>
            <p>released projects</p>
          </div>
        </div>
        <div className={styles.grid_item}>
          <div>
            <h2>40</h2>
          </div>
          <div>
            <p>countries (including the USA, UK, Netherlands, Australia, Switzerland, Austria, Norway)</p>
          </div>
        </div>
        <div className={styles.grid_item}>
          <div>
            <h2>15</h2>
          </div>
          <div>
            <p>years in development</p>
          </div>
        </div>
        <div className={styles.grid_item}>
          <div>
            <img src="https://i.ibb.co/cczWP2G/1-1.webp" alt="" />
          </div>
          <div>
            <p>VironIT is in the Top1 outsourcing software development companies according to desighrush.</p>
          </div>
        </div>
        <div className={styles.grid_item}>
          <div>
            <img src="https://i.ibb.co/dQxJJx0/1-3.webp" alt="" />
          </div>
          <div>
            <p>We are on a list of Top 50 Mobile App Development Companies in 2021 on SoftwareWorld.</p>
          </div>
        </div>
        <div className={styles.grid_item}>
          <div>
            <img src="https://i.ibb.co/KhH4yTh/1-2.webp" alt="" />
          </div>
          <div>
            <p>Feedspot.com included our corporate blog in its Top 50 software development blogs in the world.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
