import React from "react";
import { Link } from "react-router-dom";
import "../listOfRecipes.css";
import LiRecipeDetails from "./liRecipeDetails";
import RecipeIdAndTitle from "./recipeIdAndTitle";
import {HeadConsumer, RecipeConsumer} from "../../../context";

const Li = () =>{
    return (
        <HeadConsumer>
            { (showSelectedItemDetail) => {
                return (
                    <RecipeConsumer>
                    { ({filteredList, desiredNutritions , index}) => {
                            console.log(filteredList[index].id);
                        return (
                            <li
                         key={index}
                         onClick={() => {
                         showSelectedItemDetail(filteredList[index], desiredNutritions);
                         }}
                         className="recipe-list"
                     >
                         <Link to="/recipeDetails">
                            
                                <RecipeIdAndTitle recipe= {filteredList[index]}/>
                                <LiRecipeDetails  recipe = {filteredList[index]}/>
                       
                         {/* <LiRecipeDetails desiredNutritions = {desiredNutritions} /> */}
                         </Link>
                     </li>
                        )
                    }}
                </RecipeConsumer>
                )
            }}
        </HeadConsumer>
       
    )
}
export default Li;