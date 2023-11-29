<!--
<style>
    nav {
        font-family: BlinkMacSystemFont, -apple-system, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", Helvetica,
        Arial, sans-serif;

        /* blur elements behind nav bar */
        -webkit-backdrop-filter: blur(4px);
        backdrop-filter: blur(4px);

        /* position fixed so its always on top of screen as user scrolls */
        position: fixed;

        left: 0;
        right: 0;
        top: 0;
        z-index: 30;
        background: rgba(217,217,217, 0.2);
        /* Ensure all other elements are behind nav bar as user scrolls */
        z-index: 6;


        box-shadow: 0 0px 3px 3px #21252b;

    }



</style>

<!-- nav defines a BLOCK of nav links -->
    <nav>
        <!-- <a class="logoContainer" href="#"><img class="homeLogo" src="./images/home.png" alt="HOME"/></a> 

        <!-- Since we have an unordered list of nav links, use <ul> tag -->
        <ul>
            <!-- <li> tag represents each list item -->
            <!-- <a> (anchor tag) defines a hyperlink, linking one page to another -->
            <!-- href="#" moves scroll position to top of page, href="#some-id" scrolls page to element on current page with same id eg. <div id="some-id"> -->
            <li><a href="about">About</a></li>
            <li><a href="blogs">Blogs</a></li>
        </ul>
    </nav>

<slot></slot>

-->