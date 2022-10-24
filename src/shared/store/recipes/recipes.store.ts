import { derived, writable } from "svelte/store";
import type { Recipe } from "./recipe";

const store = writable([] as Recipe[]);

const loading = writable(false);

async function readFromJson() {
  loading.set(true);
  await fetch("recipes.json")
    .then((response) => response.json())
    .then((recipes: Recipe[]) => store.set(recipes))
    .then(() => loading.set(false))
    .catch(e => {
      console.error(e);
    });
}

export const recipes = {
  getAll: derived(store, ($recipes) => $recipes),
  loading: derived(loading, ($loading) => $loading),
  readFromJson,
};
