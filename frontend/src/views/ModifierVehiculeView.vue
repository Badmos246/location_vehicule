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
import { useRoute } from 'vue-router';


const nom = ref('')
const energie = ref('')
const marque= ref('')
const prix = ref('')

const vehicule = axios.create({
  baseURL: 'http://localhost:3010/api', // Remplacez par l'URL de votre API
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


const inofVehicule = ref([])

const fetchData = async (id) => {
  try {
    const response = await axiosInstance.get(`/vehicule/${id}`); // Remplacez /endpoint par l'endpoint de votre API
    inofVehicule.value = response.data
    nom.value = inofVehicule.value.Nom
    marque.value = inofVehicule.value.Marque
    prix.value = inofVehicule.value.Prix
    energie.value = inofVehicule.value.Energie
  } catch (error) {
    console.error('Erreur lors de la récupération des données', error);
  }
};


onBeforeMount(() =>{
    fetchData(useRoute().params.id)
})






</script>

<template>
<layout>
    
    <h1 class=" bus bg text-black font-bold text-xl mb-5">MODIFICATION DE VEHICULE</h1>

    <fieldset class="bg text-black  text-xl rounded-sm shadow-md shadow-black" >
        <form @submit.prevent="postData" >
            <label for="Nom">Nom</label><br>
            <input type="text" v-model="nom" name="Nom" id="Nom" placeholder="entrer votre nom" class="w-72 h-10"><br>
            <label for="Marque">Marque</label><br>
            <input type="text" v-model="marque" name="Marque" id="marque" placeholder="Marque du vehicule" class="w-72 h-10"><br>
            <label for="Energie"> Energie</label> <br>
            <input type="Energie" v-model="energie" name="Energie" id="Energie" placeholder="Energie" class="w-72 h-10"> <br>
            <label for="prix"> Prix</label> <br>
            <input type="prix" v-model="prix" name="Prix" id="Prix" placeholder="Prix" class="w-72 h-10"> <br>
            <button type="submit" class="inscription w-30 h-12 bg-slate-600">SOUMETTRE</button>
        </form>
    </fieldset >
</layout>
    
</template>

<style scoped>

.caracteristique {
    text-align: center;
}
.caracteristique .img{
    position: relative;
    left:520px;
    top: -50px;
}

.caracteristique p {
    position: relative;
    top: -60px;
    color: aliceblue;
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
.bus{
    margin-top: 100px;
    position: relative;
    top: -50px;
}


label{
    position: relative;
    font-size: 20px;
    left: 40px;
    top: 20px;
    color: black;
}
 fieldset{
    position: relative;
    display: flex;
    width: 350px;
    height: 350px;
    top: -40px;
    left: 500px;  
 }
 input{
    position: relative;
    left: 40px;
    top: 20px;
    border: none;
}
 ::placeholder{
    padding: 40px;
}
.inscription{
    margin-top: 20px;
    align-items: center;
    margin-left: 220px;
    color: aliceblue;
 }

</style>
