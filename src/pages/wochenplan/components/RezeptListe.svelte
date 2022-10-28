<script lang="ts">
  import type { Recipe } from '../../../shared/stores/recipes/recipe';
  import { weeklyPlan } from '../../../shared/stores/weekly-plan/weekly-plan.store';

  const recipesList = weeklyPlan.recipesList;

  function modifyRecipePortions(event: Event, recipe: Recipe) {
    weeklyPlan.modifyRecipePortions(
      recipe,
      Number.parseInt(event?.target['value'])
    );
  }
</script>

<h2>Ausgewählte Rezepte</h2>

{#each $recipesList as recipe, i}
  <div class="recipe">
    <div class="recipe-index">Rezept Nr. {i + 1}</div>
    <div class="name">{recipe.name}</div>

    <div class="modifyPortions">
      <label for="userSelectedPortions">Anzahl Portionen</label>
      <input
        type="number"
        name="userSelectedPortions"
        min="0"
        value={recipe.userSelectedPortions}
        on:input={(e) => modifyRecipePortions(e, recipe)}
      />
    </div>
  </div>
{/each}

<style lang="scss">
  .recipe {
    margin-top: 10px;
  }

  .modifyPortions {
    input {
      width: 25px;
    }
  }
</style>
