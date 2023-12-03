
<script>
  import NeonText from './NeonText.svelte';
  import ProjectCard from './ProjectCard.svelte';
  // retrieving props equilvalent
  // eg. This component was <ProjectCategory category={value} />
  export let category;
  export let projects;
  export let colour;

  const categoryProjects = projects[category];
</script>

<style>
.container {
    width: 96%;
    margin-bottom: 4%;
    margin-left: 2%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.projectCards {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    column-gap: 20px;
    margin-top: 25px;
}

</style>





<div class="container">
    <NeonText text={category} tag={"h2"} colour={colour}/>
    <div class="projectCards">
        {#each categoryProjects as project}
            <ProjectCard categoryColour={colour} projectData={project}/>
        {/each}
    </div>
    <ul>
        {#each categoryProjects as project}
            <li>
            <a href={`./${project.slug}`}>{project.title}</a>
            </li>
        {/each}
    </ul>
</div>

