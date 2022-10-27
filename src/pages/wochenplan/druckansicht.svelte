<script lang="ts">
  import { weeklyPlan } from '../../shared/stores/weekly-plan/weekly-plan.store';
  import Rezept from './components/Rezept.svelte';
  import Zutaten from './components/Zutaten.svelte';

  const recipesList = weeklyPlan.recipesList;

  const totalIngredients = weeklyPlan.getTotalIngredients;
</script>

<h2>Druckansicht</h2>

<Zutaten ingredients={$totalIngredients} title="Einkaufsliste aller Zutaten"/>

<h3>Rezepte</h3>
{#each $recipesList as recipe}
  <Rezept {recipe} />
{/each}

<style lang="scss">
</style>
