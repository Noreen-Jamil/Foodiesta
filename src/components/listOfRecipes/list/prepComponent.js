import React from "react";
import "../listOfRecipes.css";

const PrepComponent = ({recipe}) => {
    return (
        <div className="dish-details">
            <span>Ready In Minutes : {recipe.readyInMinutes} </span>
            <span> Servings : {recipe.servings}</span>
            <span> Health Score : {recipe.healthScore} </span>
            {recipe.dishType.length !== 0 ? (
            <span>Dish Type : {recipe.dishType.map(dishtype => dishtype).join(" ")}</span>
            ) : null}
      </div>
    )
}
export default PrepComponent;