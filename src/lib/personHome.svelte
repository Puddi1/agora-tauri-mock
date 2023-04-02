<script>
  export let src = "/aaaa.png";
</script>

<div class="person-container">
  <img class="profile-image-class" {src} alt="Person Icon" />
  <span class="name-class"> Name </span>
  <div class="functionality-image-contaioner-class">
    <img
      class="functionality-image-class"
      src="/directMessagesIcon.svg"
      alt="Group Invite"
    />
    <img
      class="functionality-image-class"
      src="/directMessagesIcon.svg"
      alt="Direct Message"
    />
    <img
      class="functionality-image-class"
      src="/directMessagesIcon.svg"
      alt="Add friend icon"
    />
  </div>
</div>

<style>
  .person-container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 1rem;
    padding-left: 2rem;
    padding-right: 2rem;
  }

  .functionality-image-contaioner-class {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }

  .profile-image-class {
    width: 48px;
    height: 48px;

    border-radius: 50%;
  }
  .name-class {
    font-size: 24px;
  }
  .functionality-image-class {
    cursor: pointer;

    width: 24px;
    height: 24px;

    transition: all 0.25s;
  }
  .functionality-image-class:hover {
    transform: scale(1.1);
  }
</style>
