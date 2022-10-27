<script lang="ts">
  import type { Recipe } from 'src/shared/stores/recipes/recipe';
  import Zutaten from './Zutaten.svelte';

  export let recipe: Recipe;
</script>

<h3>{recipe.name}</h3>
{#if recipe.image}
  <img src={recipe.image} alt="Schaubild" />
{/if}

<div class="portions">
  {#if recipe.calculatedPortions}
    {recipe.calculatedPortions}
  {:else}
    {recipe.portions}
  {/if}
  Portionen
</div>

<Zutaten ingredients={recipe.ingredients} />

<h4>Zubereitung</h4>
<ol>
  {#each recipe.preparationSteps as step}
    <li>{step}</li>
  {/each}
</ol>

<style lang="scss">
  img {
    width: 400px;
  }

  h3 {
    margin-top: 50px;
  }

  ol {
    li {
      text-align: left;
    }
  }
</style>
