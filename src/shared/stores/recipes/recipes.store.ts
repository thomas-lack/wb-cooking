import { derived, get, writable } from 'svelte/store';
import type { Recipe } from './recipe';

const store = writable([] as Recipe[]);

const loading = writable(false);

const subscribe = derived([store, loading], ([$store, $loading]) => ({
  store: $store,
  loading: $loading,
})).subscribe;

async function readFromJson() {
  loading.set(true);
  await fetch('recipes.json')
    .then((response) => response.json())
    .then((recipes: Recipe[]) => store.set(recipes))
    .then(() => loading.set(false))
    .catch((e: Error) => {
      console.error(e.message);
    });
}

export const recipes = {
  subscribe,
  getAll: derived(store, ($recipes) => $recipes),
  getDistinctSet,
  getRandom,
  loading: derived(loading, ($loading) => $loading),
  readFromJson,
};

function getDistinctSet(amount: number): Recipe[] {
  const result: Recipe[] = [];
  const totalAvailable = get(store).length;
  while (result.length < amount) {
    if (result.length < totalAvailable) {
      result.push(getDistinct(get(store), result));
    }
    if (result.length >= totalAvailable) {
      result.push(getRandom(get(store)));
    }
  }
  return result;
}

function getRandom(recipes: Recipe[]): Recipe {
  if (recipes == null) {
    recipes = get(store);
  }
  return recipes[Math.floor(Math.random() * recipes.length)];
}

function getDistinct(recipes: Recipe[], alreadySelected: Recipe[]): Recipe {
  if (recipes == null) {
    recipes = get(store);
  }
  return getRandom(recipes.filter(r => !alreadySelected.includes(r)));
}
