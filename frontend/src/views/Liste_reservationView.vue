<script setup>
import Layout from "@/components/Layout.vue";
import axios from "axios";


import { onBeforeMount, ref } from 'vue';
const axiosInstance = axios.create({
  baseURL: "https://tokpelocation-backend.onrender.com/api", // Remplacez par l'URL de votre API
  timeout: 1000, // Temps d'attente maximal pour une requête (en millisecondes)
  headers: {
    "Content-Type": "application/json",
    // Ajoutez d'autres en-têtes si nécessaire
  },
});

const liste_reservation = ref([])

const fetchData = async () => {
  try {
    const response = await axiosInstance.get('/reservation'); // Remplacez /endpoint par l'endpoint de votre API
    liste_reservation.value = response.data
  } catch (error) {
    console.error('Erreur lors de la récupération des données', error);
  }
};


onBeforeMount(() =>{
    fetchData()
})

</script>

<template>
    
    <layout>
        <ul class="text-black inline-block space-y-6 ml-10">
            <li v-for="v in liste_reservation" >
                <p>
                    Date_reservation : {{v.Date_reservation}} <br>
                    utilisateur : {{v.utilisateur}} <br>
                    vehicule: {{v.vehicule}} <br>
                    Prix : {{v.Prix}} <br>
                </p>
            </li>
        </ul>
   
    </layout>

</template>

<style scoped>

</style>
