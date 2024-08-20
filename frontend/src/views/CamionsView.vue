<script setup>
import Layout from '@/components/Layout.vue'
import imageo from '@/assets/images/cami-removebg-preview.png';
import image from '@/assets/images/cami-removebg-preview.png';
import image1 from '@/assets/images/camio-removebg-preview.png';
import image2 from '@/assets/images/camion1-removebg-preview.png';
import image3 from '@/assets/images/Isuzu-removebg-preview.png';
import image4 from '@/assets/images/camionnette-removebg-preview.png';
</script>

<template>
<layout>
    <div class="bg bg-slate-300">
     <h1 class=" camion bg text-balck font-bold text-xl">NOS CAMIONS</h1>
    <div >
        <div class="caracteristique">
            <img :src="image" alt="" class="img0">
            <p class="p1">
                Marque : Renault <br>
                Disponible pour tout vos traveaux btp <br> avec une adaptation
                 exceptionnelle <br>
            </p>
        </div>
    </div>
    <div class="catalogue">
        <ul>
             <li>
                <a href="#"><img :src="imageo" alt=""></a>
                <p>
                    Marque : Renault <br>
                    Energie : Diesel<br>
                    camion benne <br>
                    <RouterLink to="/description"><strong>voir plus</strong></RouterLink>                
                </p>
            </li>
           
            <li>
                <a href="#"><img :src="image1" alt=""></a>
                <p>
                    Marque : Renault <br>
                    Energie : Diesel<br>
                    camion benne <br>
                    <RouterLink to="/descriptiona"><strong>voir plus</strong></RouterLink>                
                </p>
            </li>
            <li>
                <a href="#"><img :src="image2" alt=""></a>
                <p>
                    Marque : Renault <br>
                    Energie : Diesel<br>
                    camion benne <br>
                    <RouterLink to="/descriptionb"><strong>voir plus</strong></RouterLink>                
                </p>
            </li>
            <li>
                <a href="#"><img :src="image3" alt=""></a>
                <p>
                    Marque : IZUZU <br>
                    Energie : Diesel <br>
                    Pic up double benne double cabine <br>
                    <RouterLink to="/descriptionc"><strong>voir plus</strong></RouterLink>                
                </p>
            </li>
            <li>
                <a href="#"><img :src="image4" alt=""></a>
                <p>
                    Marque : IZUZU <br>
                    Energie : Diesel <br>
                    Pic up double benne double cabine <br>
                    <RouterLink to="/descriptiond"><strong>voir plus</strong></RouterLink>                
                </p>
            </li>
        </ul>

    </div>
    </div>
</layout>
    
</template>

<style scoped>

.caracteristique {
    text-align: center;
}
.caracteristique .img0{
    position: relative;
    left:540px;
    top: -10px;
}

.caracteristique p {
    position: relative;
    top: -30px;
    color:black;
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
