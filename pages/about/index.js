/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "../../styles/About.module.scss";

const About = () => {
  return (
    <>
      <section className={`${styles.main_section} container_fluid`}>
        <div className={styles.about_head_text}>
          <h2>About Us</h2>
          <p>
            TS4U is an international IT-company founded in 2004 as a provider of custom software development services (mobile apps, web-oriented
            solutions, business software).
          </p>
        </div>
        <div className={styles.about_head_img}>
          <img src="https://i.ibb.co/PcG22vV/pimgpsh-mediumsize-distr-1ycwp6uhrzepsf6wampao78zf3pr0778juvleufdxjvw-jpg.webp" alt="" />
        </div>
        <div className={styles.about_head_text}>
          <h2>Backstory</h2>
          <p>
            At first, there were two different companies – Antalika and TS4U – that were united in 2014. Together, we have managed to do more and
            better. Combining all the experience they have worked side by side. Antalika gave a branch of auction development into a common business,
            for instance, developed such an auction platform as Scandy. TS4U has already had successful experience in game development, starting at
            the game Time of silence once.
            <br />
            <br />
            So, now, two captains are driving the ship. They united their experience and gathered a competent team of developers.
          </p>
        </div>
        <div className={`${styles.main_row} container`}>
          <div className={styles.col}>
            <div>
              <img src="https://i.ibb.co/CKdTY5h/Screenshot-41-71agx31ojoogckih6zxepszgogl5klffjw9893knch4-jpg.webp" alt="" />
            </div>
            <div className="info">
              <h3>Maksim Osipau</h3>
              <p>Co-owner</p>
            </div>
          </div>
          <div className={styles.col}>
            <div>
              <img src="https://i.ibb.co/B2r5cj3/Screenshot-1-71agx31ojoogckih6zxepszgogl5klffjw9893knch4-jpg.webp" alt="" />
            </div>
            <div className="info">
              <h3>Alexey Grakov</h3>
              <p>Co-owner</p>
            </div>
          </div>
        </div>
        <hr />
        <p className={styles.mid_paragraph}>
          During 15 years, the company has been growing, enhancing performance and extending the list of customers. We’ve implemented more than 600
          completed projects, that means more than 400 customers have chosen us. These were different orders for small and big projects, and we coped
          with all the challenges successfully. <br />
          <br />
          TS4U activity aims at developing high-quality products along with meeting customers’ needs and requirements with regard to the
          state-of-the-art technologies. <br />
          <br /> TS4U company consists of company group of TS4U LLC and VAsoft LLC and belong to the same owners.
        </p>
        <div className={styles.second_row}>
          <div className={styles.col_second}>
            <h2>Responsibility</h2>
            <div>
              <img src="https://i.ibb.co/q5bWLCb/badge.png" alt="" />
            </div>
            <p className={styles.mid_paragraph}>
              TS4U takes responsibility for the quality of its services, for the expediency and soundness of the decisions made in the development
              process, for the fulfillment of its obligations, as well as for the confidence reposed by our customers, providing guaranteed
              maintenance of our software products.
            </p>
          </div>
          <div className={styles.col_second}>
            <h2>Professionalism</h2>
            <div>
              <img src="https://i.ibb.co/mGS1Kby/clock.png" alt="" />
            </div>
            <p className={styles.mid_paragraph}>
              For us, it means professional fulfillment of our obligations, based on a deep understanding of development processes, solid knowledge,
              and experience, compliance with safety requirements and ensuring absolute confidentiality.
            </p>
          </div>
          <div className={styles.col_second}>
            <h2>Efficiency</h2>
            <div>
              <img src="https://i.ibb.co/wQfpF1K/target.png" alt="" />
            </div>
            <p className={styles.mid_paragraph}>
              Efficient distribution of time and material resources across the project, making expedient decisions, resulting in the development of a
              competitive software product. It is one of the basic principles of TS4U.
            </p>
          </div>
          <div className={styles.col_second}>
            <h2>Communication</h2>
            <div>
              <img src="https://i.ibb.co/cX04Kw9/chat.png" alt="" />
            </div>
            <p className={styles.mid_paragraph}>We provide instant support for our customers. We communicate where it is comfortable to you.</p>
          </div>
        </div>
        <div className={styles.office}>
          <h2>Our Office Life</h2>
        </div>
        <div className={styles.gallery}>
          <div>
            <img src="https://i.ibb.co/4pN1pWp/plane-s-71agx31ontrqifvs4e6sr46opamolcgtsp6wklaxx4o-jpg.webp" alt="" />
          </div>
          <div>
            <img src="https://i.ibb.co/mCYZSCb/VR-s-71agx31ontrqifvs4e6sr46opamolcgtsp6wklaxx4o-jpg.webp" alt="" />
          </div>
          <div>
            <img src="https://i.ibb.co/ys2q6Vx/Screenshot-29-s-71agx31ontrqmj78z9ej8tlupdedfln817w04zw8wxs-jpg.webp" alt="" />
          </div>
          <div>
            <img src="https://i.ibb.co/yXkNXy3/clock-s-71agx31ontrqifvs4e6sr46opamolcgtsp6wklaxx4o-jpg.webp" alt="" />
          </div>
          <div>
            <img src="https://i.ibb.co/g7Ygxv1/Screenshot-45-s-71agx31ontrqifvs4e6sr46opamolcgtsp6wklaxx4o-jpg.webp" alt="" />
          </div>
          <div>
            <img src="https://i.ibb.co/3Yf69qX/Screenshot-4-s-71agx31ontrqkhjijtsnzyw9pc0j0h20wyjgcsllf18-jpg.webp" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
