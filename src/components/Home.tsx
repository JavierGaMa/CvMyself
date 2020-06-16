import React from "react";
import "../styles/Layout.css";

import SideBar from "./SideBar/SideBar";
import Projects from "./projects/Projects";

const Home = () => {
  return (
    <>
      <SideBar />
      <Projects show={3} />
    </>
  );
};

export default Home;
