
<script>
  // retrieving props equilvalent
  // eg. This component was <ProjectCategory projects={value} />
  export let projects;
</script>

<ul>
  {#each projects as project}
    <li>
      <a href={`./${project.slug}`}>{project.title}</a>
    </li>
  {/each}
</ul>