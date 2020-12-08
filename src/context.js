
//context api for filter components
import React from "react";
const filterContext = React.createContext();
export const Provider = filterContext.Provider;
export const Consumer = filterContext.Consumer;

//context api for list
const listContext = React.createContext();
export const ListProvider = listContext.Provider;
export const ListConsumer = listContext.Consumer;

// context api from app to grand childs
const headContext = React.createContext();
export const HeadProvider = headContext.Provider;
export const HeadConsumer = headContext.Consumer;

const filterListRecipeContext = React.createContext();
export const RecipeProvider = filterListRecipeContext.Provider;
export const RecipeConsumer = filterListRecipeContext.Consumer;