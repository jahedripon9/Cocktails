import presentDrinks from "./src/presentDrinks";
import "./src/searchForm.js";
const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a";

window.addEventListener("DOMContentLoaded", () => {
  presentDrinks(URL);
});
