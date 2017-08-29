<template>
<div id="app">
    <!-- <h1>{{ msg }}</h1>-->
    <mon-header></mon-header>
    <router-view></router-view>

    <img src="assets/image/logoMM3.svg" alt="">

    </div>
</template>

<script>

    /*import NavMain from "./components/shared/MainNav.vue";*/
    /*import home from "./components/page/home.vue";*/
    import MonHeader from "./components/shared/header.vue";

    export default {
        name: 'app',
        data() {
            return {
                msg: 'MERIDJA MERIEM'
            }
        },
        components: {
            MonHeader

        }
    }
</script>
<style lang="css">
    body{      
        background-image: url(assets/image/cole-patrick-28189.jpg);
        background-size: cover;
     /*   background-position: center;
        background-repeat: no-repeat;*/

    }


    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        margin-top: 60px;
    }

    h1,
    h2 {
        font-weight: normal;
        color: white;
    }

    p{
        color: white;
    }



    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }
    /*
    a {
    color: #42b983;
    }*/
    

</style>
