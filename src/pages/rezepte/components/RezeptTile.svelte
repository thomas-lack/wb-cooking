<script lang="ts">
  import type { Recipe } from '../../../shared/stores/recipes/recipe';

  export let recipe: Recipe;
</script>

<div class="tile">
  <a href="/rezept/{recipe.id}" alt="Detailansicht Rezept">
    <div class="image-container">
      {#if recipe.image}
        <img src={recipe.image} alt="Schaubild" />
      {:else}
        <img src="/assets/cooking_icon.svg" alt="Kein Schaubild vorhanden" />
      {/if}
    </div>
    <div class="name-container">{recipe.name}</div>
    <div class="info-container">
      {#if recipe.timeInMinutes}
        <div class="info">
          <img
            class="time"
            src="/assets/time.svg"
            alt="Zeit"
          />{recipe.timeInMinutes} Min.
        </div>
      {/if}
      {#if recipe.calories}
        <div class="info">
          <img
            class="calories"
            src="/assets/calories.svg"
            alt="Kalorien"
          />{recipe.calories} kcal
        </div>
      {/if}
      {#if recipe.glutenFree}
        <div class="info gluten-free">glutenfrei</div>
      {/if}
    </div>
  </a>
</div>

<style lang="scss">
  @import '../../../shared/scss/colors';

  .tile {
    border: 1px solid $gray-100;
    width: 250px;

    a {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;

      .image-container {
        height: 160px;
        width: 250px;
        overflow: hidden;

        img {
          max-width: 100%;
          height: auto;
          object-fit: cover;
        }
      }

      .name-container {
        color: $gray-600;
        font-weight: 600;
        padding: 10px;
        flex-grow: 2;
      }

      .info-container {
        color: $gray-600;
        padding: 0 10px 10px 10px;
        display: flex;
        justify-content: space-evenly;
        font-size: 14px;

        img {
          margin-right: 5px;
          width: auto;
          height: 17px;
          position: relative;
          top: 3px;
        }

        .gluten-free {
          padding: 0 5px;
          color: white;
          background-color: $orange-500;
        }
      }
    }
  }
</style>
