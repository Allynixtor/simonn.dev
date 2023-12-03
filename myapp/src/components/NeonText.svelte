<script>
    import { beforeUpdate } from "svelte";

    export let text; 
    export let tag;
    export let colour;

    const sizes = {
        h1: 'header',
        h2: 'subheading'
    };

    const colours = {
        green: 'greenNeon',
        blue: 'blueNeon',
        pink: 'pinkNeon',
        yellow: 'yellowNeon'
    }

    let neonComponent = '';

    beforeUpdate(() => {
        neonComponent = `<${tag} class="neonText ${sizes[tag]} ${colours[colour]}">${text}</${tag}>`;
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
:global(.greenNeon) {
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

    animation: greenPulsate 2.5s infinite alternate;  
}

:global(.pinkNeon) {
    color: #fff;
  text-shadow:
    /* White inside glow */
    0 0 7px #fff,
    0 0 10px #fff,
    0 0 21px #fff,
    /* Magenta/pink outside glow */
    0 0 42px #ff00ff,
    0 0 82px #ff00ff,
    0 0 92px #ff00ff,
    0 0 102px #ff00ff,
    0 0 151px #ff00ff;

    animation: pinkPulsate 2.5s infinite alternate;  
}

:global(.blueNeon) {
  color: #fff;
  text-shadow:
    /* White inside glow */
    0 0 7px #fff,
    0 0 10px #fff,
    0 0 21px #fff,
    /* Blue outside glow */
    0 0 42px #00f,
    0 0 82px #00f,
    0 0 92px #00f,
    0 0 102px #00f,
    0 0 151px #00f;

    animation: bluePulsate 2.5s infinite alternate;  
}

:global(.yellowNeon) {
  color: #fff;
  text-shadow:
    /* White inside glow */
    0 0 7px #fff,
    0 0 10px #fff,
    0 0 21px #fff,
    /* Yellow outside glow */
    0 0 42px #ff0,
    0 0 82px #ff0,
    0 0 92px #ff0,
    0 0 102px #ff0,
    0 0 151px #ff0;

    animation: yellowPulsate 2.5s infinite alternate;  
}

:global(.neonText) {
    text-transform: uppercase;
    font-weight: 400;
    margin: 0px;
}

:global(.header) {
    font-size: 4.2em;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 40px;
    font-family: 'megrimmedium', "Vibur", sans-serif;
    
}

:global(.subheading) {
    font-size: 2em;
    font-family: "Helvetica Neue", sans-serif;
}


  
@keyframes greenPulsate {
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

@keyframes pinkPulsate {
  100% {
    /* Larger blur radius */
    text-shadow:
      /* White inside glow */
      0 0 4px #fff,
      0 0 11px #fff,
      0 0 19px #fff,
      /* Magenta/pink outside glow */
      0 0 40px #ff00ff,
      0 0 80px #ff00ff,
      0 0 90px #ff00ff,
      0 0 100px #ff00ff,
      0 0 150px #ff00ff;
  }
  0% {
    /* Smaller blur radius */
    text-shadow:
      /* White inside glow */
      0 0 2px #fff,
      0 0 4px #fff,
      0 0 6px #fff,
      /* Magenta/pink outside glow */
      0 0 10px #ff00ff,
      0 0 45px #ff00ff,
      0 0 55px #ff00ff,
      0 0 70px #ff00ff,
      0 0 80px #ff00ff;
  }
}

@keyframes bluePulsate {
  100% {
    /* Larger blur radius */
    text-shadow:
      /* White inside glow */
      0 0 4px #fff,
      0 0 11px #fff,
      0 0 19px #fff,
      /* Blue outside glow */
      0 0 40px #00f,
      0 0 80px #00f,
      0 0 90px #00f,
      0 0 100px #00f,
      0 0 150px #00f;
  }
  0% {
    /* Smaller blur radius */
    text-shadow:
      /* White inside glow */
      0 0 2px #fff,
      0 0 4px #fff,
      0 0 6px #fff,
      /* Blue outside glow */
      0 0 10px #00f,
      0 0 45px #00f,
      0 0 55px #00f,
      0 0 70px #00f,
      0 0 80px #00f;
  }
}

@keyframes yellowPulsate {
  100% {
    /* Larger blur radius */
    text-shadow:
      /* White inside glow */
      0 0 4px #fff,
      0 0 11px #fff,
      0 0 19px #fff,
      /* Yellow outside glow */
      0 0 40px #ff0,
      0 0 80px #ff0,
      0 0 90px #ff0,
      0 0 100px #ff0,
      0 0 150px #ff0;
  }
  0% {
    /* Smaller blur radius */
    text-shadow:
      /* White inside glow */
      0 0 2px #fff,
      0 0 4px #fff,
      0 0 6px #fff,
      /* Yellow outside glow */
      0 0 10px #ff0,
      0 0 45px #ff0,
      0 0 55px #ff0,
      0 0 70px #ff0,
      0 0 80px #ff0;
  }
}



</style>


<div class="container">
    {@html neonComponent}
 </div>
