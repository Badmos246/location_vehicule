<script setup>
import Layout from "@/components/Layout.vue";
import axios from "axios";
import { onBeforeMount, ref } from 'vue';
import { useRouter } from "vue-router";

const router = useRouter()

const axiosInstance = axios.create({
  baseURL: "http://localhost:3010/api", // Remplacez par l'URL de votre API
  timeout: 1000, // Temps d'attente maximal pour une requête (en millisecondes)
  headers: {
    "Content-Type": "application/json",
    // Ajoutez d'autres en-têtes si nécessaire
  },
});

const listeVehicule = ref([])

const fetchData = async () => {
  try {
    const response = await axiosInstance.get('/vehicule'); // Remplacez /endpoint par l'endpoint de votre API
    listeVehicule.value = response.data
  } catch (error) {
    console.error('Erreur lors de la récupération des données', error);
  }
};
const supprimerVehiculeParID = async (id) => {
  try {
    const response = await axiosInstance.delete(`/vehicule/${id}`); 
    fetchData()
    // Remplacez /endpoint par l'endpoint de votre API
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
            <li v-for="v in listeVehicule" >
                <p>
                    Nom : {{v.Nom}} <br>
                    Marque : {{v.Marque}} <br>
                    Energie : {{v.Energie}} <br>
                    Prix : {{v.Prix}} <br>
                </p>
                <button @click="router.push(`/bus/modifier/${v.id}`)" class="bg-blue-400 text-white border-none p-2 rounded" >
                    Modifier
                </button>
                <button @click="supprimerVehiculeParID(v.id)" class="bg-red-400 text-white border-none p-2 rounded" >
                    Supprimer
                </button>
            </li>

        </ul>
        
   
    </layout>

</template>

<style scoped>

</style>
