import React from "react";
import "../listOfRecipes.css";
import { Consumer } from "../../../context";
 
const FilterByCategory = () => {
    return (
        <Consumer>
            {({filterVariables , filterMethods}) => {
                return (
                    <>
                        <div>
                            <span className="filter-span-text">Filter by Category : </span>
                            <select className="select-nutrition-type select-category" value={filterVariables.category} onChange={ (e) =>{filterMethods.categorySelected(e)}}
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
                    </>
                )
                 
            }}
         </Consumer>
    )

}
export default FilterByCategory;
