<script>
  import { onMount } from "svelte";

  // Commponents
  import ButtonHeader from "$lib/buttonHeader.svelte";
  class buttonHeaderComposer {
    constructor(divId, buttonPathOnNonce, buttonClass, imageClass, src, alt) {
      this.divId = divId;
      this.buttonPathOnNonce = buttonPathOnNonce;
      this.buttonClass = buttonClass;
      this.imageClass = imageClass;
      this.src = src;
      this.alt = alt;
    }
  }
  let homeButton = new buttonHeaderComposer(
    "discover-container",
    "/",
    "button-header",
    "button-image",
    "/faviconTakeThreeFullWhiteBig.svg",
    "Button Home"
  );
  let directMessagesButton = new buttonHeaderComposer(
    "",
    "/me",
    "button-header",
    "button-image",
    "/directMessagesIcon.svg",
    "Button Direct Messages"
  );
  let groupMessagesButton = new buttonHeaderComposer(
    "",
    "/",
    "button-header",
    "button-image",
    "/groupIcon.svg",
    "Button Group Messages"
  );
  let settingsButton = new buttonHeaderComposer(
    "settings-container",
    "/settings",
    "button-header",
    "button-image",
    "/settingsIcon.svg",
    "Settings Button Message"
  );

  let header;
  onMount(() => {
    // Mousemove
    window.addEventListener("mousemove", (e) => {
      let isHeader = false;
      for (let i of e.composedPath()) {
        if (i == header) isHeader = true;
      }

      /**
       * Header transform logic
       * For non phone users menu moves based on mouse near the menu
       * For phone users on left swing can't on pc -> how?? menu icon? touch near works
       */
      if (e.x < 5) {
        header.style.transform = "translateX(0px)";
      } else if (e.x > 5 && !isHeader) {
        header.style.transform = "translateX(-65px)";
      }
    });
  });
</script>

<header class="layout-header" id="layout-header-id" bind:this={header}>
  <ButtonHeader {...homeButton} />

  <div class="header-decoration-gap-container">
    <img
      class="decoration-gap"
      src="/greekDecorationTestSmallLegs.svg"
      alt=""
    />
  </div>

  <div id="header-dm-group-container">
    <div id="dm-container">
      <ButtonHeader {...directMessagesButton} />
    </div>

    <div class="header-decoration-gap-container">
      <img
        class="decoration-gap"
        src="/greekDecorationTestSmallLegs.svg"
        alt=""
      />
    </div>

    <div id="group-container">
      <ButtonHeader {...groupMessagesButton} />
    </div>
  </div>

  <div class="header-decoration-gap-container">
    <img
      class="decoration-gap"
      src="/greekDecorationTestSmallLegs.svg"
      alt=""
    />
  </div>

  <ButtonHeader {...settingsButton} />
</header>
<slot />

<style>
  /* Root constants */
  :root {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;

    color-scheme: light dark;
    color: rgba(255, 255, 255, 1);
    background-color: #242424;

    --background-color-dapp: rgb(35, 35, 35);

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }
  @media (prefers-color-scheme: light) {
    :root {
      color: #213547;
      background-color: #ffffff;

      --background-color-dapp: rgb(224, 216, 255);
    }
  }

  /* Gllobals */
  :global(body) {
    background-color: var(--background-color-dapp);

    width: 100vw;
    height: 100%;

    /* overflow: hidden; */
    /* -ms-overflow-style: none;
    scrollbar-width: none; */

    margin: 0;

    /* display: flex; */
  }
  /* :global(html::-webkit-scrollbar) {
    display: none;
  } */
  :global(button) {
    cursor: pointer;
  }

  /* Left bar tools container */
  .layout-header {
    left: 0;
    margin-right: 0;

    height: 100%;
    width: 65px;

    z-index: 999;
    position: fixed;

    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 8% 40px calc(84% - 80px) 40px 8%;

    /* background-image: linear-gradient(rgb(18, 0, 57), rgb(35, 35, 35)); */
    background-color: rgb(30, 0, 50);

    border-right: 4px solid rgba(0, 0, 0, 0.25);

    transition: all 0.125s;
  }
  /* Decoration gaps */
  .header-decoration-gap-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .decoration-gap {
    width: 100%;
    padding: 0;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
  /* Elements containers */
  #header-dm-group-container {
    display: grid;
    flex-direction: column;
    grid-template-columns: auto;
    grid-template-rows:
      fit-content(calc(31% - 20px))
      40px
      fit-content(calc(69% - 20px));
  }

  /* Components container */
  #dm-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 0.5rem;

    overflow: auto;
  }
  #group-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 0.5rem;

    overflow: auto;
  }
</style>
