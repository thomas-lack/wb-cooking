<script lang="ts">
  import RezeptListe from './components/RezeptListe.svelte';

  import { weeklyPlan } from '../../shared/stores/weekly-plan/weekly-plan.store';
  import { navigateTo } from 'svelte-router-spa';

  export const currentRoute: string = undefined;

  const totalRecipes = weeklyPlan.totalRecipes;

  const portions = weeklyPlan.portions;

  const recipesList = weeklyPlan.recipesList;

  function createNewRecipesList() {
    weeklyPlan.generate();
  }

  function createPrintView() {
    navigateTo('./wochenplan/druckansicht');
  }
</script>

<h1>Wochenplan</h1>

<div class="preference">
  <label for="totalRecipes">Anzahl ausgewählte Rezepte</label>
  <input type="number" name="totalRecipes" min="1" bind:value={$totalRecipes} />
</div>

<div class="preference">
  <label for="portions">Anzahl Portionen</label>
  <input
    type="number"
    name="portions"
    min={$totalRecipes}
    bind:value={$portions}
  />
</div>

<button class="submit" on:click={createNewRecipesList}
  >Neuen Wochenplan erstellen</button
>

{#if $recipesList.length > 0}
  <RezeptListe />

  <button class="submit" on:click={createPrintView}
    >Druckansicht erstellen</button
  >
{/if}

<style lang="scss">
  .preference {
    input {
      width: 30px;
    }
  }

  button.submit {
    margin-top: 20px;
  }
</style>
