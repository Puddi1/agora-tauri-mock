<script>
  import { onMount } from "svelte";
  import { connectToSwarm } from "./+page.mjs";

  export let divClass = "";

  let isMounted;

  let chatLog;
  let streamlineTopic;

  let greetMsg;

  async function requestConnectToSwarm() {
    if (isMounted) {
      console.log("started");
      greetMsg = await connectToSwarm(streamlineTopic.value);
      chatLog.innerHTML += greetMsg;
    }
  }

  onMount(() => {
    // Scroll the chat all the way down
    chatLog.scroll({
      top: chatLog.scrollWidth,
      behavior: "smooth",
    });

    isMounted = true;
  });
</script>

<div class={divClass}>
  <div class="streamline-container-class">
    <input
      class="streamline-input-class"
      type="search"
      name="streamlineTopic"
      bind:this={streamlineTopic}
    />
    <button class="streamline-button-class" on:click={requestConnectToSwarm}
      >connect</button
    >
  </div>
  <div class="log-class" bind:this={chatLog}>
    <slot />
  </div>
  <div class="action-container-class">
    <img class="action-image-class" src="/uploadArrow.svg" alt="Upload arrow" />
    <input class="action-input-class" name="actionTextInput" type="text" />
    <img class="action-image-class" src="/sendArrow.svg" alt="Send message" />
  </div>
</div>

<style>
  .chat-home-container {
    background-color: rgb(35, 0, 50);

    height: 95%;
    width: 100%;

    margin-top: 5%;
    margin-bottom: 11%;
    margin-right: 10%;
    margin-left: 10%;

    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 7% 85% auto;

    border-radius: 15px;
  }

  .streamline-container-class {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
  }
  .log-class {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 0.35rem;

    padding-left: 1rem;
    padding-right: 1rem;
    padding-bottom: 0.5rem;
    /* margin-left: 1rem;
    margin-right: 1rem;
    margin-bottom: 0.5rem; */

    overflow: scroll;
  }
  .action-container-class {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.3rem;

    position: relative;

    border-top: 2px solid white;
  }

  .streamline-input-class {
    width: 40%;
    height: 50%;

    background: rgb(30, 0, 50);

    border: 1px solid white;
  }
  .streamline-input-class:focus {
    outline: none;
  }
  .streamline-button-class {
    background: rgb(30, 0, 50);

    border-color: transparent;

    transition: all 0.25s;
  }
  .streamline-button-class:hover {
    border-color: white;
  }

  .action-image-class {
    color: white;

    cursor: pointer;

    transition: all 0.25s;
  }
  .action-image-class:hover {
    transform: scale(1.15);
  }
  .action-input-class {
    width: 65%;
    height: 50%;

    background: rgb(30, 0, 50);

    border: 2px solid white;
  }
  .action-input-class:focus {
    outline: none;
  }
</style>
