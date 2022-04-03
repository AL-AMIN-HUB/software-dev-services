import React from "react";
import styles from "../../styles/ContactBanner.module.scss";

const ContactBanner = () => {
  return (
    <section className={`${styles.ContactBanner}`}>
      <div className={`${styles.main_contact}`}>
        <div className={` container_fluid ${styles.contact_info}`}>
          <h2>Want To Develop A Custom Software Solution?</h2>
          <button className={styles.contact_btn}>Contact Us</button>
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;
