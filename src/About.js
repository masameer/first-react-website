import React from "react";
import Common from "./Common";
import web from "./images/img.jpg"

const About = () => {
  return (
    <>
      <Common
      name="Welcome to About page"
      n=""
      imgsrc={web}
      visit="/contact"
      btname="Contact Now"/> 
    </>
  );
};

export default About;
