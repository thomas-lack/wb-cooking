<script lang="ts">
  import type { Ingredient } from '../../../shared/stores/recipes/ingredient';

  export let ingredients: Ingredient[];

  export let title = 'Zutaten';
</script>

<h4>{title}</h4>
<ul>
  {#each ingredients as ingredient}
    <li>
      {#if ingredient.amount}{ingredient.amount}{/if}
      {#if ingredient.unit}{ingredient.unit}{/if}
      {ingredient.name}
    </li>
  {/each}
</ul>

<style lang="scss">
</style>
