<script setup>
import Layout from '@/components/Layout.vue'
import imagei from '@/assets/images/Isuzu-removebg-preview.png';


</script>

<template>
    <layout>
    <div class=" bg-slate-300 flex flex-col justify-center items-center">
       <h1 class="text-xl font-bold mt-10"> Description</h1>
       
        <img :src="imagei" alt="" style="width:450px ; height:300px"  >
        <div class=" w-[400px]" >
            <p class=" font-semibold text-lg">
              Prix : <h0>80.000fcfa</h0>/jr /- de <h0>100km parcouru</h0>  <br>
            Nous mettons des conducteurs qualifiés a votre disposition 
            mais pour les locations sans nos conducteurs  le prix est fait en fonction du nombres de jours
          </p>
        </div> 
    <div class=" flex flex-row mb-6 ">
      <RouterLink to="/reservation"><button  class="bg-green-600 bg text-white w-44 h-12 rounded-md ">Reservez</button> </RouterLink>
      <button  class="bg-green-600 bg text-white ml-5 w-44 h-12 rounded-md"> Contactez nous</button>
    </div>
 </div>

    </layout>
</template>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap');
    *{
      font-family: "Nunito";
  }
h0{
    color: red;
}
</style>