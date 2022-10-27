import { derived, get, writable } from 'svelte/store';
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
  generate,
};

function generate() {
  recipesList.set(recipes.getDistinctSet(get(totalRecipes)));
  distributePortionAmounts();
}

function distributePortionAmounts() {
  // TODO
}
