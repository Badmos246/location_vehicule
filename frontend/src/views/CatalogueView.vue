<script setup>
import Layout from '@/components/Layout.vue'
import myImage from '@/assets/images/images__11_-removebg-preview.png';
import myImage1 from '@/assets/images/petit_bus-removebg-preview.png';
import myImage2 from '@/assets/images/petit_bus-removebg-preview.png';
import myImage3 from '@/assets/images/istockphoto-1163596917-612x612-removebg-preview.png';
import myImage4 from '@/assets/images/autobus-1__1_-removebg-preview.png';
import myImag5 from '@/assets/images/autobus-removebg-preview.png';
import myImag6 from '@/assets/images/cami-removebg-preview.png';
import myImag7 from '@/assets/images/camionnette-removebg-preview.png';
import myImag8 from '@/assets/images/camion1-removebg-preview.png';
import myImag9 from '@/assets/images/promo1.jpeg';
import myImag10 from '@/assets/images/images__14_-removebg-preview.png';
import myImag11 from '@/assets/images/bus50-removebg-preview.png';
import myImag12 from '@/assets/images/etiquette1-removebg-preview.png';



</script>

<template>
 <layout>
  <div class=" bg-slate-300">
    <h1 class="relative top-8 text-black font-bold text-xl ">CATALOGUE</h1>
    <form action="traitement.php" class=" bg-salt-200 mx-auto p-5 rounded-sm w-80 mt-16">
        <div>
            <input type="search" name="q" id="marecherche" placeholder="recherche"
            class="h-10 border border-gray-500 w-68 outline-none">
            <button class="bg-blue-600 h-10 text-white w-20">search</button>
        </div>
    </form>
    <div class="pub">
        <img :src="myImag10" alt="" class="img">
        <img :src="myImag9" alt="" style="width: 80px; height: 80px;" class="pro">
        <p style="line-height: 25px;">Pour toutes les locations supperieurs ou egales a 30 jours
        nous vous offrons  pour nos mini_bus de 20 places une reduction de<span> 10% </span> </p>
        <div class="rect" >
            <img :src="myImag11" alt="">

       </div>
       <div class="location">
         <img :src="myImag9" alt="" style="width: 80px; height: 80px;" class="promo">
         <p><strong>TEMITOKPE</strong> votre meilleur partenaire</p>
       </div>
    </div>
    <div class="catalogue">
    
        <ul>
            <li><a href="index_2.html"><img :src="myImage" alt="" ></a>
                <p>
                    Marque : HUANDAI<br>
                    Energie : Diesel <br>
                    nombre de places : 30 <br>
                    <RouterLink to="/petitbusa"><strong>voir plus</strong></RouterLink> 
                </p>
            </li>
            <li><a href="index_2.html"><img :src="myImage2" alt=""  ></a>
                <p>
                    Marque : Renault <br>
                    Energie : Diesel<br>
                    nombre de places : 30 <br>
                    <RouterLink to="/petitbusb"><strong>voir plus</strong></RouterLink> 
                </p>
            </li>
            <li><a href="index_2.html"><img :src="myImag10" alt=""></a>
                <p>
                    Marque : TOYOTA <br>
                    Energie : Diesel <br>
                    nombre de places : 15 <br>
                    <RouterLink to="/petitbusf"><strong>voir plus</strong></RouterLink> 
                </p>
            </li>
            <li><a href="index_3.html"><img :src="myImage3" alt=""></a>
                <p>
                    Marque : Renault <br>
                    Energie : Diesel<br>
                    nombre de places : 50 <br>
                    <RouterLink to="/busa"><strong>voir plus</strong></RouterLink>                
                </p>
            </li>
            <li><a href="index_3.html"><img :src="myImage4" alt="" ></a>
                <p>
                    Marque : Renault <br>
                    Energie : Diesel<br>
                    nombre de places : 50 <br>
                    <RouterLink to="/busc"><strong>voir plus</strong></RouterLink>                
                </p>
            </li>           
            <li><a href="index_3.html"><img :src="myImag5" alt="" ></a>
                <p>
                    Marque : Renault <br>
                    Energie : Diesel<br>
                    nombre de places : 50 <br>
                   <RouterLink to="/buse"><strong>voir plus</strong></RouterLink>               
                </p>
            </li>
            <li><a href="index_1.html"><img :src="myImag6" alt=""  ></a>
                <p>
                    Marque : Renault <br>
                    Energie : Diesel <br>
                    Camion Benne <br>
                    <RouterLink to="/description"><strong>voir plus</strong></RouterLink>                
                </p>
            </li>
            <li><a href="index_1.html"><img :src="myImag7" alt=""  ></a>
                <p>
                    Marque : Renault <br>
                    Energie:Diesel <br>
                    Pick up Benne <br>
                    <RouterLink to="/descriptiond"><strong>voir plus</strong></RouterLink>                
                </p>
            </li>
            <li><a href="index_1.html"><img :src="myImag8" alt=""  ></a>
                <p>
                    Marque : Renault <br>
                    Energie:Diesel <br>
                    Camion Benne  <br>
                    <RouterLink to="/descriptionb"><strong>voir plus</strong></RouterLink>                
                </p>
            </li>
        </ul>
    </div>
   </div>

  </layout>
</template>

<style scoped>
.pub{
    position: relative;
    top: 150px;
    margin: 15px;
    width: 310px;
    height: 530px;
    color:black;
    background-color: white;
    left: 20px;
    border: 1px solid black;
    border-radius: 10px;
    box-shadow: 2px 5px 5px rgb(235, 85, 85);
 }
 
 .pub .img{
    position: relative;
    left: 10px;
 }
 .pub p{
    position: relative;
    bottom: 100px;
    left: 5px;
    font-size: 20px;
 }
 .pub p span{
    position: relative;
    font-size: 30px;
    font-weight: 900;
    font-family: Arial, Helvetica, sans-serif;
    top: 5px;
    color: red;
 }
 .pub .pro{
    position: relative;
    bottom: 170px;
    border-radius: 30px;
 }
 .pub .promo{
    position: relative;
    bottom: 190px;
    left: 5px;
    border-radius: 30px;
 }
 
 .pub .location p{
    position: relative;
    bottom: 170px;
    left: 5px;
    border-radius: 30px;
    color: blue;
    text-align: center;
 }
 
 .rect{
    position: relative;
    max-width: 250px;
    height: auto;
    bottom: 90px;
    left: 10px;
    opacity: 0.6;
 }
 
.catalogue{
    position:relative;
    max-width: 100%;
    display: flex;
    bottom: 150px;
    margin-top: -400px;
 }
 
 .catalogue li{
    position: relative;
    top: 40px;
    left: 400px;
    list-style: none;
    display: inline-block;
    cursor: pointer;
    transform: 0.5s;
 }
  .catalogue ul{
    width: 60%;
 }
 
 .catalogue li img{
    width: 250px;
    height: 150px;

 }
 strong{
    color: brown;
    text-decoration-line: underline;
}
.catalogue p {
    position: relative;
    left: 50px;
    color: black;
}

</style>