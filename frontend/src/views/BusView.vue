<script setup>
import Layout from '@/components/Layout.vue'
import imagea from '@/assets/images/istockphoto-1163596917-612x612-removebg-preview.png';
import imageb from '@/assets/images/istockphoto-1140138866-612x612-removebg-preview.png';
import imagec from '@/assets/images/autobus-1__1_-removebg-preview.png';
import imaged from '@/assets/images/istockphoto-181065726-612x612-removebg-preview.png';
import imagee from '@/assets/images/autobus-removebg-preview.png';
import image from '@/assets/images/autobus-1__1_-removebg-preview.png';

</script>

<template>
<layout>
    <div class=" bg-slate-300">
       <h1 class="bg text-black relative top-6 font-bold text-xl">Nos Minibus</h1>
   
    <div>
        <div class="caracteristique">
            <img :src="image" alt="" class="img1">
            <p class="p">
                Marque : Renault <br>
                Disponible pour tout vos deplacement <br> avec un confort exceptionnel <br>
                nombre de places : 50 <br>
            </p>
        </div>
    </div>
    <div class="catalogue">
        <ul>
            <li>
                <a href="#"><img :src="imagea" alt=""></a>
                <p>
                    Marque : Renault <br>
                    Energie : Diesel <br>
                    nombre de places : 50 <br>
                    <RouterLink to="/busa"><strong>voir plus</strong></RouterLink>                </p>
            </li>
            <li>
                <a href="#"><img :src="imageb" alt=""></a>
                <p>
                    Marque : Renault <br>
                    Energie : Diesel <br>
                    nombre de places : 50 <br>
                    <RouterLink to="/busb"><strong>voir plus</strong></RouterLink>                
                </p>
            </li>
            <li>
                <a href="#"><img :src="imagec" alt=""></a>
                <p>
                    Marque : HUANDAI <br>
                    Energie : Diesel <br>
                    nombre de places : 50 <br>
                    <RouterLink to="/busc"><strong>voir plus</strong></RouterLink>                
                </p>
            </li>
            <li>
                <a href="#"><img :src="imaged" alt=""></a>
                <p>
                    Marque : Renault <br>
                    Energie : Diesel <br>
                    nombre de places : 50 <br>
                    <RouterLink to="/busd"><strong>voir plus</strong></RouterLink>                
                </p>
            </li>
            <li>
                <a href="#"><img :src="imagee" alt=""></a>
                <p>
                    Marque : Renault <br>
                    Energie : Diesel <br>
                    nombre de places : 50 <br>
                    <RouterLink to="/buse"><strong>voir plus</strong></RouterLink>                
                </p>
            </li>
        </ul>

      </div>
    </div>
    
</layout>
    
</template>

<style scoped>
.catalogue{
    margin-top: 10px;
}

.caracteristique {
    text-align: center;
    position: relative;
    top: 50px;
}
.caracteristique .img1{
    position: relative;
    left:450px;
    top: -50px;
}

.caracteristique p {
    position: relative;
    top: -100px;
    color: black;
}

.caracteristique p a {
    color: black;
}
strong{
    color: brown;
    text-decoration-line: underline;
}

.text p {
    font-family: 'Times New Roman', Times, serif;
    margin: 2%;
}

.text span {
    font-weight: bold;
    font-size: 20px;
}

.catalogue ul li{
    display: inline-block;
    list-style: none;
    position: relative;
    left: 80px;
    top: -20px;
}
.catalogue img{
    position: relative;
    width: 200px;
    height: 170px;
    border-radius: 10px;
   
}
.catalogue p{
    text-align: center;
    width: 250px;
    color: black;
}
.camion{
    position: relative;
    top: 20px;
}

</style>
