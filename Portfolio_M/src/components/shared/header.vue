<template lang="html">
<nav>
 <link href="https://fonts.googleapis.com/css?family=Just+Another+Hand|Lobster|Poiret+One" rel="stylesheet"> 
    <ul>
        <router-link class="na" tag="li"  exact active-class="is-active" :to="{name: 'home', params:{} }">
            <i class="fa fa-pagelines" aria-hidden="true"></i>
           HOME 
            <i class="fa fa-pagelines" aria-hidden="true"></i>
    </router-link>
       
        <router-link class="na" tag="li" exact active-class="is-active":to="{name: 'about', params:{} }">
           <i class="fa fa-pagelines" aria-hidden="true"></i>
            ABOUT
             <i class="fa fa-pagelines" aria-hidden="true"></i>
    </router-link>
      
      <router-link class="na" tag="li"  exact active-class="is-active" :to="{name: 'home', params:{} }">
      <img src="../../assets/image/logoMM.svg" alt="">
       </router-link>
       
        <router-link class="na" tag="li" exact active-class="is-active" :to="{name: 'folio', params:{} }">
           <i class="fa fa-pagelines" aria-hidden="true"></i>
           PORTFOLIO 
            <i class="fa fa-pagelines" aria-hidden="true"></i>
    </router-link>
       
        <router-link class="na" tag="li" exact active-class="is-active" :to="{name: 'contact', params:{} }">
           <i class="fa fa-pagelines" aria-hidden="true"></i>
            CONTACT 
            <i class="fa fa-pagelines" aria-hidden="true"></i>
    </router-link>

    </ul>
    </nav>
</template>


<script>


</script>


<style lang="css">

    .fa-pagelines{
        color: rgba(255, 255, 255, 0.20 );
    } 
    
 

    .na{
        font-family: 'Poiret One', cursive;
        margin-right: 30px;
        margin-left: 30px;
        font-size: 25px;
        color: rgb(109, 7, 26);
        
    }

    .na:hover{
        color:white;
        cursor: pointer;
    }

</style>