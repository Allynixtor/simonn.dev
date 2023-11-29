<!--
    .nameBox {
        display: flex;
        align-items: center;
        justify-content: center;

        flex-grow: 2;
    }

-->

<!--
    h1 {
        user-select: none;
    
        font-weight: bold;
        line-height: 1em;

        font-size: clamp(1em, 3.5vw, 2.8em);
        filter: invert(1);
        opacity: 0.9;
        

    }

-->



</style>


<div id="container">
    <div class="content contentCover">
        <section class="nameBox">
            <h1>Hiya, my name is Simon!</h1>
        </section>
        <section>
            <div class="profilePic" use:setProfileImage/>
        </section>
    </div>
</div>

.hiya::before, .name::before, .novice::before, .enthusiast::before,
    .hiya::after, .name::after, .novice::after, .enthusiast::after{
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }

    .hiya::before {
        background-color: rgb(249,250,251);
        animation: cursor 2.16s steps(18) 2.5s forwards; 
    }

    .hiya::after {
        width: 0.6em;
        background: black;
        visibility: hidden;
        animation: 
            cursor 2.16s steps(18) 2.5s forwards, 
            blink 1s linear infinite,
            remove 4.66s step-end forwards,
            hidden 0s linear 1.5s forwards;
    }

    .name::before {
        background-color: rgb(249,250,251);
        animation: cursor 0.84s steps(7) 4.66s forwards; 
    }

    .name::after {
        width: 0.6em;
        background: black;
        visibility: hidden;
        animation: 
            cursor 0.84s steps(7) 4.66s forwards, 
            blink 1s linear infinite,
            remove 6.5s step-end forwards,
            hidden 0s linear 4.66s forwards;
    }

    .novice::before {
        background-color: rgb(249,250,251);
        animation: cursor 2.04s steps(17) 6.5s forwards; 
    }

    .novice::after {
        width: 0.6em;
        background: black;
        visibility: hidden;
        animation: 
            cursor 2.04s steps(17) 6.5s forwards, 
            blink 1s linear infinite,
            remove 8.54s step-end forwards,
            hidden 0s linear 6.5s forwards;
    }

    .enthusiast::before {
        background-color: rgb(249,250,251);
        animation: cursor 1.08s steps(9) 8.54s forwards; 
    }

    .enthusiast::after {
        width: 0.6em;
        background: black;
        visibility: hidden;
        animation: 
            cursor 1.08s steps(9) 8.54s forwards, 
            blink 1s linear infinite,
            remove 10.5s step-end forwards,
            hidden 0s linear 8.54s forwards;
    }

    @keyframes cursor {
        to {left: 100%}
    }
    @keyframes blink {
    50% {
        opacity: 0;
    }
    }

    @keyframes remove {
    to {
        opacity: 0;
    }
    }
    @keyframes hidden {
        to {visibility: inherit;}
    } 


   .container {
        display: flex;
        align-items: center;
        justify-content: center;

        flex-grow: 2;

    }


    h1 {
            user-select: none;
        
            font-weight: bold;
            line-height: 1em;

            font-size: clamp(1em, 3.5vw, 2.8em);
            opacity: 0.9;

            margin: 0 auto;
            white-space: nowrap;
            overflow: hidden;
            animation: typing 4s steps(22,end) forwards,
            blink 1s infinite alternate;
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
    }


    @keyframes typing {
        0%{width: 0;}
        100%{width: 100%}
    }

    @keyframes blink {
        0%, 100% {
            border-right: 2px solid transparent;
        }

        50% {
            border-right: 2px solid white;
        }
    }


    =======

    <style>

    .container {
        display: flex;
        align-items: center;
        justify-content: center;

        flex-grow: 2;

    }

    


    h1 {
            user-select: none;
        
            font-weight: bold;
            line-height: 1em;

            font-size: clamp(1em, 3.5vw, 2.8em);
            opacity: 0.9;
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
    }

    .hiya {
        margin: 0 auto;
        overflow: hidden;
        animation: typing 2.16s steps(18) 2.5s forwards,
        blink 1s infinite alternate;
    }
    
    .name {
        margin: 0 auto;
        overflow: hidden;
        animation: typing 0.84s steps(18) 4.66s forwards,
        blink 1s infinite alternate;
    }

    .novice {
        margin: 0 auto;
        overflow: hidden;
        animation: typing 2.04s steps(17) 6.5s forwards, 
        blink 1s infinite alternate;
    }


    .enthusiast {
        margin: 0 auto;
        overflow: hidden;
        animation: typing 1.08s steps(9) 8.54s forwards, 
        blink 1s infinite alternate;
     }


    @keyframes typing {
        0%{width: 0;}
        100%{width: 100%;}
    }

    @keyframes blink {
        0%, 100% {
            border-right: 2px solid transparent;
        }

        50% {
            border-right: 2px solid white;
        }
    }


</style>