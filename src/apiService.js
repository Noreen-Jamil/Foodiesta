const apiKey = "8d9e82b0d2c84c178e6b28fb16dabdb0";
// const apiKey = "742a50aee4bd4f4e8a5b5de5ac9989b2";
const endPoints = {
  getRecipies: "https://api.spoonacular.com/recipes/",
  getNutritions: "https://api.spoonacular.com/recipes/"
};

export const getRecipies = (id) => {
  return fetch(`${endPoints.getRecipies}${id}/information?apiKey=${apiKey}`)
    .then((response) => response.json())
    .then((data) => data);
};

export const getNutritions = (id) => {
  return fetch(
    `${endPoints.getNutritions}/${id}/nutritionWidget.json?apiKey=${apiKey}`
  )
    .then((response) => response.json())
    .then((data) => data);
};
