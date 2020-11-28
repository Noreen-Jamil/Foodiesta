import React from "react";
import foodiesta from "../../images/foodiesta4.jpg";
import { Options } from "../options/options.js";
import { About } from "../about/about.js";
import { Categories } from "../categories/categories.js";

import "./welcome.css";

const Welcome = ({ headerState }) => {
  headerState("false");
  return (
    <div>
      <div id="welcome-container">
        <h1 id="logo-heading">Foodiesta</h1>
        <h5 className="welcome-description ">Home of Recipies.</h5>
        <img id="main-backImg" src={foodiesta} alt="backImage" />
        <Options />
      </div>
      <About />
      <Categories />
    </div>
  );
};
export default Welcome;
