import React from "react";
import styles from "../../styles/SoftDevCycle.module.scss";

const SoftDevCycle = () => {
  return (
    <div className={`${styles.main_cycle_container} container_fluid`}>
      <div className={styles.content_text}>
        <h2 className={`${styles.head_content}`}>Our Software Development Cycle</h2>
        <p className={`${styles.text_content}`}>
          We apply a systematic approach to complex and simple projects. We follow Agile methodology, Scrum <br /> and Kanban, which allow our
          dedicated team to deliver exceptional apps on time.
        </p>
      </div>
      <div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://i.ibb.co/MZFd4m5/dev-cycle-71ag7gbi8ypvstimpvlmqampvejkh4vg42fsadstnps-png.webp" alt="" />
      </div>
    </div>
  );
};

export default SoftDevCycle;
