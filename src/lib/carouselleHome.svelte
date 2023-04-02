<script>
  export let src = "/aaaa.png";
  export let alt = "Carouselle";
  export let href = "/";
  export let title = "title";
</script>

<div class="carouselle-container">
  <img class="carouselle-image-class" {src} {alt} />
  <div class="carouselle-image-cover-container" />
  <a class="carouselle-title-class" {href}>{title}</a>
</div>

<style>
  .carouselle-container {
    position: relative;

    min-width: 250px;
    min-height: 150px;
    max-width: 250px;
    max-height: 150px;

    border-radius: 25px;

    background: gray;

    cursor: pointer;

    transition: all 0.25s;
  }
  .carouselle-image-class {
    height: 150px;
    width: 250px;

    border-radius: 25px;

    transition: all 0.25s;
  }
  .carouselle-image-cover-container {
    position: absolute;

    left: 0;
    top: 0;

    height: 100%;
    width: 100%;

    border-radius: 24px;

    background-image: linear-gradient(
      rgba(0, 0, 0, 0) 0%,
      rgba(30, 0, 50, 1) 100%
    );

    transition: all 0.25s;
  }
  .carouselle-title-class {
    position: absolute;

    left: 10%;
    bottom: 7.5%;

    color: white;

    text-decoration: none;
  }

  .carouselle-container:hover {
    border-radius: 5px;
  }
  .carouselle-container:hover > .carouselle-image-cover-container {
    border-radius: 4px;
  }
  .carouselle-container:hover > .carouselle-image-class {
    border-radius: 5px;
  }
</style>
