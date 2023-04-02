<script>
  import Carouselle from "$lib/carouselleHome.svelte";
  import Chat from "./chatHome.svelte";
  import Person from "$lib/personHome.svelte";
  import Message from "$lib/message.svelte";
  import ChatLog from "$lib/chatLog.svelte";
</script>

<main id="home-container">
  <div id="suggestion-container" class="animation-suggestion">
    <Carouselle title="Yearn Finance" src="/yfi.png" />
    <Carouselle title="Bitcoin Maxi" src="/schiff.jpg" />
    <Carouselle title="Bitfinex" src="/bfx.jpg" />
    <!-- <Carouselle title="4" />
    <Carouselle title="5" />
    Always double it for animation 
    <Carouselle title="1" />
    <Carouselle title="2" />
    <Carouselle title="3" />
    <Carouselle title="4" />
    <Carouselle title="5" /> -->
  </div>
  <div id="global-chat-container">
    <!-- add loading after each message to not have too many displayed and slow UI -->
    <Chat divClass="chat-home-container">
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <ChatLog />
    </Chat>
  </div>
  <div id="friends-container">
    <div id="friends-display-container">
      <Person />
      <Person />
      <Person />
      <Person />
      <Person />
      <Person />
      <Person />
      <Person />
      <Person />
      <Person />
    </div>
  </div>
</main>

<style>
  #home-container {
    height: 100vh;
    width: calc(100vw - 4px);

    float: right;

    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 30% 70%;
  }
  @media screen and (max-width: 900px) {
    #home-container {
      display: block;
    }
  }

  #suggestion-container {
    grid-column: 1 / 3;
    grid-row: 1 / 2;

    position: relative;

    width: auto;
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;
    /* margin-left: 2.5rem; */

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    overflow-x: visible;
  }
  /* @keyframes scrolling-carouselle {
    0% {
      right: 0;
    }
    100% {
      right: 50%;
    }
  }
  .animation-suggestion {
    animation: scrolling-carouselle 20s linear infinite;
  }
  .animation-suggestion:hover {
    animation-play-state: paused;
  } */
  #global-chat-container {
    grid-column: 1 / 2;
    grid-row: 2 / 3;

    display: flex;
    justify-content: center;
    align-items: center;
  }
  #friends-container {
    grid-column: 2 / 3;
    grid-row: 2 / 3;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  #friends-display-container {
    background-color: rgb(35, 0, 50);

    height: 95%;
    width: 100%;

    margin-top: 5%;
    margin-bottom: 11%;
    margin-right: 10%;
    margin-left: 10%;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    border-radius: 15px;

    overflow-x: none;
    overflow-y: auto;
  }
</style>
