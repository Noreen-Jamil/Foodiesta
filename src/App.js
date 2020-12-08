import React, { useState } from "react";
import { BrowserRouter, Route} from "react-router-dom";
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import Welcome from "./components/welcome/welcome";
import ListOfRecipes  from "./components/listOfRecipes/listOfRecipes";
import RecipeDetails from "./components/recipeDetails/recipeDetails";
import { HeadProvider } from "./context";

export default function App() {
  const [headerDisplay, setHeaderDisplay] = useState("false");
  const headerState = (state) => {
    setHeaderDisplay(state);
  };

  const [selectedRecipe, updateRecipeSelection] = useState("");
  const [selectedNutritions, updateNutritions] = useState("");
  const showSelectedItemDetail = (recipe, nutritions) => {
    updateRecipeSelection(recipe);
    updateNutritions(nutritions);
  };

  return (
    <BrowserRouter>
        <Route path="/foodiesta" exact>
          <Welcome headerState={headerState} />
        </Route>
        {headerDisplay === "false" ? null : <Header />}
        <Route path="/listOfRecipes">
          <HeadProvider value={showSelectedItemDetail}>
            <ListOfRecipes
              headerState={headerState}
            />
          </HeadProvider>
         
        </Route>
        <Route path="/recipeDetails">
          <RecipeDetails
            headerState={headerState}
            recipe={selectedRecipe}
            nutritions={selectedNutritions}
          />
        </Route>
        <Footer />
    </BrowserRouter>
  );
}

{/* <ListOfRecipes
headerState={headerState}
onSelectItem={showSelectedItemDetail}
/> */}