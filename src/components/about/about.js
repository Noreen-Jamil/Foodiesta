import React from "react";
import "../welcome/welcome.css";
// import iceCreams from "../../images/ice-creams.jpg";
import burger from "../../images/burger.jpeg";
import lasagnea from "../../images/lasagnea.jpeg";
import roast from "../../images/roast.jpeg";
// import chef from "../../images/chef.png";
import brownDish from "../../images/brownDish.jpeg";
// import bowlsImage from "../../images/3bowlsImg.jpg";

export const About = () => {
  return (
    <div id="about-container">
      <h2 className="intro-heading">About Foodiesta</h2>

      <div id="about-sub-container">
        <div className="about-side-images">
          <img id="first-about-img" src={roast} alt="" />
          <img id="second-about-img" src={brownDish} alt="" />
        </div>
        <p className="card_text">
          Foodiesta cares for your health thats why we share{" "}
          <strong>health score</strong> of each recipe with you so you can
          better take care of you and your family health. Foodiesta makes
          selection of recipe easy specially for people who{" "}
          <strong>diets</strong> by providing details of{" "}
          <strong>nutritions</strong> of each recipe. You can find{" "}
          <strong>calories, protein, carbs and fats</strong> which makes easy
          for you to select perfect recipe for your health. You can{" "}
          <strong>filter</strong> recipes according to calories, protein, fats
          and carbs. You can also <strong>search</strong> your favorite recipes
          by their name.
        </p>
        <div className="about-side-images">
          <img id="third-about-img" src={lasagnea} alt="" />
          <img id="fourth-about-img" src={burger} alt="" />
        </div>
      </div>
    </div>
  );
};
