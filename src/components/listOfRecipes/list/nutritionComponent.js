import React from "react";
import "../listOfRecipes.css";
import { RecipeConsumer } from "../../../context";

const NutritionComponent = () => {
    return (
       
           <RecipeConsumer>
                {({desiredNutritions}) => {
                  return (
                    <div className="dish-details">
                    <span>
                      calories : {desiredNutritions[0].data.calories}
                    </span>
                    <span> carbs : {desiredNutritions[0].data.carbs} </span>
                    <span>
                      Proteins : {desiredNutritions[0].data.protein}
                    </span>
                    <span> Fats : {desiredNutritions[0].data.fat} </span>
                  </div>
                  )
                }}
            </RecipeConsumer>
      
    )
}
export default NutritionComponent;