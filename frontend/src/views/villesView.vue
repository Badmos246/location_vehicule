<script setup>
import Layout from '@/components/Layout.vue'



import axiosInstance from '../../axiosConfig';
import { ref,onBeforeMount } from 'vue';
import axios from 'axios';


const Nom = ref('')
const Departement = ref('')



const villes = axios.create({
  baseURL: 'https://tokpelocation-backend.onrender.com/api', // Remplacez par l'URL de votre API
  timeout: 1000, // Temps d'attente maximal pour une requête (en millisecondes)
  headers: {
    'Content-Type': 'application/json',
    // Ajoutez d'autres en-têtes si nécessaire
  }
});

const postData = async () => {
  try {
    const data = {
        Nom: Nom.value,
        Departement: Departement.value,
    }
    const response = await villes.post('/villes', data);
    console.log('Response data:', response.data);
  } catch (error) {
    if (error.response) {
      // Le serveur a répondu avec un code de statut différent de 2xx
      console.error('Response error:', error.response.data);
    } else if (error.request) {
      // La requête a été faite mais aucune réponse n'a été reçue
      console.error('Request error:', error.request);
    } else {
      // Autre type d'erreur
      console.error('Error:', error.message);
    }
  }
};



const liste_Villes = ref([])

const fetchData = async (id) => {
  try {
    const response = await axiosInstance.delete(`/villes/${id}`); // Remplacez /endpoint par l'endpoint de votre API
    liste_Villes.value = response.data
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

  <div class=" bg-slate-300 h-screen items-center justify-center flex flex-col">
    <h1 class="  bg text-black font-bold text-xl">ENREGISTRER LES VILLES</h1>

        <form @submit.prevent="postData" 
        class="   bg-white p-7 rounded-md ">
            <label for="Nom" class="text-xl ">Nom</label><br>
            <input type="text" v-model="Nom" name="Nom" id="Nom" placeholder="entrer  villes"
             class="w-full h-10   border-gray-500 border-2"><br>
            <label for="departement" class="text-xl ">Departement</label><br>
            <input type="text" v-model="Departement" name="Nom" id="Nom" placeholder="entrer le Departement"
             class="w-full h-10   border-gray-500 border-2"><br>
            <div class=" w-full flex justify-center p-5">
              <button type="submit" class=" w-30 h-12 bg-green-600 px-5 rounded-md text-white">SOUMETTRE</button>
            </div>
        </form>
        
  </div>
</layout>
    
</template>

<style scoped>

    @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap');
    *{
      font-family: "Nunito";
  }
  input{
    border-radius: 5px;
  }
</style>
