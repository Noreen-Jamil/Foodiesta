import React from "react";
import "../listOfRecipes.css";
import PrepComponent from "./prepComponent";
import NutritionComponent from "./nutritionComponent";

const LiRecipeDeatils = ({recipe}) => {
    return (
        <div className="detail-container">
            <img
              className="image-of-dish"
              src={recipe.image}
              alt={recipe.title}
            />
           <PrepComponent recipe = {recipe} />
           <NutritionComponent />
        </div>
    )
}
export default LiRecipeDeatils;