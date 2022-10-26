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
    .catch((e) => {
      console.error(e);
    });
}

export const recipes = {
  subscribe,
  getAll: derived(store, ($recipes) => $recipes),
  getDistinct,
  getRandom,
  loading: derived(loading, ($loading) => $loading),
  readFromJson,
};

function getDistinct(amount: number): Recipe[] {
  const result: Recipe[] = [];
  while (result.length < amount) {
    result.push(getRandom());
  }
  return result;
}

function getRandom(): Recipe {
  return get(store)[Math.floor(Math.random() * get(store).length)];
}
