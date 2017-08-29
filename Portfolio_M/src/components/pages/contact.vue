s<template lang="html">

<div class="">

    <h1 class="cont">Me contacter</h1>

    <i class="fa fa-linkedin-square fa-4x" aria-hidden="true"><a href="https://www.linkedin.com/in/meriem-meridja-02405212b/"></a></i>
    <i class="fa fa-github fa-4x" aria-hidden="true"><a href="https://github.com/MeriMrdj"></a></i>



    <div class="form">
        <div class="info">
            <p class="titre2"></p>
    </div>

        <form class="info" method="post">
            <table align="center" width="600px" height="300px">
                <tr>
                    <td width="178px" align="center">
                        <label for="nom" class="name">Nom</label>
    </td>
                    <td width="410px">
                        <input type="text" name="name" id="nom" size="40">
    </td>
    </tr>
                <tr>
                    <td align="center">
                        <label for="mail" class="mail">Adresse Mail</label>
    </td>
                    <td>
                        <input type="email" name="mail" id="mail" size="40">
    </td>
    </tr>
                <tr>
                    <td align="center">
                        <label for="text" class="msg">Votre Message</label>
    </td>
                    <td>
                        <textarea class="msgg" name="comment" form="usrform">Entrer votre message ici...</textarea>
    </td>
    </tr>
                <tr>
                    <td colspan="2" align="right" id="idbouton">
                        <input type="image" name="send" value="Envoyer" src="assets/images/button_envoyer.png">
    </td>
    </tr>
    </table>
    </form>
    </div>

    </div>
</template>


<script>

    export default{
        created(){}
    }
</script>


<style lang="css">

    .cont{
      font-size: 110px;
        font-family: 'Poiret One', cursive;
        color: /*white*/ rgb(109, 7, 26);
        line-height: 3px;
    }

    .fa-github{
        color: rgb(109, 7, 26);
        padding:10px;
    }   

    .fa-linkedin-square{
        color: rgb(109, 7, 26);
    }   

    .fa-github:hover{
        color:white;

    }

    td{

        font-size: 19px;
        font-family: 'Poiret One', cursive;
        color: white;
        

    }



    input{  
        font-size: 17px;
        font-family: 'Poiret One', cursive;
        color: rgb(109, 7, 26);
        background: none;
        border-top: none;
        border-left: none;
        border-right: none;

    }

    .msgg{
        width: 600px;
        font-size: 17px;
        font-family: 'Poiret One', cursive;
        color: rgb(109, 7, 26);
        background: none;
        border-top: none;
        border-left: none;
        border-right: none;

    }

    .fa-linkedin-square:hover{
        color: rgb(109, 7, 26);
    }
    
    .info{
        left: 30px;
    }



</style>