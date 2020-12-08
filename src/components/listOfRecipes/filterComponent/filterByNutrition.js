import React from "react";
import "../listOfRecipes.css";
import { Consumer } from "../../../context";

const FilterByNutrition = () => {
    return (
       
        <div id="filter-by-nutrition-container">
            <Consumer>
            {({filterVariables , filterMethods}) => {
                return( 
                    <>              
                     <div>
                    <span className="filter-span-text">Filter by Nutritions :</span>
                    <select
                    id="select-nutrition-type"
                    onChange={(e) => {
                        filterMethods.filterList(e);
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
                {filterVariables.filterNutritionType === "all" ? null : (
                    <div id="range-container">
                    <span className="filter-span-text"> Range : </span>
                    <input
                        id="range-from-input"
                        className="range-input"
                        type="number"
                        placeholder="From"
                        maxLength={3}
                        value={filterVariables.rangeFrom}
                        onChange={(e) => filterMethods.ListUpdatedWithRangeFrom(e)}
                    />
                    <input
                        className="range-input"
                        type="number"
                        placeholder="To"
                        maxLength={3}
                        value={filterVariables.rangeTo}
                        onChange={(e) => filterMethods.listUpdatedWithRangeTo(e)}
                    />
                    </div>
                    
                )}
                </>)
         
            }}
         </Consumer>
         </div>

    )
}
export default FilterByNutrition;