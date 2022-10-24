import { get } from 'svelte/store';
import { recipes } from './shared/store/recipes/recipes.store';
import './wb-cooking.css';
import App from './WbCooking.svelte';

const app = new App({
  target: document.getElementById('wb-cooking'),
});

recipes
  .readFromJson()
  .then(() => {
    console.log(get(recipes.getAll));
  })
  .catch((e) => console.error(e));

export default app;
