<script setup>
import Layout from '@/components/Layout.vue'
import myImage from '@/assets/images/logorent.png';

</script>

<template>
    <div class="bg-black w-full flex items-center justify-between px-4 h-24" >
        <img :src="myImage" alt="">
        <nav class=" justify-center items-center ">
            <ul class="space-x-7 font-medium" >
                <li><RouterLink to="/acceuil">ACCEUIL</RouterLink></li>
                <li><RouterLink to="/services">NOS SERVICES</RouterLink></li>
                <li><RouterLink to="/catalogue">VEHICULES</RouterLink></li>
                <!-- <li><RouterLink to="/location">LOCATION</RouterLink></li> -->
                <li> <a href="">CATEGORIE &#x25BE;</a>
                <ul class="dropdown bg-black"> 
                    <li><RouterLink to="/bus">BUS</RouterLink></li>
                    <li><RouterLink to="/minibus">MINIBUS</RouterLink></li>
                    <li><RouterLink to="/camions">CAMIONS</RouterLink></li>
                </ul>
                </li>
            </ul>
        </nav>
        <div class="flex  items-center gap-5">
            <RouterLink class=" text-white " to="/connexion">SE CONNECTER</RouterLink>
            <RouterLink class=" bg-slate-100 px-4 py-2 rounded-md" to="/inscription">S'INSCRIRE</RouterLink>
        </div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap');
*{
    font-family: "Nunito";
}
</style>
