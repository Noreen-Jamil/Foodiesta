import React from "react";
import "../listOfRecipes.css";
import Li from "./li";
import {RecipeProvider , ListConsumer} from "../../../context";

const List = () => {
    return (
        <ListConsumer>
        { ({filteredList , nutritions}) => {
            return (
                <ul id="list-container">
                { filteredList.map((recipe, index) => {
                    let desiredNutritions = nutritions.filter((nutrition) => {
                    if (nutrition.id === recipe.id) {
                        return nutrition.data;
                    }
                    });
                    return (
                        //make provider of desirednutritions and in value attribute pass multi valus using object
                        <RecipeProvider value = {
                            {
                                filteredList,
                                desiredNutritions,
                                index
                            }
                        }>
                             <Li />
                             {/* <Li desiredNutritions = {desiredNutritions} index={index}/> */}
                        </RecipeProvider>
                    );
                }) 
                }
        
            </ul>
            )
       
        }}
        </ListConsumer>
    )
}
export default List;