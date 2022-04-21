/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import styles from "../../styles/Facilities.module.scss";

const Facilities = () => {
  const [facilities, seFacilities] = useState([]);
  useEffect(() => {
    fetch("https://mocki.io/v1/3f49a64e-7ced-4f4b-acfa-4c1ad84cc52e")
      .then((res) => res.json())
      .then((data) => seFacilities(data));
  }, []);
  return (
    <section className={`${styles.container_main} container_fluid`}>
      <div className={`${styles.first_content} `}>
        <h2 className={`${styles.head_content}`}>We Provide Our IT Services to Various Industries</h2>
        <p className={`${styles.text_content}`}>
          MSD Services Software Development Company has completed projects of varying complexities within a variety of <br /> industries. We are
          experienced in media and entertainment, game development, medicine, the public sector,
          <br /> banking, gambling, and more.
        </p>
      </div>

      <div>
        <div className={styles.grid_container}>
          {facilities.map((facility) => (
            <div key={facility.id} className={styles.main_div}>
              <div>
                <img src={facility.img} alt="" />
              </div>
              <div>
                <h3>{facility.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
