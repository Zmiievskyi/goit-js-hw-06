const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const makeMarkForListIngredients = ingredients.map(ingredient => {
    const createIngrediensItem = document.createElement("li");
    createIngrediensItem.textContent = ingredient;
    createIngrediensItem.classList.add ("item");
    return createIngrediensItem;
  });

const ingredientsList = document.querySelector("#ingredients");

ingredientsList.append(...makeMarkForListIngredients);
