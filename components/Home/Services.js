import React from "react";
import styles from "../../styles/Services.module.css";

const Services = () => {
  return (
    <div className={`${styles.main_services_container} container_fluid`}>
      <div className={styles.content_text}>
        <h2 className={`${styles.head_content}`}>We Provide Agile Software Development Services</h2>
        <p className={`${styles.text_content}`}>
          Based on many years of experience, we know that every business has a different software and hardware <br /> environment. That is why we
          provide a wide range of software development services. Check out the key services below.
        </p>
      </div>
    </div>
  );
};

export default Services;
