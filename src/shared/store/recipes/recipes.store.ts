import { derived, writable } from 'svelte/store'
import type { Recipe } from './recipe'

const store = writable([] as Recipe[])

async function readFromJson() {
  await fetch('recipes.json')
    .then(response => response.json())
    .then((recipes: Recipe[]) => store.set(recipes))
}

export const recipes = {
  getAll: derived(store, recipes$ => recipes$),
  readFromJson
}
