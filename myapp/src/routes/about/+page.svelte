<script>
  import TopBar from "../../components/TopBar.svelte";
  import Skills from "../../components/Skills.svelte";
</script>

<style>

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    /* if i dont want scroll bar visible
    position: fixed;
    */

    inset: 0 0 0 0;
    z-index: 0;

    padding: 0;

    /* Set a transparent background */
    background-color: rgba(0, 0, 0, 0.6);


    /* Apply a blur filter to the pseudo-element */
    &::before {
      content: "";
      position: fixed;
      width: 100%;
      height: 100%;
      inset: 0 0 0 0;
      background-image: url(/assets/images/image_50379777.webp);
      background-position: center;
      background-size: cover;
      /* darken background image with blurr */
      /* filter: blur(5px) brightness(0.20); */
      filter: blur(5px) brightness(0.2);
      /* remove white border around blurred background */
      backdrop-filter: blur(0px);
    }

    /* scroll bar */
    overflow-y: scroll; /* Enable vertical scrolling */
    scroll-behavior: smooth; /* Add smooth scrolling behavior */
    overflow-x: hidden;
    

  }

  /* custom scrollbar NOT WORKING FOR SM REASON */

    /* Purple gradient scrollbar

    ::-webkit-scrollbar {
        width: 13px;
    }

    ::-webkit-scrollbar-track {
        background: #d1e5ff;
    }

    ::-webkit-scrollbar-thumb {
        background: linear-gradient(#642bff, #ff22e6);
        border-radius: 5px;
    }

    */

    /* dark grey scrollbar  */

    .container::-webkit-scrollbar {
    width: 16px;
    height: 16px;
    }

    .container::-webkit-scrollbar-thumb {
        background: #434343;
        border-radius: 16px;
        box-shadow: inset 2px 2px 2px hsla(0,0%,100%,.25),inset -2px -2px 2px rgba(0,0,0,.25);
    }

    .container::-webkit-scrollbar-track {
        background: linear-gradient(90deg,#434343,#434343 1px,#111 0,#111);
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
        /* width: 93%; */
        /* to fit scroll bar into content section */
        width: 98.7%;
        margin-top: 130px; 

        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        letter-spacing: -0.014px;
        line-height: 30px;
        
    }



    .intro {
        display: flex;
        justify-content: space-between;
        column-gap: 4%;
        width: 96%;
        /* margin-top: 4%;  */
        margin-top: 10px;
        margin-bottom: 4%;
        margin-left: 2%;

    }

    .introText {
        flex: 1;
    }

    .subheadings {
        margin-top: 0px;
    }

    .paragraph {
        padding-bottom: 10px;
    }

    .content > * {
        width: 96%;
        margin-bottom: 4%;
        margin-left: 2%;
    }

    .technologyStack {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-around;
        width: 100%;
        row-gap: 10%;
    }

    a {
        text-decoration: none;
        color: #ff22e6;
        font-weight: bold;
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
            <div class="paragraph"> It appears you stumbled upon my portfolio...who am I you may ask? </div>
            <div class="paragraph"> I am currently a third year Computer Science student at the University of New South Wales (UNSW). </div>
            <div class="paragraph"> From 2022 to 2024, I was the Education Director for the Computer Science and Engineering Society @ UNSW,
            where I led a team of 15 to deliver numerous compsci related workshops and resources. 
            My other responsibilities include academic tutoring, and volunteering for St John's Ambulance. </div>
            <div class="paragraph"> Some of the things I enjoy doing is riding my motorcycle, freediving, photography, teaching, and most recently, diving into the rabbit hole of the Security Engineering side of Computer Science. </div>
            <div class="paragraph"> Check out my <a href="/projects">projects</a> for some of the cool things I've been up to!</div>
        </div>
    </div>
    <div class="technologyStack">
        <h2 class="subheadings" style="margin-bottom: 2px;">Familiar technologies</h2>
        <Skills/>

    </div>
    <div class="contactMeContainer">
        <h2 class="subheadings">Contact me</h2>
        If you would like to get in touch with me, shoot an email to hello@simonn.dev :D
    </div>
  </div>
</div>