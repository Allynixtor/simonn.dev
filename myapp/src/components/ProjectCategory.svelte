
<script>
  // retrieving props equilvalent
  // eg. This component was <ProjectCategory category={value} />
  export let category;
  export let projects;

  const categoryProjects = projects[category];



</script>

<div class="container">
    <h1> {category} </h1>
    <ul>
        {#each categoryProjects as project}
            <li>
            <a href={`./${project.slug}`}>{project.title}</a>
            </li>
        {/each}
    </ul>
</div>

