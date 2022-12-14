import { derived, get, writable } from 'svelte/store';
import type { Ingredient } from '../recipes/ingredient';
import type { Recipe } from '../recipes/recipe';
import { recipes } from '../recipes/recipes.store';

const totalRecipes = writable(3);

const portions = writable(5);

const recipesList = writable<Recipe[]>([]);

const subscribe = derived(
  [totalRecipes, portions, recipesList],
  ([$totalRecipes, $portions, $recipesList]) => ({
    totalRecipes: $totalRecipes,
    portions: $portions,
    recipesList: $recipesList,
  })
).subscribe;

export const weeklyPlan = {
  subscribe,
  totalRecipes,
  portions,
  recipesList: derived(recipesList, ($recipesList) => $recipesList),
  modifyRecipePortions,
  generate,
  getTotalIngredients: derived(recipesList, ($recipesList) =>
    getTotalIngredients($recipesList)
  ),
};

function modifyRecipePortions(recipe: Recipe, value: number) {
  recipesList.set(
    get(recipesList).map((r) => {
      if (r.id === recipe.id) {
        r.userSelectedPortions = value;
      }
      return r;
    })
  );
}

function generate() {
  recipesList.set(recipes.getDistinctSet(get(totalRecipes)));
  distributePortionAmounts();
}

function distributePortionAmounts() {
  const portionDistribution = getPortionDistribution();
  recipesList.set(
    get(recipesList).map((recipe, i) => {
      recipe.userSelectedPortions = portionDistribution[i];
      return recipe;
    })
  );
}

function getPortionDistribution(): number[] {
  let restPortions = get(portions);
  let i = 0;
  const portionDistribution: number[] = Array.from(
    { length: get(totalRecipes) },
    () => 0
  );
  while (restPortions > 0) {
    portionDistribution[i % get(totalRecipes)] =
      portionDistribution[i % get(totalRecipes)] + 1;
    restPortions--;
    i++;
  }
  return portionDistribution;
}

function getTotalIngredients(recipeList: Recipe[]): Ingredient[] {
  const ingredients: Ingredient[] = [];
  recipeList.map((recipe) => {
    mergeIngredients(ingredients, recipes.calculateIngredients(recipe));
  });
  return ingredients;
}

function mergeIngredients(main: Ingredient[], added: Ingredient[]) {
  added.forEach((addedIngredient) => {
    main
      .filter(
        (ingredient) =>
          ingredient.name === addedIngredient.name &&
          ingredient.unit === addedIngredient.unit
      )
      .map((ingredient) => (ingredient.amount += addedIngredient.amount));

    if (
      !main.find(
        (ingredient) =>
          ingredient.name === addedIngredient.name &&
          ingredient.unit === addedIngredient.unit
      )
    ) {
      main.push(addedIngredient);
    }
  });
}
