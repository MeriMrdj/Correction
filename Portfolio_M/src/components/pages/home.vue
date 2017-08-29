<template lang="html">


<div class="wrap">
  
<!--  <button
      id="up"
      @click="doScroll($event)"
      data-cible="#macible">
      <span>scroll down</span>
  </button>-->
   
    <link href="https://fonts.googleapis.com/css?family=Just+Another+Hand|Lobster|Poiret+One" rel="stylesheet"> 
    
    <p class="bien" ><span class="dja">MERIDJA</span><span class="meri">MERIEM</span> <br>
    
    <router-link class="na" tag="li" exact active-class="is-active" :to="{name: 'folio', params:{} }"><i class="fa fa-heart-o fa-4x" aria-hidden="true"></i></router-link>
    
 <!--   <span class="cit">« L’originalité n’est rien qu’une judicieuse imitation. » <br>Voltaire</span>--></p>


   
    
   
   <div class="page">
       <h1></h1>
   </div>
   
<!--   <button
        @click="doScroll($event)"
      data-cible="#up">scoll up
   </button>
   
   <div class="page" id="macible">
       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui autem inventore debitis eveniet illo laboriosam quaerat, consequuntur enim atque doloribus eum voluptate eligendi, reprehenderit nisi ut amet aperiam facilis fugiat.
   </div>-->
    
      </div>
</template>


<script>

    export default{

    data(){
        return{
            
        }
    },
        methods:{
            doScroll(e){
                const sCSS = e.target.getAttribute("data-cible");
                const cible = this.$el.querySelector(sCSS);
                smoothscroll(cible, 500);
            }
        }
    }
</script>




<style lang="css" scoped="true">
    button span{
        pointer-events: none;
    }
    .petit{
       font-family: 'Poiret One', cursive;
        font-size: 40px;
        font-weight: 100;
        margin-bottom: 0;
        letter-spacing: 10px;
        
    }
    .cit{ font-family: 'Poiret One', cursive;
        font-size: 20px;
        font-weight: 100;
    color: dimgrey}

/*    h1{
        font-size: 50px;
        font-family: "Trebuchet MS", Helvetica, sans-serif;
        color: white;
    }*/

    .bien{
        font-size:90px;
        font-family: 'Poiret One', cursive;
        color: rgb(109, 7, 26);
        line-height: 55px;
    } 
    
    .dja:hover{
        color: rgb(109, 7, 26);
    }
    
    .meri{
         font-size:90px;
        font-family: 'Poiret One', cursive;
        color:rgb(109, 7, 26);
        line-height: 55px;
    } 
    
    .meri:hover{
        color: rgb(109, 7, 26);
      
    }
</style>