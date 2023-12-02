<!-- project category component -->
<!-- rendering list of projects within specific category -->
<script>
    import ProjectCategory from '../../components/ProjectCategory';

    export let category;
    export let projects;

</script>



<h1>{category}</h1>
<ProjectCategory projects={projects}/>