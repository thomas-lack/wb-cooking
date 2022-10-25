<script lang="ts">
  import type { Recipe } from '../shared/store/recipes/recipe'
  import { recipes } from '../shared/store/recipes/recipes.store'

  let recipesList: Recipe[] = []

  const getAll = recipes.getAll

  $: recipesList = $getAll
</script>

<h2>Rezepte:</h2>

<ul>
  {#each recipesList as recipe}
    <li>{recipe.name}</li>
  {/each}
</ul>

<style lang="scss">
</style>
