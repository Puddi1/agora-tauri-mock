<script>
  export let content = "Message log";
</script>

<div class="message-container">
  <span class="message-content-container">
    {content}
  </span>
</div>

<style>
  .message-container {
    width: 100%;
    height: auto;

    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .message-content-container {
    font-size: 14px;

    font-style: italic;
  }
</style>
