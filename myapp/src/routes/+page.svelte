<script>
     import Intro from "../components/Intro.svelte";
     import TopBar from "../components/TopBar.svelte";
</script>

<style>
    #container {
        display: flex;
        align-items: center;
        justify-content: center;

        background-image: url(/assets/images/image_50379777.webp);
        background-position: center;
        background-size: cover;

        inset: 0 0 0 0;
        position: fixed;
    }

    .content {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .profilePic {
        background-image: url(/assets/images/pfp1.webp);
        background-repeat: no-repeat;
        background-size: cover;

        background-position-x: center;

        border-radius: 15px;

        height: 100%;
        width: clamp(120px, 25vw, 600px);

        aspect-ratio: 1;
    }

    .contentCover {
        width: clamp(320px, 75vw, 1024px);

        /* inheriting bg image */
        background: inherit; 


        box-shadow: 0;
        position: relative;
        z-index: 0;

        /* round edges + blur around content cover */
        border-radius: 15px;
        box-shadow: 0px 0px 3px 3px #1b1b1b ;

        /* initial drop in state */

        opacity: 0;
        transform: translateY(-10px);
        animation: dropIn 1s cubic-bezier(0.645, 0.045, 0.355, 1) 0.25s forwards;

    }


    @keyframes dropIn {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }



</style>


<div id="container">
    <TopBar/>
    <div class="content contentCover">
        <Intro/>
        <section>
            <div class="profilePic" use:setProfileImage/>
        </section>
    </div>
</div>


