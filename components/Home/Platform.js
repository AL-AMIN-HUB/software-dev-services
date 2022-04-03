/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import styles from "../../styles/Platform.module.scss";

const Platform = () => {
  const [technologies, setTechnologies] = useState([]);
  useEffect(() => {
    fetch("https://mocki.io/v1/93d7a05b-c152-4e9b-9206-f142ac9f37a4")
      .then((res) => res.json())
      .then((data) => setTechnologies(data));
  }, []);
  return (
    <section>
      <div className={`${styles.main_services_container} container_fluid`}>
        <div className={styles.content_text}>
          <h2 className={`${styles.head_content}`}>The Technology Platforms We Use</h2>
          <p className={`${styles.text_content}`}>
            As an IT firm, we take the perspectives of our clients and their diverse claims in software development. To <br /> help you achieve your
            goals, we enhance our capacities by working with various programming languages, <br /> platforms, and new technologies. The list of what
            we can do is given below.
          </p>
        </div>
        <div className="platform_main">
          {technologies.map((tech) => (
            <div key={tech.id} className={`${styles.platform}`}>
              <div className={`${styles.platform_content}`}>
                <div>
                  <img src="https://i.ibb.co/fGZshS8/Screenshot-8-removebg-preview.png" alt="" />
                </div>
                <div>
                  <h2>{tech?.name}</h2>
                </div>
              </div>
              <div className={`${styles.div_list}`}>
                <ul className={`${styles.ul}`}>
                  <li className={`${styles.li}`}>{tech?.tech[0]}</li>
                  <li className={`${styles.li}`}>{tech?.tech[1]}</li>
                  <li className={`${styles.li}`}>{tech?.tech[2]}</li>
                  <li className={`${styles.li}`}>{tech?.tech[3]}</li>
                </ul>
                <ul className={`${styles.ul}`}>
                  <li className={`${styles.li}`}>{tech?.tech[4]}</li>
                  <li className={`${styles.li}`}>{tech?.tech[5]}</li>
                  <li className={`${styles.li}`}>{tech?.tech[6]}</li>
                  <li className={`${styles.li}`}>{tech?.tech[7]}</li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Platform;
