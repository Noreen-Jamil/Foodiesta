import React from "react";
import "../listOfRecipes.css";

const RecipeIdAndTitle = ({recipe}) => {
    return (
        <div className="main-info">     
            <h5 className="recipe-name">{recipe.title}</h5>
            <small className="recipe-id">{recipe.id}</small>
        </div>
    )
}
export default RecipeIdAndTitle;