
<script>
  import NeonText from './NeonText.svelte';
  import ProjectCard from './ProjectCard.svelte';
  import { beforeUpdate } from "svelte";
  // retrieving props equilvalent
  // eg. This component was <ProjectCategory category={value} />
  export let category;
  export let projects;
  export let colour;

  let isFlexStart = 0;

  beforeUpdate(() => {
    let numBlogs = Object.keys(projects[category]).length;
    isFlexStart = numBlogs < 3 ? 1 : 0;
  })

  

  const categoryProjects = projects[category];
</script>

<style>
.container {
    width: 100%;
    margin-bottom: 4%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.projectCards {

    
    display: flex;
    flex-wrap: wrap;
    /* justify-content: space-between; */
    align-items: stretch;
    column-gap: 20px;
    row-gap: 60px;
    margin-top: 40px;
    width: 100%;

    

    /* grid alternative? */
}

<!-- 
Different layouts to display blog cards nicely
depending on number of blogs avaliable in a specific category
-->

.justifyProjectCardsSpaceBetween {
    justify-content: space-between;
}

.justifyProjectCardsFlexStart {
    justify-content: flexStart;
}

</style>





<div class="container">
    <NeonText text={category} tag={"h2"} colour={colour}/>
    {#if isFlexStart === 1}
        <div class="projectCards justifyProjectCardsFlexStart">
            {#each categoryProjects as project}
                <ProjectCard categoryColour={colour} projectData={project}/>
            {/each}
        </div>
    {:else}
        <div class="projectCards justifyProjectCardsSpaceBetween">
        {#each categoryProjects as project}
            <ProjectCard categoryColour={colour} projectData={project}/>
        {/each}
    </div>
    {/if}
</div>

