import React from "react";
import "./recipeDetails.css";

const RecipeDetails = (props) => {
  props.headerState("true");
  return (
    <div className="list-group-item list-group-item-action detail-recipe-list">
      <h5 className="recipe-title">{props.recipe.title}</h5>

      <div className="main-recipe-container">
        <div>
          <div id="dish-image-and-details">
            <div className="prep-nut-ing-container">
              <div id="preperation-and-nutritions-container">
                <div className="dish-detail-container prepeartion-details">
                  <h2 className="main-headings">Preperation Details</h2>
                  <div>
                    <h3>Ready In Minutes : </h3>
                    <span> {props.recipe.readyInMinutes}</span>
                  </div>
                  <div>
                    <h3> Servings :</h3>
                    <span> {props.recipe.servings} </span>
                  </div>
                  <div>
                    <h3> Diets :</h3>
                    <span>
                      {props.recipe.diets.map((diet, index) => {
                        return <span key={index}>{diet}, </span>;
                      })}
                    </span>
                  </div>
                  {props.recipe.dishType.length !== 0 ? (
                    <div>
                      <h3> Dish Type :</h3>
                      {props.recipe.dishType.map((dishType) => {
                        return <span>{dishType}</span>;
                      })}
                    </div>
                  ) : null}
                  <div>
                    <h3> Health Score :</h3>
                    <span> {props.recipe.healthScore} </span>
                  </div>
                </div>
                <div className="dish-detail-container nutritions-details">
                  <h2 className="main-headings">Nutritions Details</h2>
                  <div>
                    <h3> Calories :</h3>
                    <span>{props.nutritions[0].data.calories}</span>
                  </div>
                  <div>
                    <h3> Carbs :</h3>
                    <span>{props.nutritions[0].data.carbs}</span>
                  </div>
                  <div>
                    <h3> Proteins :</h3>
                    <span>{props.nutritions[0].data.protein}</span>
                  </div>
                  <div>
                    <h3> Fats :</h3>
                    <span>{props.nutritions[0].data.fat}</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="main-headings"> Ingredients :</h3>
                <ul id="ingredients-ul">
                  {props.recipe.ingredients.map((ingredient, index) => {
                    return (
                      <li key={index}>
                        <img src={ingredient.image} alt="" />
                        <span>{ingredient.name}</span>
                        <span>{ingredient.measures.metric.amount}</span>
                        <span>{ingredient.measures.metric.unitShort}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <img
              className="pic-of-dish"
              src={props.recipe.image}
              alt={props.recipe.title}
            />
          </div>
          <div id="instruction-container">
            <h3 className="main-headings"> Instructions:</h3>
            <span id="instructions">{props.recipe.instructions}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
