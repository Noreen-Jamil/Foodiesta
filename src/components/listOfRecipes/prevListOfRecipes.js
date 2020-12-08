import React, { useState, useEffect } from "react";
import { getRecipies, getNutritions } from "../../apiService";
import { Link } from "react-router-dom";
import "./listOfRecipes.css";

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
      <div id="heading-and-filter-container">
        <h1 id="list-title">Recipies</h1>
        <div id="filter-container">
          <div id="filter-by-nutrition-container">
            <div>
              <span className="filter-span-text">Filter by Nutritions :</span>
              <select
                id="select-nutrition-type"
                onChange={(e) => {
                  filterList(e);
                }}
                className="select-nutrition-type"
              >
                <option value="all">All</option>
                <option value="calories">Calories</option>
                <option value="carbs">Carbs</option>
                <option value="protein">Proteins</option>
                <option value="fat">Fats</option>
              </select>
            </div>
            {filterNutritionType === "all" ? null : (
              <div id="range-container">
                <span className="filter-span-text"> Range : </span>
                <input
                  id="range-from-input"
                  className="range-input"
                  type="number"
                  placeholder="From"
                  maxLength={3}
                  value={rangeFrom}
                  onChange={(e) => ListUpdatedWithRangeFrom(e)}
                />
                <input
                  className="range-input"
                  type="number"
                  placeholder="To"
                  maxLength={3}
                  value={rangeTo}
                  onChange={(e) => listUpdatedWithRangeTo(e)}
                />
              </div>
            )}
          </div>

          <div>
            <span className="filter-span-text">Filter by Category : </span>
            <select className="select-nutrition-type select-category" value={category} onChange={ (e) =>{categorySelected(e)}}
            >
              <option value="all">All</option>
              <option value="breakfast">Breakfast</option>
              <option value="brunch">Brunch</option>
              <option value="lunch">Lunch</option>
              <option value="dinner">Dinner</option>
              <option value="side dish">Side Dish</option>
              <option value="dessert">Dessert</option>
              <option value="soup">Soup</option>
              <option value="salad">Salad</option>
            </select>
          </div>
        </div>
      </div>
        { filteredList.length === 0 ? <p id="error-msg">{errorMsg}</p> : null}
    
      <ul id="list-container">
          { filteredList.map((recipe, index) => {
              let desiredNutritions = nutritions.filter((nutrition) => {
                if (nutrition.id === recipe.id) {
                  return nutrition.data;
                }
              });
              return (
                <li
                  key={index}
                  onClick={() => {
                    props.onSelectItem(filteredList[index], desiredNutritions);
                  }}
                  className="recipe-list"
                >
                  <Link to="/recipeDetails">
                    <div className="main-info">
                      <h5 className="recipe-name">{recipe.title}</h5>
                      <small className="recipe-id">{recipe.id}</small>
                    </div>
                    <div className="detail-container">
                      <img
                        className="image-of-dish"
                        src={recipe.image}
                        alt={recipe.title}
                      />
                      <div className="dish-details">
                        <span>Ready In Minutes : {recipe.readyInMinutes} </span>
                        <span> Servings : {recipe.servings}</span>
                        <span> Health Score : {recipe.healthScore} </span>
                        {recipe.dishType.length !== 0 ? (
                          <span>Dish Type : {recipe.dishType.map(dishtype => dishtype).join(" ")}</span>
                        ) : null}
                      </div>
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
                    </div>
                  </Link>
                </li>
              );
            }) 
          }
     
      </ul>
    </div>
  );
};

export default ListOfRecipes;
