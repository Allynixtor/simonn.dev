<script>
    import { beforeUpdate } from "svelte";

    export let text; 
    export let tag;

    const sizes = {
        h1: 'header',
        h2: 'subheading'
    };

    let neonComponent = '';

    beforeUpdate(() => {
        neonComponent = `<${tag} class="neonText ${sizes[tag]}">${text}</${tag}>`;
    });




</script>

<style>

@font-face {
    font-family: 'megrimmedium';
    src: url('/assets/fonts/megrim/megrim-regular-webfont.woff2') format('woff2'),
         url('/assets/fonts/megrim/megrim-regular-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;

}
:global(.neonText) {
  color: #fff;
  text-shadow:
    /* White glow */
    0 0 7px #fff,
    0 0 10px #fff,
    0 0 21px #fff,
    /* Green glow */
    0 0 42px #0fa,
    0 0 82px #0fa,
    0 0 92px #0fa,
    0 0 102px #0fa,
    0 0 151px #0fa;

    text-align: center;
    text-transform: uppercase;
    font-weight: 400;
    font-family: 'megrimmedium', "Vibur", sans-serif;
    animation: pulsate 2.5s infinite alternate;  

    margin: 10px 0 20px 0;
}

:global(.header) {
    font-size: 4.2em;
}

:global(.subheader) {
    font-size: 3em;
}


  
@keyframes pulsate {
  100% {
    /* Larger blur radius */
    text-shadow:
      0 0 4px #fff,
      0 0 11px #fff,
      0 0 19px #fff,
      0 0 40px #0fa,
      0 0 80px #0fa,
      0 0 90px #0fa,
      0 0 100px #0fa,
      0 0 150px #0fa;
  }
  0% {
    /* Smaller blur radius */
    text-shadow:
      0 0 2px #fff,
      0 0 4px #fff,
      0 0 6px #fff,
      0 0 10px #0fa,
      0 0 45px #0fa,
      0 0 55px #0fa,
      0 0 70px #0fa,
      0 0 80px #0fa;
  }
}



</style>


<div class="container">
    {@html neonComponent}
 </div>
