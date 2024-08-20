<script setup>
import Layout from '@/components/Layout.vue'
import image from '@/assets/images/images__11_-removebg-preview.png';
import image1 from '@/assets/images/images__14_-removebg-preview.png';
import image2 from '@/assets/images/images__11_-removebg-preview.png';
import image3 from '@/assets/images/petit_bus-removebg-preview.png';
import image4 from '@/assets/images/le_white-removebg-preview.png';
import image5 from '@/assets/images/peugeo-removebg-preview (2).png';

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
                nombre de places : 15 <br>
            </p>
        </div>
    </div>
    <div class="catalogue">
        <ul>
            <li>
                <a href="#"><img :src="image2" alt=""></a>
                <p>
                    Marque : Renault <br>
                    Energie : Diesel <br>
                    nombre de places : 15 <br>
                    <RouterLink to="/petitbusa"><strong>voir plus</strong></RouterLink>                </p>
            </li>
            <li>
                <a href="#"><img :src="image3" alt=""></a>
                <p>
                    Marque : Renault <br>
                    Energie : Diesel <br>
                    nombre de places : 30 <br>
                    <RouterLink to="/petitbusb"><strong>voir plus</strong></RouterLink>                
                </p>
            </li>
            <li>
                <a href="#"><img :src="image4" alt=""></a>
                <p>
                    Marque : HUANDAI <br>
                    Energie : Diesel <br>
                    nombre de places : 30 <br>
                    <RouterLink to="/petitbusc"><strong>voir plus</strong></RouterLink>                
                </p>
            </li>
            <li>
                <a href="#"><img :src="image5" alt=""></a>
                <p>
                    Marque : Renault <br>
                    Energie : Diesel <br>
                    nombre de places : 15 <br>
                    <RouterLink to="/petitbusd"><strong>voir plus</strong></RouterLink>                
                </p>
            </li>
            <li>
                <a href="#"><img :src="image1" alt=""></a>
                <p>
                    Marque : Renault <br>
                    Energie : Diesel <br>
                    nombre de places : 30 <br>
                    <RouterLink to="/petitbusf"><strong>voir plus</strong></RouterLink>                
                </p>
            </li>
        </ul>

      </div>
    </div>
    
</layout>
    
</template>

<style scoped>
.catalogue{
    margin-top: 100px;
}

.caracteristique {
    text-align: center;
    position: relative;
    top: 80px;
}
.caracteristique .img1{
    position: relative;
    left:470px;
    top: -20px;
}

.caracteristique p {
    position: relative;
    top: -30px;
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
