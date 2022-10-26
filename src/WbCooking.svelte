<script lang="ts">
  import { Router } from 'svelte-router-spa';
  import routes from 'virtual:generated-pages-svelte';
</script>

<nav>
  <a href="./">Home</a>
  <a href="./rezepte">Rezepte</a>
  <a href="./wochenplan">Wochenplan</a>
</nav>

<main>
  <Router {routes} />
</main>

<style lang="scss">
  nav {
    a {
      color: #213547;
      padding: 10px;

      &:hover {
        color: white;
        background-color: #213547;
      }
    }
  }
</style>
