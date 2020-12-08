import React from "react";
import { About } from "../about/about.js";
import { Categories } from "../categories/categories.js";
import WelcomeSession  from "./welcomeSession.js";
import "./welcome.css";

const Welcome = ({ headerState }) => {
  headerState("false");
  return (
    <div>
      <WelcomeSession appName= "Foodiesta" slogan= "Home Of Recipes"/>
      <About />
      <Categories />
    </div>
  );
};
export default Welcome;
