import { derived, get } from 'svelte/store';
import { appConfig } from './shared/stores/app-config/app-config.store';
import { recipes } from './shared/stores/recipes/recipes.store';
import './wb-cooking.css';
import App from './WbCooking.svelte';
import { reduxify } from 'svelte-reduxify';
import { weeklyPlan } from './shared/stores/weekly-plan/weekly-plan.store';

const app = new App({
  target: document.getElementById('wb-cooking'),
});

// show selected stores in redux devtools browser plugin
if (get(appConfig.devMode)) {
  reduxify(
    derived(
      [appConfig, weeklyPlan, recipes],
      ([$appConfig, $weeklyPlan, $recipes]) => ({
        appConfig: $appConfig,
        weeklyPlan: $weeklyPlan,
        recipes: $recipes,
      })
    )
  );
}

recipes
  .readFromJson()
  .then(() => {
    console.log(get(recipes.getAll));
  })
  .catch((e) => console.error(e));

export default app;
