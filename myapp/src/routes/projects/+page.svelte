<script>
  import TopBar from "../../components/TopBar.svelte";
  import NeonText from "../../components/NeonText.svelte";
  import ProjectCategory from "../../components/ProjectCategory.svelte";

  /*
   In SvelteKit, the data loaded in the load function is automatically passed to the Svelte component as the prop "data"
   To access the prop passed: export let data
  */

  export let data;

  console.log(JSON.stringify(data, 0, 2));

  const categories = data.categories;
  const projects = data.projectsByCategory;

  // Alternate category colours
  let currentColourIndex = 0;

  function getCategoryColour() {
    const colours = ['pink', 'blue', 'yellow'];
    const colour = colours[currentColourIndex];
    currentColourIndex = (currentColourIndex + 1) % colours.length;
    return colour;
  }

</script>

<style>

  :global(body) {
    margin: 0;
    padding: 0;
  }

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
        
    }

    

    @media screen and (min-width: 1397px) and (max-width: 1591px) {
      .content {
          width: 80%;
      }
    }

    @media screen and (min-width: 1246px) and (max-width: 1396px) {
      .content {
          width: 90%;
      }
    }

    @media screen and (min-width: 1116px) and (max-width: 1245px) {
      .content {
          width: 80%;
      }
    }

    @media screen and (min-width: 996px) and (max-width: 1115px) {
      .content {
          width: 90%;
      }
    }

    @media screen and (min-width: 0px) and (max-width: 995px) {
      .content {
          width: 90%;
      }
    }



  

  
    .subheadings {
        margin-top: 0px;
    }

    .paragraph {
        padding-bottom: 10px;
    }

    .content > * {
        width: 96%;
        margin-bottom: 4%;
        /* margin-left: 2%; */
    }

    .heading {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
    }

    .topics {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;      
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
    <div class="heading">
        <NeonText text="My Projects!" tag="h1" colour="green"/>
        Here are some of the cool things I've been up to :D
    </div>
    <div class="topics">
      {#each categories as category}
        <ProjectCategory category={category} projects={projects} colour={getCategoryColour()}/>
      {/each}
    </div>
  </div>
</div>