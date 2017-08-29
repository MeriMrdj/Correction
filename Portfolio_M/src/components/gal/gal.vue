<template lang="html">

<div class="gal">
    <!--

<p class="text">

    </p>
-->

    <blockquote class="credit">



    </blockquote>

    <ul>

        <li v-for="(cat, i) in categories"

            :style="{

                    backgroundImage: 'url(' + cat.imgBanner + ')'

                    }"

            @click="toggleTab($event)" class="tab">

            <header class="header">


                <span class="title">{{ cat.title }}</span>

                <i class="fa fa-plus"></i>

    </header>

            <div class="wrap">

                <img class="img" alt="nice lips"

                     v-for="(img, i) in cat.img" :src="img">

    </div>

    </li>

    </ul>

    </div>

</template>

<script>

    export default {

        data() {

            return {

                categories: [

                    {

                        title: "SITES",

                        /*      imgBanner: "/src/assets/image/1.jpg",*/

                        img: [

                            "/src/assets/image/1.jpg",

                            "/src/assets/image/2.jpg",

                            "/src/assets/image/3.jpg",

                            "/src/assets/image/5.jpg",

                            "/src/assets/imgge/6.jpg"

                        ]

                    },

                    {

                        title: "LOGOS",

                        /* imgBanner: "/src/assets/image/1.jpg",*/

                        img: [

                            "/src/assets/image/logoLFPT1.svg",
                            
                            "/src/assets/image/DA.jpg",
                            
                            "/src/assets/image/LogoDevUnit.jpg",

                            "/src/assets/image/LogoDevUnit2.jpg",

                            "/src/assets/image/LogoM.jpg"

                        ]

                    },
                    {

                        title: "PRINT",

                        /* imgBanner: "/src/assets/image/1.jpg",*/

                        img: [

                            "/src/assets/image/AfficheVLP.jpg",

                            "/src/assets/image/BanMip.jpg",

                            "/src/assets/image/InvitApart.jpg",

                            "/src/assets/image/FlyerDA.jpg",
                /*            "/src/assets/image/FlyerDA.jpg",
                            "/src/assets/image/FlyerDA.jpg",*/
                            "/src/assets/image/AfficheGHI.jpg",


                        ]

                    },



                ]

            }

        },

        methods: {

            toggleTab(e) {

                const tab = e.target || e.srcElement;

                tab.classList.toggle("is-active");

            }

        }

    }

</script>

<style lang="scss" scoped>
    
    li{
        margin: 20px;
    }

    .gal {

        max-width: 1500px;

        margin: 20px auto;
        

    }

    .text {

        max-width: 320px;

        margin: 0 auto;

        margin-bottom: 20px;

    }

    .credit {

        font-size: .85rem;

        display: block;

        margin-bottom: 20px;

    }

    .tab {

        position: relative;

        display: flex;

        flex-direction: column;

        background: rgba(255, 255, 255, 0.17);

        color: black;

        cursor: pointer;

        background-repeat: no-repeat;

        background-size: 100%;

    }

    .tab > * {

        pointer-events: none; // empêche les enfants direct des tabs de capture les clicks !!!

    }

    .tab .header {

        position: relative;

        z-index: 3;

        display: flex;

        justify-content: center;

        align-items: center;

        width: 100%;

        height: 60px;

        color: rgb(109, 7, 26);
        

    }

    .tab .header .title {

        font-weight: bold;
        font-family: 'Poiret One', cursive;
        font-size: 25px;
        color: rgb(109, 7, 26);
        letter-spacing: 20px

    }

    .tab .fa {

        position: absolute;

        right: 24px;

        transition: transform .3s linear;
        
        color: rgb(109, 7, 26)

    }

    .tab.is-active .fa {

        transform: rotate(45deg);

    }

    .tab .wrap {

        display: flex;

        justify-content: space-between;

        align-items: center;

        max-height: 0;

        height: 0;

        opacity: 0;

        transition: all .3s linear;

        overflow: hidden;
        
        padding: 5px;

    }

    .tab.is-active .wrap {

        height: 100vh;

        max-height: 200px;

        opacity: 1;

        transition: all .3s linear;

    }

    .tab .wrap .img {

        height: 250px;

        width: 250px;


    }

</style>

