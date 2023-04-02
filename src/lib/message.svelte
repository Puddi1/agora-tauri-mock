<script>
  export let content =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta corporis tempore aperiam modi quis suscipit nulla nesciunt repellendus maxime, cum officiis dignissimos dolorem impedit esse incidunt neque voluptatem aspernatur qui.";
  export let src = "/aaaa.png";
</script>

<div class="message-container">
  <img class="message-profile-image" {src} alt="Profile icon" />
  <span class="message-content-container">
    {content}
  </span>
</div>

<style>
  .message-container {
    width: 100%;
    height: auto;

    display: grid;
    grid-template-columns: 24px auto;
    grid-template-rows: auto;
    justify-content: flex-start;
    align-items: start;

    gap: 0.25rem;
  }
  .message-profile-image {
    width: 24px;
    height: 24px;

    border-radius: 50%;
  }
  .message-content-container {
    font-size: 14px;
  }
</style>
