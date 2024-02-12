import React from "react";
import { NavLink } from "react-router-dom";


const Common = (props) => {
  return (
    <section className="home-section">
      <div className="container">
        <div className="text-container">
          <h1 className="main-heading">
           {props.name}
            <strong className="brand-name">{" "}{props.n}</strong>
          </h1>
          <h2 className="sub-heading">It's just my project</h2>
          <div className="btn-container">
            <NavLink to={props.visit} className="btn-get-started">
             {props.btname}
            </NavLink>
          </div>
        </div>

        <div className="img-container">
          <img src={props.imgsrc}  alt="home img" />
        </div>
      </div>
    </section>
  );
};

export default Common;
