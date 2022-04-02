import React from "react";
import styles from "../../styles/Banner.module.css";

const Banner = () => {
  return (
    <section className={`${styles.main_banner} custom_text_color1 `}>
      <div className={`${styles.grid_container} container_fluid`}>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab repellat incidunt reiciendis excepturi deleniti minus aliquam, porro
            voluptatem? Atque consectetur fugit eveniet repellendus ad velit aut in debitis sapiente commodi?
          </p>
        </div>
        <div>
          {" "}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab repellat incidunt reiciendis excepturi deleniti minus aliquam, porro
            voluptatem? Atque consectetur fugit eveniet repellendus ad velit aut in debitis sapiente commodi?
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
