import React from "react";
import { Link } from "react-router-dom";
import "../welcome/welcome.css";

export const Categories = () => {
  let categorySelected = "none";
  return (
    <div id="main-images-description-container">
      <h2 id="images-description-holder-title"> Categories</h2>
      <div id="dishes-image-container">
        <div className="image-and-description-container">
          <img
            src="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/slideshows/best_and_worst_indian_dishes_for_your_health_slideshow/1800x1200_best_and_worst_indian_dishes_for_your_health_slideshow.jpg"
            className="categories-img"
            alt="gravy with chicken"
          />
          <div className="card-description">
            <p className="card-image-text">Lunch / Dinner / BreakFast</p>
            {/* <span className="card-image-healthScore">Health Score : 10</span> */}
          </div>
        </div>

        <div className="image-and-description-container">
          <img
            src="https://i.pinimg.com/originals/11/b5/4e/11b54e28f3014e11e4726b62d8a8333e.jpg"
            className="categories-img"
            alt="green pasta"
          />
          <div className="card-description">
            <p className="card-image-text">Side Dishes </p>
            {/* <span className="card-image-healthScore">Health Score : 10</span> */}
          </div>
        </div>

        <div className="image-and-description-container">
          <img
            src="https://i0.wp.com/www.missinthekitchen.com/wp-content/uploads/2019/02/Mint-Chocolate-Chip-Cheesecake-Recipe-Image.jpg?fit=650%2C433&ssl=1"
            className="categories-img"
            alt="ice cream"
          />
          <div className="card-description">
            <p className="card-image-text">Desserts</p>
            {/* <span className="card-image-healthScore">Health Score : 10</span> */}
          </div>
        </div>

        <div className="image-and-description-container">
          <img
            src="https://sifu.unileversolutions.com/image/en-LK/recipe-topvisual/2/1260-709/chicken-and-sweet-corn-soup-50420400.jpg"
            className="categories-img"
            alt="soup"
          />
          <div className="card-description">
            <p className="card-image-text">Soup</p>
            {/* <span className="card-image-healthScore">Health Score : 10</span> */}
          </div>
        </div>
      </div>
    </div>
  );
};
