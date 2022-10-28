<script lang="ts">
  import type { Recipe } from '../../shared/stores/recipes/recipe';
  import { recipes } from '../../shared/stores/recipes/recipes.store';
  import RezeptTile from './components/RezeptTile.svelte';

  let recipesList: Recipe[] = [];

  const getAll = recipes.getAll;

  $: recipesList = $getAll;
</script>

<h2>Rezepte:</h2>

<div class="pane">
  {#each recipesList as recipe}
    <RezeptTile {recipe} />
  {/each}
</div>

<style lang="scss">
  .pane {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: 50px;
    margin-top: 27px;
  }
</style>
