<script>
	import { beforeUpdate } from "svelte";
	import TopBar from "../../../components/TopBar.svelte";
  	import NeonText from "../../../components/NeonText.svelte";

	export let data;

	console.log(data);


</script>

<style>

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* if i dont want scroll bar visible
    position: fixed;
    */

    inset: 0 0 0 0;
    z-index: 0;

    padding: 0 !important;


    /* Set a transparent background */
    background-color: rgba(0, 0, 0, 0.6);


    /* Apply a blur filter to the pseudo-element */
    &::before {
      content: "";
      position: fixed;
      width: 100%;
      height: 100%;
      inset: 0 0 0 0;
      background-image: url(/assets/images/image_50379777.webp);
      background-position: center;
      background-size: cover;
      /* darken background image with blurr */
      /* filter: blur(5px) brightness(0.20); */
      filter: blur(5px) brightness(0.2);
      /* remove white border around blurred background */
      backdrop-filter: blur(0px);
    }

    /* scroll bar */
    overflow-y: scroll; /* Enable vertical scrolling */
    scroll-behavior: smooth; /* Add smooth scrolling behavior */
    overflow-x: hidden;

  }


    .container div {
        z-index: 1;
        color: white; 
        font-family: 'Helvetica', 'Arial', sans-serif;

        /* initial drop in state */
        opacity: 0;
        transform: translateY(-10px);
        animation: dropIn 1s cubic-bezier(0.645, 0.045, 0.355, 1) 0.25s forwards;
    }

    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        /* width: 93%; */
        /* to fit scroll bar into content section */
        width: 70%;
        margin-top: 130px; 

        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        letter-spacing: -0.014px;
        line-height: 30px;

		margin-bottom: 130px;
    }

	.content > * {
        width: 96%;
        margin-bottom: 4%;
        /* margin-left: 2%; */
    }

	.blogInProgress {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	 @keyframes dropIn {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }


</style>

<div class="container">
  <TopBar />
  <div class="content">
    {#if data.completed === "no"}
		<NeonText text="Blog in progress!" tag="h1" colour="red"/>
	{:else}
		<h1>{data.title}</h1>
		<p>Published: {data.date}</p>
		<!-- abritary component -->
		<svelte:component this={data.content} />
	{/if}
  </div>
</div>