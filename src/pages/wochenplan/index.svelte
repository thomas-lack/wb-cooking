<script lang="ts">
  import RezeptListe from './components/RezeptListe.svelte';

  import { weeklyPlan } from '../../shared/stores/weekly-plan/weekly-plan.store';

  export const currentRoute: string = undefined;

  const totalRecipes = weeklyPlan.totalRecipes;

  const portions = weeklyPlan.portions;

  const recipesList = weeklyPlan.recipesList;

  function createNewRecipesList() {
    weeklyPlan.generate();
  }

</script>

<h1>Wochenplan</h1>

<div class="preference">
  <label for="totalRecipes">Anzahl ausgewählte Rezepte</label>
  <input type="number" name="totalRecipes" bind:value={$totalRecipes} />
</div>

<div class="preference">
  <label for="portions">Anzahl Portionen</label>
  <input type="number" name="portions" bind:value={$portions} />
</div>

<button class="submit" on:click={createNewRecipesList}
  >Neuen Wochenplan erstellen</button
>

{#if $recipesList.length > 0}
  <RezeptListe />
{/if}

<style lang="scss">
  .preference {
    input {
      width: 50px;
    }
  }

  button.submit {
    margin-top: 20px;
  }
</style>
