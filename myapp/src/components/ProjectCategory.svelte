
<script>
  import NeonText from './NeonText.svelte';
  // retrieving props equilvalent
  // eg. This component was <ProjectCategory category={value} />
  export let category;
  export let projects;

  const categoryProjects = projects[category];



</script>

<div class="container">
    <NeonText text={category} tag={"h2"}/>
    <ul>
        {#each categoryProjects as project}
            <li>
            <a href={`./${project.slug}`}>{project.title}</a>
            </li>
        {/each}
    </ul>
</div>

