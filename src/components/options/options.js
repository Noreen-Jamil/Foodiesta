import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../welcome/welcome.css";

export const Options = () => {
  const [optionSelected, updateOptionSelected] = useState("none");
  const selectedOption = (e) => {
    updateOptionSelected(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div id="welcomePage-options-container">
      <Link to="/listOfRecipes" id="view-recipe">
        View Recipes
      </Link>
    </div>
  );
};
