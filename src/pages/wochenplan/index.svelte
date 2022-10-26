<script lang="ts">
  import RezeptListe from './components/RezeptListe.svelte';

  import { weeklyPlan } from '../../shared/stores/weekly-plan/weekly-plan.store';

  let showRecipesList = false;

  const days = weeklyPlan.days;

  function createNewRecipesList() {
    weeklyPlan.generate();
    showRecipesList = true;
  }
</script>

<h1>Wochenplan</h1>

<div class="preference">
  <label for="days">Anzahl Tage</label>
  <input type="number" name="days" bind:value={$days} />
</div>

<button class="submit" on:click={createNewRecipesList}
  >Neuen Wochenplan erstellen</button
>

{#if showRecipesList}
  <RezeptListe />
{/if}

<style lang="scss">
  input[name='days'] {
    width: 50px;
  }

  button.submit {
    margin-top: 20px;
  }
</style>
