<script>
  import TopBar from "../../components/TopBar.svelte";
</script>

<style>

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    position: fixed;
    inset: 0 0 0 0;

    /* Set a transparent background */
    background-color: rgba(0, 0, 0, 0.6);

    /* remove white border around blurred background */
    margin: -10px;

    /* Apply a blur filter to the pseudo-element */
    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: url(/assets/images/image_50379777.webp);
      background-position: center;
      background-size: cover;
      /* darken background image with blurr */
      /* filter: blur(5px) brightness(0.20); */
      filter: blur(5px) brightness(0.2);
   
      z-index: -1;
    }

  }

    .container div {
        z-index: 1;
        color: white; 
        font-family: 'Helvetica', 'Arial', sans-serif;

        /* initial drop in state */
        opacity: 0;
        transform: translateY(-10px);
        animation: dropIn 1s cubic-bezier(0.645, 0.045, 0.355, 1) 0.25s forwards;
    }

    .profilePic {
        background-image: url(/assets/images/img_1924.jpg);
        background-repeat: no-repeat;
        background-size: cover;

        background-position: center;

        border-radius: 15px;

        height: 100%;
        width: clamp(120px, 18vw, 600px);

        aspect-ratio: 1;

        box-shadow: 0px 0px 2px 2px;


    }

    .content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-around;
        margin-top: 130px;
        width: 93%;

        padding: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        letter-spacing: -0.014px;
        line-height: 30px;

    }

    .intro {
        display: flex;
        justify-content: space-between;
        column-gap: 4%;
        width: 100%;
        margin-bottom: 5%;
    }

    .introText {
        flex: 2;
    }

    .subheadings {
        margin-top: 0px;
    }

    .paragraph {
        padding-bottom: 10px;
    }

    @keyframes dropIn {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

</style>

<div class="container">
  <TopBar />
  <div class="content">
    <div class="intro">
        <div class="profilePic"/>
        <div class="introText">
            <h1 class="subheadings">G'day! 👋</h1>
            <div class="paragraph"> It appears you stumbled upon my portfolio...Who am I you may ask? </div>
            <div class="paragraph"> I am a third year Computer Science student at the University of New South Wales (UNSW). </div>
            <div class="paragraph"> From 2022 to 2024, I was the Education Director for the Computer Science and Engineering Society @ UNSW. My other responsibilities include 
            academic tutoring, and volunteering for St John's Ambulance. </div>
            <div class="paragraph"> Some of the things I love doing is riding my motocycle, freediving, photography, teaching, and most recently, diving into the rabbit hole of various Cyber Security topics. </div> 
        </div>
    </div>
    <div class="technologyStack">
        <h2 class="subheadings">Familiar technologies</h2>
    </div>
    <div class="contactMeContainer">
        <h2 class="subheadings">Contact me</h2>
    </div>
  </div>
</div>