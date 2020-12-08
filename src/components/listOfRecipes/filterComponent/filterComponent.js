import React from "react";
import "../listOfRecipes.css";
import FilterByNutrition from "./filterByNutrition";
import FilterByCategory from "./filterByCategory";

const FilterComponent = () => {
    return (
        <div id="heading-and-filter-container">
            <h1 id="list-title">Recipies</h1>
            <div id="filter-container">
                <FilterByNutrition />
                <FilterByCategory />
            </div>
        </div>
    )
}
export default FilterComponent;
