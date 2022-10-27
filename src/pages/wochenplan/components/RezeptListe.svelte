<script lang="ts">
  import { weeklyPlan } from "../../../shared/stores/weekly-plan/weekly-plan.store";

  const recipesList = weeklyPlan.recipesList;
</script>

<h2>Ausgewählte Rezepte</h2>

{#each $recipesList as recipe, i}
  <div class="recipe">
    <div class="recipe-index">Rezept Nr. {i + 1}</div>
    <div class="name">{recipe.name}</div>
  </div>
{/each}

<style lang="scss">
  .recipe {
    margin-top: 10px;
  }
</style>
