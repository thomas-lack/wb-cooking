import { derived, get, writable } from 'svelte/store';
import type { Recipe } from '../recipes/recipe';
import { recipes } from '../recipes/recipes.store';

const days = writable(5);

const recipesList = writable<Recipe[]>([]);

const subscribe = derived([days, recipesList], ([$days, $recipesList]) => ({
  days: $days,
  recipesList: $recipesList,
})).subscribe;

export const weeklyPlan = {
  subscribe,
  days,
  recipesList: derived(recipesList, ($recipesList) => $recipesList),
  generate,
};

function generate() {
  recipesList.set(recipes.getDistinct(get(days)));
}
