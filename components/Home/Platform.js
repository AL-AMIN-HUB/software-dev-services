/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { Tab } from "react-tabs";
import { TabPanel } from "react-tabs";
import { TabList } from "react-tabs";
import { Tabs } from "react-tabs";
import styles from "../../styles/Platform.module.scss";
import "react-tabs/style/react-tabs.css";

const Platform = () => {
  const [technologies, setTechnologies] = useState([]);
  useEffect(() => {
    fetch("https://mocki.io/v1/3f46b6b7-9ec5-42ee-a1f8-563dfd04bccd")
      .then((res) => res.json())
      .then((data) => setTechnologies(data));
  }, []);
  return (
    <section>
      <div className={`${styles.main_services_container} `}>
        <div className={`${styles.content_text} container_fluid`}>
          <h2 className={`${styles.head_content}`}>The Technology Platforms We Use</h2>
          <p className={`${styles.text_content}`}>
            As an IT firm, we take the perspectives of our clients and their diverse claims in software development. To <br /> help you achieve your
            goals, we enhance our capacities by working with various programming languages, <br /> platforms, and new technologies. The list of what
            we can do is given below.
          </p>
        </div>
        <div className={styles.platform_origin}>
          <div className={styles.Platform_main}>
            <Tabs>
              <TabList>
                <Tab
                  style={{
                    margin: " 5px 90px 0 0",
                    border: "none",
                    boxShadow: "-2px 3px 15px rgba(0,0,0,0.3)",
                    padding: "10px",
                    background: "rgba(255,255,255,0.8)",
                    borderRadius: "3px",
                    textAlign: "center",
                  }}
                >
                  Mobile Development
                </Tab>
                <Tab
                  style={{
                    margin: " 5px 90px 0 0",
                    border: "none",
                    boxShadow: "-2px 3px 15px rgba(0,0,0,0.3)",
                    padding: "10px",
                    background: "rgba(255,255,255,0.8)",
                    borderRadius: "3px",
                    textAlign: "center",
                  }}
                >
                  Web Platform
                </Tab>
                <Tab
                  style={{
                    margin: " 5px 90px 0 0",
                    border: "none",
                    boxShadow: "-2px 3px 15px rgba(0,0,0,0.3)",
                    padding: "10px",
                    background: "rgba(255,255,255,0.8)",
                    borderRadius: "3px",
                    textAlign: "center",
                  }}
                >
                  Programming Languages
                </Tab>
                <Tab
                  style={{
                    margin: " 5px 0 0 0",
                    border: "none",
                    boxShadow: "-2px 3px 15px rgba(0,0,0,0.3)",
                    padding: "10px",
                    background: "rgba(255,255,255,0.8)",
                    borderRadius: "3px",
                    textAlign: "center",
                  }}
                >
                  Technologies
                </Tab>
              </TabList>

              <TabPanel>
                <div>
                  <img src="https://i.ibb.co/fGZshS8/Screenshot-8-removebg-preview.png" alt="" />
                </div>
                <h2>Mobile Development</h2>
                <div>
                  <h3>Platform:</h3> <li>IOS</li>
                  <li>Android</li> <li>React Native</li>
                  <li>Flutter</li>
                </div>
              </TabPanel>
              <TabPanel>
                <div>
                  <img src="https://i.ibb.co/163NTyy/Screenshot-9-removebg-preview.png" alt="" />
                </div>
                <h2>Web Platform</h2>
                <div>
                  <h3>Platform:</h3> <li>NodeJS</li>
                  <li>Angular</li>
                  <li>React.js</li>
                  <li>Vue.js</li>
                  <li>Spring MVC</li>
                  <li>ASP.NET</li>
                  <li>Nest.js</li>
                  <li>ASP.NET Core</li>
                </div>
              </TabPanel>
              <TabPanel>
                <div>
                  <img src="https://i.ibb.co/yRZJh9M/Screenshot-10-removebg-preview.png" alt="" />
                </div>
                <h2>Programming Language</h2>
                <div>
                  <h3>Platform:</h3> <li>Swift</li>
                  <li>C#</li>
                  <li>Java</li>
                  <li>PHP</li>
                  <li>Kotlin</li>
                  <li>Objective-C</li>
                  <li>Typescript</li>
                </div>
              </TabPanel>
              <TabPanel>
                <div>
                  <img src="https://i.ibb.co/LpJJzmm/Screenshot-11-removebg-preview.png" alt="" />
                </div>
                <h2>Technologies</h2>
                <div>
                  <h3>Platform:</h3> <li>REST</li>
                  <li>JavaEE</li>
                  <li>AR/VR</li>
                  <li>Unity 3D</li>
                  <li>Spring</li>
                  <li>GraphQL</li>
                  <li>JPA/Hibernate</li>
                  <li>QT.NET</li>
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Platform;
