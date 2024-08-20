<script setup>
import Layout from '@/components/Layout.vue'
</script>

<template>
    <layout>
        <div class=" body  h-screen flex flex-col justify-center items-center text-3xl
         w-full text-white font-bold ">
        
            <h1 class="  text-white text-4xl mt-12 "> NOS SERVICES</h1>
            <p class=" w-[450px] mt-12  "   >
                Nous proposons une variete de services de loction de bus et camions 
                parmi lesquels vous pouvez choisir en fonction de vos besions. <br><br>
                Transport d'entreprise/d'affaires <br> <br>
                Evenements speciaux <br> <br>
                Travaux de chantier BTP <br> <br>
                Transport VIP <br><br>
                
            </p>
        </div>
        
     
    </layout>
</template>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap');
*{
    font-family: "Nunito";
}

.body{
    background-image: url(@/assets/images/Minibus-Gallery-3-removebg-preview.png);
    background-repeat: no-repeat;
    background-size: cover;
}




</style>