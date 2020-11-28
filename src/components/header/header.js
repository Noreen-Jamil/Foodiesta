import React from "react";
import "../welcome/welcome.css";
import chef from "../../images/chef.png";

export const Header = () => {
  return (
    <div className="welcome-header">
      <img src={chef} alt="chef" />
      <h1 id="title">Foodiesta</h1>
    </div>
  );
};
