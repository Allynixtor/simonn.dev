<style>

    .container {
        display: flex;
        align-items: center;
        justify-content: center;
        
        flex-wrap: wrap;

        flex-grow: 2;
        font-family: 'roboto_monoregular', monospace;

        /* background-color: rgb(198,203,207); */
    }

    


    h1 {
            user-select: none;
        
            font-weight: bold;
            line-height: 1.3em;

            font-size: clamp(1em, 3.5vw, 2.8em);

            display: flex;
            align-items: center;
            justify-content: center;
            
            flex-wrap: wrap; 

            color: white; 

            /* Add this style to center the text */
            text-align: center;
            overflow: hidden; /* This is important to clip the text as it expands */
   


    }


    .blueFont, .yellowFont {
        background-size: 100%;
        background-clip: text;
        -webkit-background-clip: text;
        -moz-background-clip: text;
        -webkit-text-fill-color: transparent; 
        -moz-text-fill-color: transparent;
    }

    .blueFont {
        background-image: linear-gradient(rgb(255, 28, 247) 25%, #682AE9 100%);
    }

    .yellowFont {
        background-image: linear-gradient(#F8EF42 25%, #ebe33c 100%);
    }

    .hiya, .name, .novice, .enthusiast {
        white-space: nowrap;
        position: relative;
        overflow: hidden;
    }

    .hiya::before, .name::before, .novice::before, .enthusiast::before,
    .hiya::after, .name::after, .novice::after, .enthusiast::after{
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }

    /*
:: before inserts content before the actual element
animation: animation_name duration timing delay iteration_count
note: remove duration = next delay
*/

/* originaly 2.5s delay */

.hiya::before {
  background-color: transparent; /* Set background color to transparent */
  animation: cursor 2.16s steps(18) 1s forwards;
}

.hiya {
    width: 0%;
    animation: visible 2.16s steps(18) 1s forwards;
}

.hiya::after {
  width: 0.6em;
  background: black;
  visibility: hidden;
  animation: cursor 2.16s steps(18) 1s forwards, blink 1s linear infinite, remove 3.2s step-end forwards, hidden 0s linear 1.5s forwards;
}

/* originaly 4.66s delay */
.name::before {
  background-color: transparent; /* Set background color to transparent */
  animation: cursor 0.84s steps(7) 3s forwards;
}

.name {
    width: 0%;
    animation: visible 0.84s steps(7) 3s forwards;
}

.name::after {
  width: 0.6em;
  background: black;
  visibility: hidden;
  animation: cursor 0.84s steps(7) 3s forwards, blink 1s linear infinite, remove 4.5s step-end forwards, hidden 0s linear 4.66s forwards;
}

/* originaly 6.5s delay */
.novice::before {
  background-color: transparent; /* Set background color to transparent */
  animation: cursor 2.04s steps(17) 4.5s forwards;
}

.novice {
    width: 0%;
    animation: visible 2.04s steps(17) 4.5s forwards;
}

.novice::after {
  width: 0.6em;
  background: black;
  visibility: hidden;
  animation: cursor 2.04s steps(17) 4.5s forwards, blink 1s linear infinite, remove 6s step-end forwards, hidden 0s linear 6.5s forwards;
}

/* originaly 8.54s delay */
.enthusiast::before {
  background-color: transparent; /* Set background color to transparent */
  animation: cursor 1.08s steps(9) 6s forwards;
}

.enthusiast {
    width: 0%;
    animation: visible 1.08s steps(9) 6s forwards;
}

.enthusiast::after {
  width: 0.6em;
  background: black;
  visibility: hidden;
  animation: cursor 1.08s steps(9) 6s forwards, blink 1s linear infinite, remove 10.5s step-end forwards, hidden 0s linear 8.54s forwards;
}

@keyframes cursor {
  to {
    left: 100%;
  }
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}

/* TODO: Typerwriter effect
@keyframes remove {
  to {
    opacity: 0;
  }
}

@keyframes hidden {
  to {
    visibility: inherit;
  }
}
*/

@keyframes visible {

  from {
    width: 0%;
  }
  to {
    width: 100%;
    transform-origin: left; /* Set the transform origin to the left edge */
    transform: translateX(0); /* Ensure no horizontal translation */
  }
}

</style>

<!--
typewriter-effect
https://css-tricks.com/snippets/css/typewriter-effect/
-->



<div class="container">
      <h1>
        <span class="hiya">Hiya! My name is&nbsp;</span><span class="name"><span class="blueFont">Simon Nguyen</span></span>
      </h1>
      <h1>
        <span class="novice">I'm a novice&nbsp;</span> <span class="enthusiast"> <span class="yellowFont">security enthusiast</span></span>
      </h1>
</div>

