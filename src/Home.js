import React from "react";
import Common from "./Common";
import web from "../src/images/img2.jpg";


const Home = () => {
  return (
       <>
        <Common
      name="Grow your Business With"
      n="Me"
      imgsrc={web}
      visit="/courses"
      btname="Get Started"/> 
       </>
  );
};

export default Home;
