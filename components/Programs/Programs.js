/* eslint-disable @next/next/no-img-element */
import React from "react";
import { TabPanel } from "react-tabs";
import { Tab } from "react-tabs";
import { TabList } from "react-tabs";
import { Tabs } from "react-tabs";
import Developer from "../Developer/Developer";
import LearningPath from "../CloudOpsLearningPath/CloudOps";

const Programs = () => {
  return (
    <div>
      <div className="tabs">
        <Tabs>
          <TabList style={{ textAlign: "center" }}>
            <Tab style={{ display: "inline-block", margin: "50px 20px", boxShadow: "-2px 3px 20px rgba(0,0,0,0.2)", padding: "18px 40px" }}>
              Program Roadmap
            </Tab>
            <Tab style={{ display: "inline-block", margin: "50px 20px", boxShadow: "-2px 3px 20px rgba(0,0,0,0.2)", padding: "18px 40px" }}>
              Program Journey
            </Tab>
          </TabList>

          <TabPanel>
            <LearningPath />
          </TabPanel>
          <TabPanel>
            <Developer />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Programs;
