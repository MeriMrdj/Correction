<template lang="html">

<div class="">


    <div class="text wrap">
        <p class="crea">   PORTFOLIO   </p>
    </div>
    
    <gal></gal>

   <!-- <div class="cre wrap">
        <div class="m"><a class="button" href="#popup1"> <img class="im" src="/src/assets/image/dev2.svg" height="200px" width="200px" alt=""></a></div>
        <div class="m"><a class="button" href="#popup2"><img class="im" src="/src/assets/image/logoLFPT1.svg" height="200px" width="200px" alt=""></a></div>
        <div class="m"><a class="button" href="#popup1"> <a href="http://hayatmrabo.esy.es/academiedessavoirs/academie.html"><img class="im" src="/src/assets/image/ads.png" height="200px" width="200px" alt=""></a></a></div>
        <div class="m"><a class="button" href="#popup1"> <img class="im" src="/src/assets/image/4.jpg" height="200px" width="200px" alt=""></a></div>
        <div class="m"><a class="button" href="#popup1"><img class="im" src="/src/assets/image/5.jpg" height="200px" width="200px" alt=""></a></div>
    </div>
-->

    <!--     <div class="box">

<a class="button" href="#popup1"></a>
    </div>-->

    <!--<div id="popup1" class="overlay">
        <div class="popup">
            <h2>MERI POWER  !</h2>
            <a class="close" href="#">&times;</a>

    </div>-->
    


    </div>
    </div>



</template>


<script>

    import gal from "../gal/gal.vue";

    export default {
components: {
    gal
        
    }

    }

</script>


<style lang="css">
    .crea{     font-size: 110px;
        font-family: 'Poiret One', cursive;
        color: /*white*/ rgb(109, 7, 26);
        line-height: 3px;
    }
    .texto{font-family: 'Poiret One', cursive;
        font-size: 30px;
        font-weight: 100}

    /*   .wrap{

    display: flex;
    flex-direction: row;
    flex-wrap: wraps;
    }*/


    .text {
        /* display:flex;*/
        /*    height: 200px;
        min-height: 100px;
        width: 350px*/;
        /* padding: 10px;
        margin: 20px;*/
        font-size: 25px;
        color: rgb(109, 7, 26);
        font-weight: 100;
        text-align: center;
        justify-content: center;
    }
    .m{
        display: inline-block;
    }
    /*  .text:hover{

    background: rgba( 255, 255, 255, 0.187 );
    border-radius: 10px

    }*/

    .cre{
        display: block;
        justify-content: space-around;
        align-content: center;



    }

    .im{
        padding: 3px;
        border-radius: 50px;
        filter: blur(1px) grayscale(100%);
        border: solid 0.5px rgb(109, 7, 26);
        margin-left: 5px;
        margin-right: 5px;

    }

    .im:hover{
        height: 250px;
        width: 250px;
        transition: 1s;
        filter: none;
        border: none
    }

    .box {
        width: 40%;
        margin: 0 auto;
        background: rgba(255,255,255,0.2);
        padding: 35px;
        border: 2px solid #fff;
        border-radius: 20px/50px;
        background-clip: padding-box;
        text-align: center;
    }

    .button {
        font-size: 1em;
        padding: 10px;
        color: #fff;
        border-radius: 20px/50px;
        text-decoration: none;
        cursor: pointer;
        transition: all 0.3s ease-out;
    }
    .button:hover {
    }

    .overlay {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.7);
        transition: opacity 500ms;
        visibility: hidden;
        opacity: 0;
    }
    .overlay:target {
        visibility: visible;
        opacity: 1;
    }

    .popup {
        margin: 70px auto;
        padding: 20px;
        background: #fff;
        border-radius: 5px;
        width: 30%;
        position: relative;
        transition: all 5s ease-in-out;
    }

    .popup h2 {
        margin-top: 0;
        color: #333;
        font-family: Tahoma, Arial, sans-serif;
    }
    .popup .close {
        position: absolute;
        top: 20px;
        right: 30px;
        transition: all 200ms;
        font-size: 30px;
        font-weight: bold;
        text-decoration: none;
        color: #333;
    }
    .popup .close:hover {

    }
    .popup .content {
        max-height: 30%;
        overflow: auto;
        transition: 2s;
        height: 250px;
        width: 250px;
    }
    .popup{
        transition: 2s;
        height: 250px;
        width: 250px;
    }
    @media screen and (max-width: 700px){
        .box{
            width: 70%;
        }
        .popup{
            width: 70%;
        }
    }


</style>