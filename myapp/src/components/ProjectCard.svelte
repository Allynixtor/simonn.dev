<script>
    export let categoryColour;
    export let projectData;
    export let project;

    const cardShadow = {
        blue: 'blueShadow',
        pink: 'pinkShadow',
        yellow: 'yellowShadow'
    }

</script>

<style>

.card {
    background: black;
    border-radius: 20px;
    /* box-shadow: 0px 0px 10px {categoryColour}; */
    max-width: 350px;

    /* width: 30%; */
    /* for small sized windows, dramatically increase width of card */
    width: 400%;
    /* height: auto; */
    display: block;

    /* for lifting effect when mouse hovers over */
    transition: transform 0.3s ease;

    display: flex;
    flex-direction: column;

    text-decoration: none;
    color: white;

}

 @media screen and (min-width: 996px) and (max-width: 1245px) {
      .card {
          width: 275px;
      }
    }   

     @media screen and (min-width: 0px) and (max-width: 995px) {
      .card {
          width: 200px;
      }
    }  

/*
@media screen and (min-width: 1270px) and (max-width: 1591px) {
    .card {
        width: 275px
    }
}



@media screen and (min-width:)(max-width: 1269px) {
    .card {
        width: 275px
    }
}
*/


.card:hover {
    transform: translateY(-20px);
    cursor: pointer;

}

.pinkShadow {
    box-shadow: 0px 0px 10px #ff00ff;
}

.blueShadow {
    box-shadow: 0px 0px 10px #00f;
}


.yellowShadow {
    box-shadow: 0px 0px 10px #ff0;
}

.card-top img {
    width: 100%;
    height: auto;
}

.card-top {
    /* match border radius of card */
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    /* hide image overflowing */
    overflow: hidden;

    max-width: 100%;
    max-height: 100%;
}

.card-info  {
    font-size: 20px;
    margin: 10px 12px 5px 12px;
}

.title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 0;
} 

.date {
    margin-bottom: 10px;
    font-size: 10px;
    display: block;
}


.description {
    color: #aeaeae;
    display: block;
    font-size: 15px;
    line-height: 1.2em;
    
}

/* use for future tags implementation?

.flex-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

*/


</style>


<a href={projectData.blog} class="card {cardShadow[categoryColour]}">
    <div class="card-top">
        <img src={projectData.image} alt="comp6841_ctf">
    </div>
    <div class="card-info">
        <div class="title"> {projectData.title} </div>
        <span class="date"> {projectData.date} </span>
        <p class="description"> {projectData.description}</p>
    </div>

    <!---
    <div class="card-bottom flex-row">
        <a href="#" class="blog button"> Blog </a>
    </div>
    --->


</a>