import React, { useState, useEffect } from "react";
import { getRecipies, getNutritions } from "../../apiService";
import "./listOfRecipes.css";
import FilterComponent from "./filterComponent/filterComponent";
import List from "./list/list";

const ListOfRecipes = (props) => {
  //to show header if listOf Recipe components mounts
  props.headerState("true");
  const allRecipiesIds = [
    639779,
    644681,
    640941,
    641904,
    664473,
    639057,
    653836,
    657384,
    715497,
    647442,
    632552,
    640844,
    642287,
    632570,
    1098387,
    631880,
    665012,
    657178,
    640767,
    982365,
    631756,
    652284,
    652332,
    637932,
    638568,
    644094,
    638832,
    639303,
    716211,
    663985,
    658517,
    716426,
    649504,
    633293,
    633251,
    632101,
    716411,
    651958,
    650939,
    665779,
    654663,
    632502,
    644693,
    636328,
    634703,
    794351,
    655098,
    638940,
    640827,
    639594,
    636271,
    652513,
    633786,
    716437,
    660297,
    716367,
    632250,
    651409,
    646906,
    715378,
    715419,
    664488,
    715407,
    655098,
    797177,
    716377,
    665303,
    636601,
    637832,
    715421,
    659929,
    1098393,
    715394,
    716370,
    645479,
    633221
    // 715385,
    // 654032,
    // 716429,
    // 633258,
    // 633251,
    // 647501,
    // 652433,
    // 716430,
    // 648348,
    // 639616,
    // 631807,
    // 643362,
    // 640621,
    // 634496,
    // 645696,
    // 646868,
    // 645978
  ];
  let getRecipe = [];
  let allNutritions = [];
  const [recipies, updateRecipies] = useState([]);
  const [nutritions, updateNutritions] = useState([]);
  const [rangeFrom, updateRangeFrom] = useState("");
  const [rangeTo, updateRangeTo] = useState("");
  const [filteredList, updateFilteredList] = useState([]);
  const [filterNutritionType, updateFilterNutritionType] = useState("all");
  const [category , updateCategory] = useState("all");
  let filterListOfRecipes = [];
  let categoryFilterList = []; //category filtered list variable
  const [errorMsg, updateErrorMsg] = useState("");

  const categorySelected = (e) => {
    updateCategory(e.target.value);
    if(e.target.value === "all" && filterNutritionType === "all"){
      updateFilteredList([...recipies]);
    }else if(e.target.value === "all" && filterNutritionType !== "all"){
     rangeToFunc(rangeFrom , rangeTo , e.target.value);
    }else{
      categoryFilterList = recipies.filter( recipe => {
            if(recipe.dishType.includes(e.target.value)){
              return recipe;
            } 
          });
          filterNutritionType === "all" ? updateFilteredList([...categoryFilterList]) : filteredListUpdate(e.target.value);
    }
  }
  //below fiunction will be called if nutrition type value is not "all". and user selected category type "all".
  // this function will show list a/c to nutrition type selected before selecting category.
  const filteredListUpdate = (e) =>{
   rangeToFunc(rangeFrom,rangeTo ,e); 
  }

//filter list on selection of nutrition type
  const filterList = (e) => {
    updateRangeFrom("");
    updateRangeTo("");
    if(category === "all"){
      updateFilteredList([...recipies]);
    }
    updateFilterNutritionType(e.target.value);
  };


  // update list of nutrition a/c to range from
  const ListUpdatedWithRangeFrom = (e) => {
    updateRangeFrom(e.target.value);
    
    if (rangeTo !== "") {
      rangeToFunc(e.target.value,rangeTo, category);
    } else {
      rangeFromFunc(e.target.value);
    }
  };

   // update list of nutrition a/c to range to
  const listUpdatedWithRangeTo = (e) => {
    updateRangeTo(e.target.value);
    if (e.target.value !== "") {
      rangeToFunc(rangeFrom , e.target.value,category);
    } else {
      rangeFromFunc(rangeFrom);
    }
  };

  const rangeFromFunc = (value) => {
    let filterRecipes = [];

    nutritions.forEach((nutrition) => {
      if (parseInt(nutrition.data[filterNutritionType]) >= value) {
        if(category !== "all"){
          filterRecipes = recipies.filter((recipe) => {
            if (recipe.id === nutrition.id && recipe.dishType.includes(category)) {
              return recipe;
            }
          });
          
        }else{
            filterRecipes = recipies.filter((recipe) => {
              if (recipe.id === nutrition.id) {
                return recipe;
              }
            });
          }
          if(filterRecipes.length !== 0){
            filterListOfRecipes.push(filterRecipes[0]);
          }
      }
    });
    updateFilteredList([...filterListOfRecipes]);
  };

  const rangeToFunc = (from, to, e) => {
    let filterRecipes = [];
    nutritions.forEach((nutrition) => {
      if (
        parseInt(nutrition.data[filterNutritionType]) >= from &&
        parseInt(nutrition.data[filterNutritionType]) <= to
      ) {
        if(e !== "all" ){
          filterRecipes = recipies.filter((recipe) => {
            if (recipe.id === nutrition.id && recipe.dishType.includes(e)) {
              return recipe;
            }
          });
        }else{
          filterRecipes = recipies.filter((recipe) => {
            if (recipe.id === nutrition.id) {
              return recipe;
            }
          });
        }
        if(filterRecipes.length !== 0){
          filterListOfRecipes.push(filterRecipes[0]);
        }
      }
    });
    updateFilteredList([...filterListOfRecipes]);
    displayErrorMessage(from,to);
  };
 const displayErrorMessage = (from,to) => {
   if(from > to){
    updateErrorMsg("Invalid range");
   }else if(from <= to && filterListOfRecipes.length === 0){
    updateErrorMsg("No recipe in this range");
   }
 }
 
  useEffect(() => {
    JSON.parse(localStorage.getItem("recipesArray")) === null
      ? allRecipiesIds.forEach((id) => {
          getRecipies(id).then((data) => {
            let recipeInfo = {
              id: data.id,
              title: data.title,
              instructions: data.instructions,
              image: data.image,
              readyInMinutes: data.readyInMinutes,
              servings: data.servings,
              healthScore: data.healthScore,
              diets: data.diets,
              ingredients: data.extendedIngredients,
              dishType: data.dishTypes
            };
            getRecipe.push(recipeInfo);
            updateRecipies([...getRecipe]);
            localStorage.setItem(
              "recipesArray",
              JSON.stringify([...getRecipe])
            );
          });
          getNutritions(id).then((data) => {
            let nutritions = {
              data,
              id
            };
            allNutritions.push(nutritions);
            updateNutritions([...allNutritions]);
            localStorage.setItem(
              "nutritionArray",
              JSON.stringify([...allNutritions])
            );
          });
        })
      : updateRecipies(JSON.parse(localStorage.getItem("recipesArray")));
    updateNutritions(JSON.parse(localStorage.getItem("nutritionArray")));
   updateFilteredList(JSON.parse(localStorage.getItem("recipesArray")));
  }, []);

  return (
    <div className="list-group">
      <FilterComponent  />
      { filteredList.length === 0 ? <p id="error-msg">{errorMsg}</p> : null}
      <List />
    </div>
  );
};

export default ListOfRecipes;
