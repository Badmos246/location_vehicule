<script setup>
import Layout from '@/components/Layout.vue'
import imag from '@/assets/images/autobus-removebg-preview.png';
import imag1 from '@/assets/images/istockphoto-1163596917-612x612-removebg-preview.png';
import imag2 from '@/assets/images/istockphoto-1140138866-612x612-removebg-preview.png';
import imag3 from '@/assets/images/autobus-1__1_-removebg-preview.png';
import imag4 from '@/assets/images/istockphoto-181065726-612x612-removebg-preview.png';
import imag5 from '@/assets/images/autobus-removebg-preview.png';


import axiosInstance from '../../axiosConfig';
import { ref,onBeforeMount } from 'vue';
import axios from 'axios';


const nom = ref('')
const energie = ref('')
const marque= ref('')
const prix = ref('')
const images = ref('')


const vehicule = axios.create({
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
        Nom: nom.value,
        Marque: marque.value,
        Energie: energie.value,
        Prix: prix.value
    }


    const response = await vehicule.post('/vehicule', data);
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



const liste_Vehicule = ref([])

const fetchData = async (id) => {
  try {
    const response = await axiosInstance.delete(`/vehicule/${id}`); // Remplacez /endpoint par l'endpoint de votre API
    liste_Vehicule.value = response.data
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
    <h1 class="  bg text-black font-bold text-xl">ENREGISTRER LES VEHICULES</h1>

        <form @submit.prevent="postData" 
        class="   bg-white p-7 rounded-md ">

            <label for="photo" >Choisissez l'image du vehicule</label><br>
            <input type="file" name="image" enctype= "multipart/form-data" class=" mb-5 " /> <br>

            <label for="Nom" class="text-xl ">Nom</label><br>
            <input type="text" v-model="nom" name="Nom" id="Nom" placeholder="entrer votre nom"
             class="w-full h-10   border-gray-500 border-2"><br>
            <label for="Marque" class="text-xl ">Marque</label><br>
            <input type="text" v-model="marque" name="Marque" id="marque" placeholder="Marque du vehicule" 
            class="w-full h-10  border-gray-500 border-2"><br>
            <label for="Energie" class="text-xl "> Energie</label> <br>
            <input type="Energie" v-model="energie" name="Energie" id="Energie" placeholder="Energie"
             class="w-full h-10   border-gray-500 border-2"> <br>
            <label for="prix" class="text-xl "> Prix</label> <br>
            <input type="prix" v-model="prix" name="Prix" id="Prix" placeholder="Prix"
             class="w-full h-10    border-gray-500 border-2" > <br>
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
