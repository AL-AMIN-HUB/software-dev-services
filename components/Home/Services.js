/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import styles from "../../styles/Services.module.scss";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <section className={styles.container_services}>
      <div className={`${styles.main_services_container} container_fluid`}>
        <div className={styles.content_text}>
          <h2 className={`${styles.head_content}`}>We Provide Agile Software Development Services</h2>
          <p className={`${styles.text_content}`}>
            Based on many years of experience, we know that every business has a different software and hardware <br /> environment. That is why we
            provide a wide range of software development services. Check out the key services below.
          </p>
        </div>
        <div className={`${styles.card_services}`}>
          {services.map((service) => (
            <div key={service.id} className={`${styles.card}`}>
              <div className={`${styles.card_top}`}>
                <div>
                  <img src={service.img} alt="" />
                </div>
                <div>
                  <h3 className={`${styles.h3}`}>{service.title}</h3>
                </div>
              </div>
              <div className={`${styles.card_footer}`}>
                <p>{service.desc}</p>
                <li className={`${styles.li}`}>{service.type[0]}</li>
                <li className={`${styles.li}`}>{service.type[1]}</li>
                <li className={`${styles.li}`}>{service.type[2]}</li>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
