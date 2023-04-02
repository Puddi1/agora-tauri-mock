<script>
  import { goto } from "$app/navigation";

  export let divId = "";
  export let buttonPathOnNonce; // form: /routeFromSrc
  export let buttonClass;
  export let imageClass;

  export let src;
  export let alt = "Component Description";

  // Handle clicks path
  function clickPath(e) {
    let path = e.composedPath();
    for (let i in path) {
      if (path[i].nodeName == "BUTTON") {
        goto(path[i].nonce);
      }
    }
  }
</script>

<div id={divId}>
  <button nonce={buttonPathOnNonce} class={buttonClass} on:click={clickPath}>
    <img class={imageClass} {src} {alt} />
  </button>
</div>

<style>
  #discover-container {
    display: flex;
    justify-content: center;
    align-items: center;

    padding-top: 0.25rem;
  }
  #settings-container {
    display: flex;
    justify-content: center;
    align-items: center;

    padding-bottom: 0.25rem;
  }

  .button-header {
    background: rgba(110, 59, 198, 0.7);

    border: none;

    border-radius: 50%;

    /* height: 35px; */
    /* width: 35px; */
    height: 48px;
    width: 48px;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: all 0.25s;

    padding: 0;
  }
  .button-header:hover {
    border-radius: 30%;

    background-color: rgba(110, 59, 198, 1);
  }
  .button-image {
    padding: 0px;

    color: white;

    height: clamp(18px, 50%, 24px);
    width: clamp(18px, 50%, 24px);
  }
</style>
