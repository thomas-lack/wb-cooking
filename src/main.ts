import { get } from 'svelte/store';
import { recipes } from './shared/store/recipes/recipes.store';
import './wb-cooking.css';
import App from './WbCooking.svelte';

const app = new App({
  target: document.getElementById('wb-cooking')
});

await recipes.readFromJson();

console.log(get(recipes.getAll));

export default app;
