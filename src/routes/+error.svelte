<script>
  import { page } from "$app/stores";
</script>

<main id="main-error-container">
  <h1>{$page.status}</h1>
  <h3>{$page.error.message}</h3>
</main>

<style>
  #main-error-container {
    height: 100vh;
    width: calc(100vw - 4px);

    float: right;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }

  h1,
  h3 {
    margin: 0;
  }
</style>
