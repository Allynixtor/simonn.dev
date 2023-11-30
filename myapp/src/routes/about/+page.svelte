<script>
  import TopBar from "../../components/TopBar.svelte";
</script>

<style>

  #container {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    inset: 0 0 0 0;

    /* Set a transparent background */
    background-color: rgba(255, 255, 255, 0);

    /* remove white border around blurred background */
    margin: -10px;

    /* Apply a blur filter to the pseudo-element */
    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: url(/assets/images/image_50379777.webp);
      background-position: center;
      background-size: cover;
      filter: blur(5px);
      z-index: -1;
    }
  }
</style>

<div id="container">
  <TopBar />
  
</div>