<script>
    /* dynmaic highlighting of navigation items based on page */
    import { beforeUpdate } from "svelte";


    let currentRoute = "";

    const updateRoute = () => {
        currentRoute = window.location.pathname;
    };


    /* update route before component renders */
    beforeUpdate(() => {
        updateRoute();
        window.addEventListener("popstate", updateRoute);
    });

    /* Check if nav item should be highligted */
    const isHighlighted = (itemRoute) => {
        return itemRoute === currentRoute;
    }

    const determineInitials = () => {
        return currentRoute === "/" ? "SN" : "simon nguyen";
    };

    const barContainer = () => {
        return currentRoute === "/" ? "container" : "container darkenContainer";
    }


</script>


<style>

    .container {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        /* padding: 30px 50px; */
        margin-top: 30px;
        position: fixed;
        top: 0;
        z-index: 1;

    }
    

    .darkenContainer {
        background-color: rgba(0, 0, 0, 0.2);
        margin-top: 0px !important;
        padding: 7px 50px; 
        box-shadow: 0px 0px 3px 3px;
        z-index: 6;

        /* blur elements behind nav bar */
        -webkit-backdrop-filter: blur(5px);
        backdrop-filter: blur(5px);
    }

    .navigation ul {
        display: flex;
        list-style: none;
    }

    .navigation a {
        margin-right: 40px;
        display: flex;
        align-items: center;
        padding-top: 4px;
        transition: all 150ms ease-in;
        color: white;
        text-decoration: none;
    }

    .navigation a:hover {
        color: #b0e994;
        padding-top: 0;
        padding-bottom: 4px;
    }

    .navigation svg {
        margin-right: 10px;
    }

    /*

    .resume button {
        display: flex;
        align-items: center;

        border: 1px solid rgb(223, 225, 228);
        border-top-color: rgb(223, 225, 228);
        border-right-color: rgb(223, 225, 228);
        border-bottom-color: rgb(223, 225, 228);
        border-left-color: rgb(223, 225, 228);
        box-shadow: rgba(0, 0, 0, 0.09) 0px 1px 1px;
        border-radius: 4px;
        background-color: white;

        padding: 6px 10px;
        transform: translateY(-3px);

        transition: all 0.15s ease-in;
        font-size: 16px;
    }

    .resume button:hover {
        background-color: rgb(244, 245, 248);
        border-color: rgb(201, 203, 205);   
    }

    */

    .logo-container {
        opacity: 0;
        transform: translateY(-10px);
        animation: dropIn 1s cubic-bezier(0.645, 0.045, 0.355, 1) 0.05s forwards;

        user-select: none;
        color: white;

        margin-left: 20px;
    }
    
    /*
    .circle {
        width: 40px;
        height: 40px;
        background-color: transparent;
        border: 1px solid #fff;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    */

    .initials {
        font-size: 20px;
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
        /* padding: 0px 0px 2px 0px; */
        color: white;
        text-decoration: none;
        padding-left: 1.7vw;
    }


    .about {
        opacity: 0;
        transform: translateY(-10px);
        animation: dropIn 1s cubic-bezier(0.645, 0.045, 0.355, 1) 0.05s forwards;
    }


    .projects {
        opacity: 0;
        transform: translateY(-10px);
        animation: dropIn 1s cubic-bezier(0.645, 0.045, 0.355, 1) 0.25s forwards;
    }


    /*
    .resume svg {
        margin-right: 0;
        margin-left: 10px;
    }
    */

    .highlighted {
        color: #b0e994 !important;
    }

    @keyframes dropIn {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }


    @media (max-width: 680px) {

        .container {
            padding: 30px 40px;
        }
        .logo {
            font-size:x-large;
        }
    }

    @media (max-width: 850px) {
        .navigation a {
            margin-right: 20px;
        }
    }

</style>


<div class="{barContainer()}">
        <div class="logo-container">
        <div class="circle">
                <a class="initials" href="/" >{determineInitials()}</a>
        </div>
        </div>
        <nav class="navigation">
            <ul>
                <li class="about">
                <a class:highlighted={isHighlighted('/about')} href="/about">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                    About
                </a>
                </li>

                <li class="projects">
                <a class:highlighted={isHighlighted('/projects')} href="/projects">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-book-open"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
                    Projects
                </a>
                </li>

            </ul>
        </nav>
</div>